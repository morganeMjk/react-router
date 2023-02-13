import { Link } from 'react-router-dom';


export default function BlogList(props) {
    
    const {blogs} = props
    
    return (
        <div>
            { blogs.map ((blog, index) => {
                return <Link to={`/blog/${blog.id}`} key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.article.substr(0,blog.article.length/5)} [...]</p>
                </Link>
            })}
        </div>
    )
}