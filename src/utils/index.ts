export const getTimeAgo = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds <= 59) return `${seconds} second${seconds > 1 ? "s" : ""}`;
    if (minutes <= 59) return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""}`;
    if (days < 365) return `${days} day${days > 1 ? "s" : ""}`;
    return "";
}

export function saveItem<T>(key: string, item: T) {
    window.localStorage.setItem(key, JSON.stringify(item));
}

export function getItem<T>(key: string): T | null {
    const item = window.localStorage.getItem(key);
    if (item) return JSON.parse(item) as T;
    return null;
}