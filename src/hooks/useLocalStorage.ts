import React, { Dispatch, SetStateAction } from "react"

export function useLocalStorage<T>(key: string, value: T): [T, Dispatch<SetStateAction<T>>] {
    const [ storedValue, setStoredValue ] = React.useState<T>(() => {
        if (typeof window === 'undefined') {
            return value;
        }

        try {
            const item = window.localStorage.getItem(key);
            if (!item) {
                window.localStorage.setItem(key, JSON.stringify(value));
                return value;
            }
            return JSON.parse(item);
        } catch (error: any) {
            return value;
        }
    });

    const setValue = (value: any) => {
        try {
            setStoredValue(value);
            window?.localStorage.setItem(key, JSON.stringify(value));
        } catch (error: any) {
            console.log(error);
        }
    }

    return [storedValue, setValue];    
}
