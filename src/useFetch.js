
import { useState, useEffect } from "react";



const useFetch = (url) => {


    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController()
        fetch(url, { signal: abortCont.signal })
            .then((res) => {

                if (!res.ok) {
                    throw Error('Sorry could not fetch data from the API')
                }

                return res.json()
            })
            .then((data) => {
                setData(data)
                setisLoading(false)
                setError(null)
            })
            .catch((err) => {

                if (err.name === "AbortError") {
                    console.log('Fetch aborted')
                }
                else {
                    setError(err.message)
                    setisLoading(false)
                }

            })

        return ()=> abortCont.abort()

    }, [url])

    return { data, isLoading, error }

}

export default useFetch;