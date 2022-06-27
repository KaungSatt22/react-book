import React from 'react';
import useFetch from "./hook";
const Fetch = ({uri,renderSuccess,
                isLoading = <p>Loading</p>,
                isError = error => <pre>{JSON.stringify(error,null,2)}</pre>
                }) => {
    const {loading,data,error} = useFetch(uri)
    if(loading)return isLoading;
    if(error) return isError(error);
    if(data) return renderSuccess({data})



};

export default Fetch;