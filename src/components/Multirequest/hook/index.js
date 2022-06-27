import {useCallback, useEffect, useMemo, useState} from "react";

const useFetch = (uri)=> {
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        if(!uri)return;
        fetch(uri)
            .then(items=> items.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError)
    },[uri])
    return {loading,error,data}
}

export const useIterator = (items = [], initialValue = 0) => {
    const [i, setIndex] = useState(initialValue);

    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    }, [i]);

    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0);
        setIndex(i + 1);
    }, [i]);

    const item = useMemo(() => items[i], [i]);

    return [item || items[0], prev, next];
};

export default useFetch;