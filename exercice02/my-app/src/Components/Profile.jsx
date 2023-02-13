import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProfileDetails(props) {

  const {id} = useParams();

  const {users} = props;

  const user = users.find((user) => user.id === parseInt(id))

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.avatar} alt="avatar" />
    </div>
  )
}