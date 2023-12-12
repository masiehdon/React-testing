

function Header({userName, login}) {
    return (
        <header>
            <h1 className="header">Rock Scissor Paper</h1>
            {login && <h3>Welcome {userName}</h3> }
           
        </header>
    )
}

export default Header;
