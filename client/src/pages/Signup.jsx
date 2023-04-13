import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded'
import { signUp } from '../services/gunServices/userService'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export const Signup = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    signUp(data.userName, data.password, (err) => {
      if (err) {
        console.log(err)
      } else {
        navigate('sign-in')
        console.log('user signUp')
      }
    })
    console.log(data)
  }

  return (
    <Card
      className={
        'bg-blur bordered mx-auto max-w-sm bg-skin-fill p-4 opacity-80 sm:p-6 md:p-8'
      }
    >
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="userName"
          name="username"
          placeholder="Username"
          className="w-full"
          errors={errors}
          component={AccountCircleRoundedIcon}
          {...register('userName', { required: true })}
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email Id"
          className="w-full"
          errors={errors}
          component={AlternateEmailRoundedIcon}
          {...register('email', { required: true })}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full"
          errors={errors}
          component={VpnKeyRoundedIcon}
          {...register('password', { required: true })}
        />
        <Button
          type="submit"
          className={'w-full bg-skin-secondary py-2 px-6 font-bold'}
        >
          Sign Up
        </Button>
        <div className="pt-2 text-sm font-medium text-skin-primary">
          Go back to{' '}
          <Link to="/sign-in" className="text-skin-secondary hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </Card>
  )
}
