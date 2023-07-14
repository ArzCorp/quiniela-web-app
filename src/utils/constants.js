export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const EMPTY_STRING = ''

export const FETCH_HEADERS = Object.freeze({
  'content-type': 'application/json',
})

export const METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
})

export const INITIAL_VALUES = Object.freeze({
  LOGIN_FORM: {
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  },
})

export const ROUTES = Object.freeze({
  LOGIN: '/login',
  REGISTER: '/register',
})
