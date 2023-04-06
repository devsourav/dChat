import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export const Landing = () => {
  const navigate = useNavigate()

  const navToPage = (path) => {
    navigate(path)
  }

  return (
    <div>
      <p className="mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%]">
        Welcome to the next generation of online communication! Our
        decentralized chat platform offers end-to-end encryption, cryptocurrency
        transactions, and file sharing with IPFS, ensuring your privacy,
        security, and data storage needs are all met in one convenient location.
      </p>
      <div className="py-10">
        <Button
          className="mx-5 bg-skin-secondary py-2 px-6 font-bold"
          onClick={() => {
            navToPage('sign-in')
          }}
        >
          Sign In
        </Button>
        <Button
          className="mx-5 bg-skin-primary py-2 px-6 font-bold"
          onClick={() => {
            navToPage('sign-up')
          }}
        >
          Sign Up
        </Button>
      </div>
      {/* <p className="mx-auto w-2/3 text-center">
        Our platform utilizes cutting-edge blockchain technology to facilitate
        instant and secure transactions, while IPFS provides a peer-to-peer
        network for storing and sharing files. Join our community today and
        experience a new level of privacy, security, and convenience in your
        online interactions.
      </p> */}
    </div>
  )
}
