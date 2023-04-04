import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { AppContext } from '../providers/storeProvider'
import { Web3Provider } from '../providers/web3Provider'
import { signIn, getUserPublicKey } from '../services/gunServices/userService'
import Card from '../components/Card'

export const Signin = () => {
  const { states, actions } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const walletProvider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(actions)
    walletProvider && Web3Provider(walletProvider, actions)
    // getUserPublicKey('ravi', (data) => {
    //   console.log('hello ' + data)
    // })
  }, [])

  const onSubmit = async (data) => {
    signIn(data.userName, data.password, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('user signIn')
        navigate('chats')
      }
    })
    console.log(data)
  }

  return (
    <Card className={'mx-auto max-w-sm p-4 sm:p-6 md:p-8'}>
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
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <Link
            to="/sign-up"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Card>
  )
}
