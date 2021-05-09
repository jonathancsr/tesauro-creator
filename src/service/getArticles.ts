import { ieeeClient } from '../client/ieee.client'

export const getArticlesWithQuery = async (query:string) => {
    return await ieeeClient.get('/',{params:{
            'querytext':query
        }})
}

export const getArticlesWithQueryAndDate = async (query:string, start:number, end:number) => {
    return await ieeeClient.get('/',{params:{
            'querytext':query,
            'range': `${start}_${end}_Year`
        }})
}

