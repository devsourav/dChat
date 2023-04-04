import React from 'react'

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
            <button className="mx-2 rounded-lg border border-gray-400 bg-white p-1 text-xs text-gray-800 shadow hover:bg-gray-100">
              Accept
            </button>
            <button className="rounded-lg border border-gray-400 bg-white p-1 text-xs text-gray-800 shadow hover:bg-gray-100">
              Reject
            </button>
          </div>
        </div>
      )
    default:
      return <></>
  }
}

const UserCard = ({ category, user }) => {
  return (
    <li
      key={user.id}
      className="relative flex items-center p-3 hover:bg-gray-100"
    >
      <div className="avatar-wraper">
        <img src={user.avatar} alt="user" />
      </div>
      <div className="w-full">
        <ContentSwitch category={category} user={user} />
        <p className="text-end text-xs text-gray-400">{user.date}</p>
      </div>

      {/* <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>{user.date}</li>
      </ul> */}

      {/* <a
        href="#"
        className={classNames(
          'absolute inset-0 rounded-md',
          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
        )}
      /> */}
    </li>
  )
}

export default UserCard
