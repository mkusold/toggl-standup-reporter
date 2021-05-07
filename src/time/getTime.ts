import TogglClient from 'toggl-api';
import { formatDate } from './utils';

interface DetailedReport {
    total_billable: number;
    total_currencies: Array<{currency: string; amount: number}>;
    total_count: number;
    per_page: number;
    data: Array<{
        id: number;
        pid: unknown;
        tid: unknown;
        description: string;
        start: Date;
        end: Date;
        update: Date;
        dur: number;
        user: string;
        use_stop: boolean;
        client?: string;
        project?: string;
        project_color: string;
        project_hex_color?: string;
        task: unknown;
        billable: number;
        is_billable: boolean;
        cur: string;
        tags: Array<unknown>;
    }>
}

interface Work {
    description: string;
    project?: string;
}

function getYesterday(){
    const today = new Date()
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1)
    return formatDate(yesterday);
}

export async function getYesterdaysWorkSummary(){
    const yesterdayFormatted = getYesterday();

    const QUERY_PARAMS = {
        workspace_id: process.env.TOGGL_WORKSPACE_ID,
        user_agent: process.env.TOGGL_USER_AGENT,
        start_date: yesterdayFormatted,
        end_date: yesterdayFormatted,
        order_by: 'date',
        order_dir: 'asc'
    };

    try {
        const result = await new Promise<DetailedReport>((resolve, reject) => {
            const toggl = new TogglClient({apiToken: process.env.TOGGL_API_TOKEN});
            // options: https://github.com/toggl/toggl_api_docs/blob/master/reports.md#request-parameters
            toggl.detailedReport(QUERY_PARAMS, (err: any, response: DetailedReport) => {
                if(err){
                    reject(err);
                } else {
                    resolve(response)
                }
            })
        });
        const reportedWork: Array<Work> = result.data && result.data.length ? result.data.map(({description, project}) => {
            return {
                description,
                project,
            }
        }) : [];
        
        return reportedWork;
    } catch(e) {
        throw e;
    }
    
   
    
}