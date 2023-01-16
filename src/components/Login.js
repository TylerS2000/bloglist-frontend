import login from '../services/login'

export default function Login(props){
    return(
    <div>
        <h1>Login</h1>
        <form>
            <label>Username</label>
            <input type="text" name="username" value={props.username} onChange={(event)=>props.setUsername(event.target.value)}/>
            <label>Password</label>
            <input type="password" name="password" value={props.password} onChange={(event)=>props.setPassword(event.target.value)} />
            <button type="submit" onClick={login({username:props.username, password:props.password})}>Login</button>
        </form>
    </div>)
}