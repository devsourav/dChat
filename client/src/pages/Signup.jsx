import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Card from '../components/Card'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Card>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5> */}
        <div>
          <input
            type="text"
            name="username"
            id="username"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="Username"
            {...register('userName', { required: true })}
          />
          {errors.userName && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <select
            id="gender"
            name="gender"
            {...register('gender', { required: true })}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          >
            <option></option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign up
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Go back to{' '}
          <Link
            to="/sign-in"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </form>
    </Card>
  )
}
