import { useCallback, useEffect, useState } from "react";

export function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback().then(setValue).catch(setError).finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}