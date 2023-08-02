const NODE_ENV = process.env.NODE_ENV || 'development'
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || 'your_url_here'
const SONARCLOUD_TOKEN = process.env.SONARCLOUD_TOKEN

export { API_ENDPOINT, NODE_ENV, SONARCLOUD_TOKEN }
