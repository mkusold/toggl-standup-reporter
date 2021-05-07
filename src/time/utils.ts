export function constructUrl(...urlElements: Array<string>){
    return urlElements.join('/');
}

export function formatDate(date: Date): string{
    return date.toISOString().slice(0, 10);
}

export function getPreviousDate(daysFromToday: number){
    const today = new Date()
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - daysFromToday)
    return formatDate(yesterday);
}