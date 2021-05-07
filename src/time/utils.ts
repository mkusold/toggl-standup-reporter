export function constructUrl(...urlElements: Array<string>){
    return urlElements.join('/');
}

export function formatDate(date: Date): string{
    return date.toISOString().slice(0, 10);
}