import { Link } from "react-router-dom";

export default function Profile(props) {

  const {users} = props


  return (
    <div>
      { users.map ((user, index) => {
        return <Link to={`/user/${user.id}`} key={index}>
          <h1>{user.name}</h1>
        </Link>
      })}
    </div>
  )
}
