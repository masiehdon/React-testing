import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended Jest matchers
import Footer from './index.jsx';


test('renders footer with correct text', () => {
    render(<Footer />);
    const text = screen.getByText(/Copyright 2023/i);
    
    expect(text).toBeInTheDocument();
    
});

test('renders header correctly', () => {
    render(<Footer />);
    const header = screen.getByRole('heading', { level: 3 })
    expect(header).toBeInTheDocument();
})

test('h4 renders correctly', () => {
    render(<Footer />)
    const h4Element = screen.getByRole('heading', {level: 4})
    expect(h4Element).toBeInTheDocument()
})

test('footer renders', () => {
    render(<Footer />)
    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
})