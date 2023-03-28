import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  const navToPage = (path) => {
    navigate(path)
  }

  return (
    <div>
      <p className="mx-auto w-2/3">
        Welcome to the next generation of online communication! Our
        decentralized chat platform offers end-to-end encryption, cryptocurrency
        transactions, and file sharing with IPFS, ensuring your privacy,
        security, and data storage needs are all met in one convenient location.
      </p>
      <div className="py-10">
        <button
          className="mx-5 rounded-lg bg-white py-2 px-4 font-bold text-blue-500 hover:bg-gray-200"
          onClick={() => {
            navToPage('sign-in')
          }}
        >
          Signin
        </button>
        <button
          className="mx-5 rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            navToPage('sign-up')
          }}
        >
          Signup
        </button>
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
