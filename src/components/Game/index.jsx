import { useState } from "react"

function Game() {
    const [myChoice, setMyChoice] = useState('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FAIuem8M9trReHQRAORDng.png')
    const [computerChoice, setComputerChoice] = useState('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FAIuem8M9trReHQRAORDng.png')   

    const scissor = 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    const paper = 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    const rock = 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'

    const figures = [rock, scissor, paper]


    function handleRoll() {
        const randomNumber = Math.floor(Math.random() * 3)
        setMyChoice(figures[randomNumber]) 
        console.log(randomNumber)
    } 
    
    function handleRollComputer() {
        const randomNumber = Math.floor(Math.random() * 3)
        setComputerChoice(figures[randomNumber]) 
        console.log(randomNumber)
        } 
    
    return (
        <main className="game-container">
            <section className="myChoice choice">
                <img className="img" alt="figure1" src={myChoice} />
                <button onClick={handleRoll} className="btn">Let's roll player 1</button>
            </section>
            <div className="computerChoice choice">
                <img className="img" alt="figure2" src={computerChoice} />
                <button onClick={handleRollComputer} className="btn">Let's roll Player 2</button>
            </div>
           
            
        </main>
    )
}

export default Game;
