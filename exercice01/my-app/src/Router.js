import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route} from "react-router-dom";
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';


export default function Router() {


  // on créé un tableau blogs contenant plusieurs objets
  const blogs = [
    {
        title: "Article n°1",
        id: 1,
        article: "Lorem ipsum dolor sit amet, "
    },
  
    {
        title: "Article n°2",
        id: 2,
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sint voluptate dolores numquam nulla impedit culpa consectetur aperiam, quos soluta?"
    },
  
    {
        title: "Article n°3",
        id: 3,
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sint voluptate dolores numquam nulla impedit culpa consectetur aperiam, quos soluta?"
    }
  ]


  return (

    // RouterContainer est un container (+/- comme une div) qui englobe toutes les routes. Il englobe forcément Routes mais peut aussi contenir d'autres éléments (une nav ou un footer par exemple) qui apparaitrons sur toutes les routes (pages). Toutes les balises Route doivent être dans la balise Routes.
    <RouterContainer>
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs} />}/>
        <Route path='/blog/:id' element={<BlogPost blogs={blogs}/>} />
      </Routes>
    </RouterContainer>
  )
}