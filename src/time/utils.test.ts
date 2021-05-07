import { constructUrl, formatDate } from './utils';

describe('Utils', () => {
    describe('constructUrl', () => {
        test('it should construct a fully formed url from many discrete url chunks', () => {
            const result = constructUrl('a', 'b', 'c');
            expect(result).toEqual('a/b/c');
        })
    });
    describe('formatDate', () => {
        test('it should format a date in YYYY-MM-DD format (which the Toggl expects)', () => {
            expect(formatDate(new Date(2021, 5, 23))).toEqual('2021-06-23');
        })
    })
})