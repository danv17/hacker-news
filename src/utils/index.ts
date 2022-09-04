export const getTimeAgo = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds <= 59) return `${seconds} seconds`;
    if (minutes <= 59) return `${minutes} minutes`;
    if (hours < 24) return `${hours} hours`;
    return "";
}
