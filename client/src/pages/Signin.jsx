import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { AppContext } from '../providers/storeProvider'
import { Web3Provider } from '../providers/web3Provider'
import { signIn } from '../services/gunServices/userService'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export const Signin = () => {
  const { states, actions } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const walletProvider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(actions)
    walletProvider && Web3Provider(walletProvider, actions)
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
    <Card
      className={'mx-auto max-w-sm bg-skin-fill p-4 opacity-80 sm:p-6 md:p-8'}
    >
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="userName"
          name="username"
          placeholder="Username"
          className="w-full"
          errors={errors}
          {...register('userName', { required: true })}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full"
          errors={errors}
          {...register('password', { required: true })}
        />
        <Button
          type="submit"
          className={'w-full bg-skin-secondary py-2 px-6 font-bold'}
        >
          Sign In
        </Button>
        <div className="pt-2 text-sm font-medium text-skin-primary">
          Not registered?{' '}
          <Link to="/sign-up" className="text-skin-secondary hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </Card>
  )
}
