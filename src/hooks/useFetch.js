import {useState, useEffect} from 'react';

const useFetch = (URL) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       
        fetch(URL)
        .then((res) => {
            if(!res.ok) {
                throw new Error('failed to fetch the data')
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
            setLoading(false);
        })
        .catch(() => {
            setData([]);
            setError(error.message);
            setLoading(false)
        });

   }, [])


  return {
    data, loading, error
  }
}

export default useFetch