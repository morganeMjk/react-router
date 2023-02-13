import React from 'react';
import { BrowserRouter as RouterContainer, Routes, Route} from "react-router-dom";
import ProfileDetails from './Components/ProfileDetails';
import Profile from './Components/Profile';

export default function Router() {

  const users = [ 
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      avatar: "https://via.placeholder.com/150x150"
    },

    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@example.com",
      avatar: "https://via.placeholder.com/150x150"
    },

    {
      id: 3,
      name: "Bob Smith",
      email: "bobsmith@example.com",
      avatar: "https://via.placeholder.com/150x150"
    }
  ]

  return (
    <RouterContainer>
      <Routes>
        <Route path='/' element={<ProfileDetails users={users} />}/>
        <Route path='/user/:id' element={<Profile users={users}/>} />
      </Routes>
    </RouterContainer>

  )
}