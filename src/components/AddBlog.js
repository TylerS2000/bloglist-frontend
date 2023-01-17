import axios from "axios";
export default function AddBlog(props) {
    const config = {
        headers: { Authorization: "bearer " + JSON.parse(localStorage.getItem("user")).token},
      }
      const createBlog = async (object) => {
        try {
            const response = await axios.post("http://localhost:3003/api/blogs", object,config);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
      console.log(config)
    return (
        <div>
        <form>
            <label>Title</label>
            <input type="text" name="title" value={props.title} onChange={(event)=>props.setTitle(event.target.value)}/>
            <label>Author</label>
            <input type="text" name="author" value={props.author} onChange={(event)=>props.setAuthor(event.target.value)} />
            <label>Url</label>
            <input type="text" name="url" value={props.url} onChange={(event)=>props.setUrl(event.target.value)}/>
            <button type="submit" onClick={async ()=>createBlog({url:props.url,author:props.author,title:props.title})}>Add</button>
        </form>
        </div>
    );
    }