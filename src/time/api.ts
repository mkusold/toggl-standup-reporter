import { constructUrl } from "./utils";

export const TOGGL_BASE_URL = 'https://api.track.toggl.com';

export const REPORTS_BASE_URL = constructUrl(TOGGL_BASE_URL, 'reports/api/v2');
export const REPORT_DETAILS_BASE_URL = constructUrl(REPORTS_BASE_URL, 'details');
