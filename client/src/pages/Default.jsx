import React from 'react'
import Brand from '../components/Brand'
import ContainerWrap from '../components/ContainerWrap'

export const Default = () => {
  return (
    <ContainerWrap
      className={
        'w-auto justify-center bg-skin-primary opacity-80 sm:w-[80%] md:w-[75%] lg:w-[70%]'
      }
    >
      <div>
        <Brand />
        <p className="px-32">
          Our platform utilizes cutting-edge blockchain technology to facilitate
          instant and secure transactions, while IPFS provides a peer-to-peer
          network for storing and sharing files. Join our community today and
          experience a new level of privacy, security, and convenience in your
          online interactions.
        </p>
      </div>
    </ContainerWrap>
  )
}
