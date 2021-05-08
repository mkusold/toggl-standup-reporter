require('dotenv').config()
import schedule from 'node-schedule';
import { generateOutput } from './communication/generateOutput';
import { getYesterdaysWorkSummary } from './time/getTime';
import { formatDate } from './time/utils';


async function updateReport(){
    console.log(`${formatDate(new Date())}: Creating Report...`);
    const reportedWork = await getYesterdaysWorkSummary();
    await generateOutput(reportedWork);
}
async function main(){
    const rule = new schedule.RecurrenceRule();
    // 8 AM every day
    rule.hour = 8;
    rule.minute = 0;

    const job = schedule.scheduleJob(rule, updateReport);
}
main();