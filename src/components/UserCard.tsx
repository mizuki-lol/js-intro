import { User } from '../types'

export default function UserCard({ user }: UserCardProps) {
  return (
    <>
      <p>
        {user.name} is {user.age} years old
        {user.isStudent ? ' and is a student' : ''}
      </p>
    </>
  )
}

interface UserCardProps {
  user: User
}
