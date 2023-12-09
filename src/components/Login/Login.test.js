import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './index.js';


describe('Login component', () => {
test('Toggling login state', () => {
    render(<Login login={false} handleLogin={() => {}} />)
    const text = screen.getByText(/Log in/i)
    expect(text).toBeInTheDocument();
    fireEvent.click(screen.getByText((/Log in/i)))
    // const updatedState = screen.getByText((/Log out/i))
    expect(screen.getByText(/Log out/i)).toBeInTheDocument()
    

});
})
