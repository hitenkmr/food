import React, { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchApiCalling, setSearchApiCalling] = useState(false);

    const searchApi = async searchTerm => {
        console.log('Hi there!');
        setSearchApiCalling(true)
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setSearchApiCalling(false)
        } catch (err) {
            setErrorMessage('Something went wrong');
            setSearchApiCalling(false)
        }
    };

    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage, searchApiCalling];
};