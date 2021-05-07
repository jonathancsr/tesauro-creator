import axios from 'axios'

const ieee_base_url = process.env.IEEE_BASE_URL

/**
 * Declare ieee client
 * */
export const ieeeClient = axios.create({baseURL: ieee_base_url})

