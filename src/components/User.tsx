import { IUser } from '../models'

interface UserProps {
  user: IUser
}

export function User({ user }: UserProps) {
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <p className="font-bold">{user.username}</p>
      <p>
        {user.name.firstname} {user.name.lastname}
      </p>
      <p>
        Adress: {user.address.city}, {user.address.street} {user.address.number}
      </p>
      <p>Phone: {user.phone}</p>
    </div>
  )
}
