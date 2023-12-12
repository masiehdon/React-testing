import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from './index.js';


describe('Login component', () => {
test('Toggling login state', async () => {
    render(<Login login={false} handleLogin={() => {}} />)
    const text = screen.getByText(/Log in/i)
    expect(text).toBeInTheDocument();
    fireEvent.click(screen.getByText((/Log in/i)));
    
    await waitFor(() => {
        console.log(document.body.innerHTML);
 expect(screen.getByText(/Log out/i)).toBeInTheDocument()
    });
  
});
})
