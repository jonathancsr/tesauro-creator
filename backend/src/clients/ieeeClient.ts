import axios from 'axios'

const ieee_base_url = process.env.IEEE_BASE_URL

export const dblpClient = axios.create({baseURL: ieee_base_url})

