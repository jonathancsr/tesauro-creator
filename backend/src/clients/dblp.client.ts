import axios from 'axios'

const dblp_base_url = process.env.DBLP_BASE_URL

export const dblpClient = axios.create({baseURL: dblp_base_url})

