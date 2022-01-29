import { useMemo } from "react"

export const useMemoizations = (pageCount) => {
    let arr = []
    return useMemo(() => {
        for(let i = 0; i < pageCount; i++) {
            arr.push(i + 1)
        }
        console.log(arr)
        return arr
    }, [pageCount])
}