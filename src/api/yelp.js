import { axios } from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    Headers: {
        Authorization: 'Bearer api-key'
    }
});