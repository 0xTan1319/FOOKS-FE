import axios from 'axios'

const API_URL = 'http://localhost:4000/api/auth'

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password })
  return response.data // Assuming the token comes in response.data.token
}

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password })
  return response.data
}
