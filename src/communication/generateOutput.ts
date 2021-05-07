import fs from 'fs';
import path from 'path';
import htmlCreator from 'html-creator';
import { Work } from "../time/getTime";
import { formatDate } from '../time/utils';

function createHTML(reportedWork: Array<Work>){

    const html = new htmlCreator([
        {
            type: 'head',
            content: [{ type: 'title', content: `Standup for ${formatDate(new Date())}` }]
        },
        {
            type: 'body',
            attributes: { style: 'padding: 1rem' },
            content: [
                {
                    type: 'h4',
                    content: `Yesterday ${formatDate(new Date())}`,
                },
                {
                    type: 'ul',
                    content: reportedWork.map(({project, description}) => ({
                        type: 'li',
                        content: `${project ? `(${project}) - ` : ''} ${description}`,
                    })),
                },
            ],
        },
    ]);
     
    return html.renderHTML();
}

export function generateOutput(reportedWork: Array<Work>){
    const html = createHTML(reportedWork);
    const outputPath = path.join(path.resolve(__dirname), '../../', 'reports', `Standup.html`);
    return fs.writeFileSync(outputPath, html);
}