import React from 'react'
import Button from './Button'

const ContentSwitch = ({ category, user }) => {
  if (!category && !category.length) return <></>
  switch (category.toLowerCase()) {
    case 'friends':
    case 'groups':
      return (
        <h3 className="px-4 text-left text-sm font-medium leading-4">
          {user.name}
        </h3>
      )
    case 'requests':
      return (
        <div className="flex justify-between">
          <h3 className="px-4 text-left text-sm font-medium leading-4">
            {user.name}
          </h3>
          <div>
            <Button className={'mx-3 bg-skin-secondary py-1 px-2 text-xs'}>
              Accept
            </Button>
            <Button className={'bg-skin-primary py-1 px-2 text-xs'}>
              Reject
            </Button>
          </div>
        </div>
      )
    default:
      return <></>
  }
}

const UserCard = ({ category, user }) => {
  return (
    <li key={user.id} className="relative flex items-center p-3">
      <div className="avatar-wraper">
        <img src={user.avatar} alt="user" />
      </div>
      <div className="w-full text-skin-base">
        <ContentSwitch category={category} user={user} />
        <p className="text-gray-400 text-end text-xs">{user.date}</p>
      </div>
    </li>
  )
}

export default UserCard
