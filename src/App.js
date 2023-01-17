import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const[title, setTitle] = useState('')
  const[author, setAuthor] = useState('')
  const[url, setUrl] = useState('')
console.log(user)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
console.log(username,password)
  return (

    <div>
      {user === null ? <Login password={password} username={username} setUser={setUser} setUsername={setUsername} setPassword={setPassword} /> :
       <div>Logged in as {user.username} <button onClick={()=>{setUser(null)}}>Logout</button> <AddBlog title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} url={url} setUrl={setUrl}/> </div>}
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
