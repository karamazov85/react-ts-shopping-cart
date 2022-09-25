import { useState, useEffect } from 'react'

function getSavedValue<T>(key:string, initialValue: T | (() => T)) {

    const storedValue = JSON.parse(localStorage.getItem(key))
        
    if(storedValue) return storedValue;

    if(initialValue instanceof Function) return (initialValue as () => T)();

    return initialValue;
}

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {  // this is only called to get the initialValue once at pageload.
        return getSavedValue(key, initialValue)
    })

    // whenever value changes, write it in local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue] as [typeof value, typeof setValue] // explicity what the return types are!!!
}