import React, { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default () => {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const dummyResults = {
        total: 8228,
        businesses: [
            {
                rating: 4,
                price: "$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 1738,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            },

            {
                rating: 7.84,
                price: "$$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 17338,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            },
            {
                rating: 5.4,
                price: "$$$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 13238,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            },
            {
                rating: 6.7,
                price: "$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 13238,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            },
            {
                rating: 5.8,
                price: "$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 4432,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            },
            {
                rating: 5.4,
                price: "$",
                phone: "+14152520800",
                id: "E8RJkjfdcwgtyoPMjQ_Olg",
                alias: "four-barrel-coffee-san-francisco",
                is_closed: false,
                categories: [
                    {
                        alias: "coffee",
                        title: "Coffee & Tea"
                    }
                ],
                review_count: 13238,
                name: "Four Barrel Coffee",
                url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                coordinates: {
                    latitude: 37.7670169511878,
                    longitude: -122.42184275
                },
                image_url: "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                location: {
                    city: "San Francisco",
                    country: "US",
                    address2: "",
                    address3: "",
                    state: "CA",
                    address1: "375 Valencia St",
                    zip_code: "94103"
                },
                distance: 1604.23,
                "transactions": ["pickup", "delivery"]
            }
        ],
        region: {
            center: {
                latitude: 37.767413217936834,
                longitude: -122.42820739746094
            }
        }
    }

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
            // setResults(response.data.businesses)
            setResults(dummyResults.businesses)
        } catch (err) {
            toJSON: () => object;
            console.log(err.toJSON().message)
            // setErrorMessage(err.toJSON().message)
            setResults(dummyResults.businesses)
            setLoading(false)
        }
    };
    useEffect(() => {
        searchApi('');
    }, []);

    return [loading, results, errorMessage, searchApi];
};