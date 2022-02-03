import { useCollection } from '../hooks/useCollection'

// components
import Avatar from './Avatar'

// styles
import './OnlineUsers.css'

export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection('users')

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          {user.online && <span className="online-user"></span>}
          {user.online && <span className='user-inactive'>{user.displayName}</span> ?
          <span className='user-active'>{user.displayName}</span> :
          <span className='user-inactive'>{user.displayName}</span> }

          <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}
