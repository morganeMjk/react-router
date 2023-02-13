import React from 'react'
import { useParams } from 'react-router-dom'

// récupération des props dans le composant
export default function BlogPost(props) {

    // on récupère la valeur de la clé id depuis le paramètre de recherche dans l'URL grace au useParams
    const {id} = useParams()

    // on récupère la valeur de la clé blogs depuis les props
    // const blogs = props.blogs
    const {blogs} = props
    console.log(id)

    // On récupère un blog spécifique dans le tableau blogs grace à l'id en comparant l'id du blog et l'id renseigné dans les paramètres de recherche
    const blog = blogs.find((blog) => blog.id === parseInt(id))
    console.log(blog)

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.article}</p>
        </div>
    )
}