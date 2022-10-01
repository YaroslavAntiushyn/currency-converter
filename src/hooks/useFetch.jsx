import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'


export default function useFetch(url) {

    const [fetchedData, serFetchedData] = useState({
        data:[],
        isLoading: true,
        error: false,
    })
    const fetchData = useCallback(async() =>{
        try{
            const response = await axios.get(url)
            const data = await response.data;
            if(data){
                serFetchedData({
                    data: data.results ? data.results : data,
                    isLoading: false,
                    error: false,
                })
            }
        } catch(e){
            if(axios.isCancel(e)){
                console.log(`fetched data aborted ${e}`)
            }else{
                console.log('error occured', e)
            }
            serFetchedData({
                data: [],
                isLoading:false,
                error: true,
            })
        }
    }, [url])
    
    useEffect(() =>{
        fetchData();

    }, [url, fetchData])

    const {data, isLoading, error} = fetchedData;

  return {data, isLoading, error}
}
