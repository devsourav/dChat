import { useState } from 'react'
import { Tab } from '@headlessui/react'
import UserCard from './UserCard'
import userAvatar from '../assets/images/user.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {
  let [categories] = useState({
    Friends: [
      {
        id: 1,
        name: 'Amit',
        avatar: userAvatar,
        date: '3h ago',
      },
      {
        id: 1,
        name: 'Rohit',
        avatar: userAvatar,
        date: '5h ago',
      },
    ],
    Groups: [
      {
        id: 1,
        name: 'SIT guys',
        avatar: userAvatar,
        date: '6h ago',
      },
      {
        id: 1,
        name: 'Music group',
        avatar: userAvatar,
        date: '7h ago',
      },
    ],
    Requests: [
      {
        id: 1,
        name: 'Akash',
        avatar: userAvatar,
        date: '2h ago',
      },
      {
        id: 1,
        name: 'Rohan',
        avatar: userAvatar,
        date: '5h ago',
      },
    ],
  })

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 bg-blue-900/20 p-1">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-opacity-60 focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="h-full">
        {Object.values(categories).map((category, idx) => (
          <Tab.Panel className="h-full" key={idx}>
            <ul>
              {category.map((user, id) => (
                <UserCard
                  key={id}
                  user={user}
                  category={Object.keys(categories)[idx]}
                />
              ))}
            </ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
