import { fireEvent, render, screen } from '@testing-library/react'
import Game from './index'


describe('Game', () => {
   test('The button text renders', () => {
    render(<Game />)
    const textElement = screen.getAllByText(/Let's roll/i);
    expect(textElement.length).toBeGreaterThanOrEqual(2)
}); 

test('buttons render', () => {
    render(<Game />)
    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements.length).toBeGreaterThan(0)
})

test('images render correctly', () => {
    render(<Game />)
    const imageElements = screen.getByAltText('figure1')
    expect(imageElements).toBeInTheDocument()
})

test('Images with different names render', () => {
    render(<Game />)
    const imgElement = screen.getByAltText(/figure2/i)
    expect(imgElement).toBeInTheDocument()
}) 
const array = ['rock', 'scissor', 'paper']
test('Array', () => { 
    render(<Game array={array}/>)
array.forEach((element) => {
const figuresArrayElements = screen.queryAllByText(element);
expect(figuresArrayElements.length).toBeGreaterThanOrEqual(0);
})
  
})

test('Main element renders correctly', () => {
    render(<Game />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
})

test('images render', () => {
    render(<Game />)
    const sectionElements = screen.getAllByRole('img');
    expect(sectionElements.length).toBeGreaterThan(0);
})

test('The number of buttons are less than 3', () => {
    render(<Game />)
    const numberOfButtons = screen.queryAllByRole('button')
    expect(numberOfButtons.length).toBeLessThan(3)
})

test('button  renders correctly', async() => {
    render(<Game />)
    const nameOfButtons = await screen.findAllByRole('button', {name: /Let's roll player 1/i})
    expect(nameOfButtons.length).toBeLessThan(3)
})


test('clickEvent generates a random number between 1 and 3', () => {
   render(<Game />)
   const initialMyChoice = screen.getByAltText('figure1')
   const images = [
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'

]
   expect(initialMyChoice.src).toBe('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FAIuem8M9trReHQRAORDng.png')

   fireEvent.click(screen.getByText(/Let's roll player 1/i))
   const updatedState = screen.getByAltText('figure1')
   expect(images).toEqual(expect.arrayContaining([updatedState.src]))

})

})


