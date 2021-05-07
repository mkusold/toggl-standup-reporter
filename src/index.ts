require('dotenv').config()
import { getYesterdaysWorkSummary } from './time/getTime';


async function main(){
    const reportedWork = await getYesterdaysWorkSummary();
    console.log('work', reportedWork);   
}
main();