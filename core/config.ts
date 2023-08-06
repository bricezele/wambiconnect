const NODE_ENV = process.env.NODE_ENV || 'development'
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || 'your_url_here'
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const SONARCLOUD_TOKEN = process.env.SONARCLOUD_TOKEN

export { API_ENDPOINT, NODE_ENV, SONARCLOUD_TOKEN, STRAPI_URL}
