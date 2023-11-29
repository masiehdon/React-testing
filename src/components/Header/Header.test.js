import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended Jest matchers
import Header from './index.jsx';

describe('Header component', () => {
    test('renders header correctly', () => {
        render(<Header />)
        const headerText = screen.getByText(/Rock Scissor Paper/i)
        expect(headerText).toBeInTheDocument()
    } )

     test('Header element renders correctly', () => {
        render(<Header />)
        const headerElement = screen.getByRole('heading', { level: 1 })
        expect(headerElement).toBeInTheDocument()
    })

    test('Semantic html-element "header" exists', () => {
        render(<Header />)
        const semanticHeaderElement = screen.getByRole('heading')
        expect(semanticHeaderElement).toBeInTheDocument()
    })

    test('Header renders',() => {
        render(<Header />)
        const headerElement = screen.getByRole('banner')
        expect(headerElement).toBeInTheDocument()
})
})

