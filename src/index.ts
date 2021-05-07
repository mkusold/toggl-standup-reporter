require('dotenv').config()
import { generateOutput } from './communication/generateOutput';
import { getYesterdaysWorkSummary } from './time/getTime';


async function main(){
    const reportedWork = await getYesterdaysWorkSummary();
    console.log('work', reportedWork);   
    await generateOutput(reportedWork);
}
main();