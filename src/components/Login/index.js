

function Login({login, handleLogin, handleUserNameInput, userNameInput}) {
   
    
    return (
        <div>

            {   !login &&
                <form>
                <input type="text" onChange={handleUserNameInput}>
                </input>
            </form>}
        
            {!login 
            ?
            <button onClick={handleLogin}>Log in</button>
            : 
            <button onClick={handleLogin}>Log out</button>
            }
            
        </div>
    )
}

export default Login
