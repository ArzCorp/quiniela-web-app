import { API_URL, FETCH_HEADERS, METHODS } from './constants'

export const request = async ({ endpoint, method = METHODS.GET, body }) => {
  const URL = `${API_URL}${endpoint}`

  const FETCH_CONFIG = {
    body: JSON.stringify(body),
    headers: FETCH_HEADERS,
    method,
  }

  if (method === METHODS.GET) delete FETCH_CONFIG.body

  const request = await fetch(URL, FETCH_CONFIG)
  const response = await request.json()
  const { success, error, data, message } = response

  if (!success && error) throw new Error(message)

  return data
}
