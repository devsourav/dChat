import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
        <div>
          <select
            id="gender"
            name="gender"
            placeholder="Gender"
            {...register('gender', { required: true })}
            className="mb-4 w-full rounded-sm border p-2 text-sm text-skin-fill"
          >
            <option>Select gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.password && (
            <span className="text-xs text-skin-secondary">
              This field is required
            </span>
          )}
        </div>
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
