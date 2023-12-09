

function Login({login, handleLogin}) {
   
    
    return (
        <div>
            {!login ?
            <button onClick={handleLogin}>Log in</button>
            : 
            <button onClick={handleLogin}>Log out</button>
            }
        </div>
    )
}

export default Login
