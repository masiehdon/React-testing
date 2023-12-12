import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';


describe('App component', () => {
    test('Toggling login state and displaying username', async() => {
        render(<App />);
        expect('Welcome').not.toBeInTheDocument()

        fireEvent.click(screen.getByText(/Login/i))

        await screen.findByText(/Welcome/i)

        expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    })
} )


