export const TOGGL_BASE_URL = 'https://api.track.toggl.com';

export function constructUrl(...urlElements: Array<string>){
    return urlElements.join('/');
}
export const REPORTS_BASE_URL = constructUrl(TOGGL_BASE_URL, 'reports/api/v2');
export const REPORT_DETAILS_BASE_URL = constructUrl(REPORTS_BASE_URL, 'details');
