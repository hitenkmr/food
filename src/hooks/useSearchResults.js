import React, { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default () => {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        if (searchTerm == '') { return };
        console.log('Hi there!');
        setLoading(true)
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setErrorMessage(null)
            setLoading(false)
            setResults(response.data.businesses)
        } catch (err) {
  toJSON: () => object;
            console.log(err.toJSON().message)
            setErrorMessage(err.toJSON().message)
            setLoading(false)
        }
    };
    useEffect(() => {
        searchApi('');
    }, []);

    return [loading, results, errorMessage, searchApi];
};