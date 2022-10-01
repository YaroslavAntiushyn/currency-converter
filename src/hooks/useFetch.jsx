import React, { useCallback, useEffect } from 'react'
import axios from 'axios';

export default function useFetch(url) {

    const [fetchedData, setFetchedData] = ({
        data: [],
        isLoading: true,
        error: false,
    });

    const fetchData = useCallback(async() => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            if (data) {
                setFetchedData({
                    data: data.results ? data.results : data,
                    isLoading: false,
                    error: false,
                })
            } 
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log((`fetched data aborted ${error}`));
            } else {
                console.log(error.nessage);
            }
            setFetchedData({
                data: [],
                isLoading: false,
                erorr: true,
            })
        }
    }, [url]);

    useEffect( () => {
        fetchData();
    }, [url, fetchData]);

    const {data, isLoading, error} = fetchData;

  return {data, isLoading, error}
}
