import React, {useEffect, useState} from 'react';

const GithubFetch = ({username}) => {
    const [data,setData] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    useEffect(()=> {
        if(!username) return;
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setData(data))
            .then(() => setLoading(false))
            .catch(err => setError(err))
    },[username])
    if(error){
        return <div>{error}</div>
    }
    if(loading){
        return <div>Loading .......</div>
    }
    return (
        <div>
            <img src={data.avatar_url} alt={data.login} style={{height : '200px'}}/>
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
};

export default GithubFetch;