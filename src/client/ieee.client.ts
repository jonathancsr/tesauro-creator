import axios from "axios";

export const ieeeClient = axios.create({baseURL: 'http://ieeexploreapi.ieee.org/api/v1/search/articles', params:{
        'apikey':'b5nnfvnct7m43cs63y6j8tdc',
        'format': 'json',
        'sort_order': 'asc'
    }});
