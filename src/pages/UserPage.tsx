import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import { User } from '../components/User'
import { useUsers } from '../hooks/users'

export function UserPage() {
  const { users, loading, error } = useUsers()
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}
