import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Correct import path

// Define form values types
interface FormValues {
  userName?: string
  email: string
  password: string
  googleId?: string
}

const AuthForm: React.FC = () => {
  const navigate = useNavigate() // Moved outside handleSubmit
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState<FormValues>({
    userName: '',
    email: '',
    password: '',
    googleId: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isLogin) {
        console.log('Logging in...', formData)

        const response = await axios.post(
          'http://localhost:4000/api/auth/login',
          {
            email: formData.email,
            password: formData.password
          }
        )

        const { token } = response.data // Assuming token is in the data property
        if (token) {
          localStorage.setItem('token', token)
          alert('Login successful!')

          navigate('/home')
        }
      } else {
        console.log('Registering...', formData)

        const response = await axios.post(
          'http://localhost:4000/api/auth/register',
          {
            userName: formData.userName,
            email: formData.email,
            password: formData.password
          }
        )

        alert('Registration successful!')
      }
    } catch (error) {
      console.error('Error during authentication', error)
      if (axios.isAxiosError(error) && error.response) {
        alert(`Error: ${error.response.data.message || 'An error occurred'}`)
      } else {
        alert('An error occurred. Please try again.')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
