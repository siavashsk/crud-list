import { useState } from "react"

export function useFromData(initialState = {}) {
    const [form, setFrom] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFrom({ ...form, [name]: value })
    }

    return [form, handleChange]
}