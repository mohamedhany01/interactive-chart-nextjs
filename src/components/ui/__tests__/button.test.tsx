import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../button'

describe('Button Component', () => {
    it('should render with default variant and dark theme styles', () => {
        const { container } = render(<Button>Click me</Button>)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render with primary variant', () => {
        const { container } = render(<Button variant="default">Primary Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('bg-primary')
        expect(button).toHaveClass('text-primary-foreground')
    })

    it('should render with secondary variant', () => {
        const { container } = render(<Button variant="secondary">Secondary Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('bg-secondary')
        expect(button).toHaveClass('text-secondary-foreground')
    })

    it('should render with outline variant', () => {
        const { container } = render(<Button variant="outline">Outline Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('border')
        expect(button).toHaveClass('bg-background')
    })

    it('should render with destructive variant', () => {
        const { container } = render(<Button variant="destructive">Delete</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('bg-destructive')
        expect(button).toHaveClass('text-destructive-foreground')
    })

    it('should render with ghost variant', () => {
        const { container } = render(<Button variant="ghost">Ghost Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('hover:bg-accent')
    })

    it('should render with different sizes', () => {
        const { container: smallContainer } = render(<Button size="sm">Small</Button>)
        const { container: defaultContainer } = render(<Button size="default">Default</Button>)
        const { container: largeContainer } = render(<Button size="lg">Large</Button>)

        expect(smallContainer.querySelector('button')).toHaveClass('h-9')
        expect(defaultContainer.querySelector('button')).toHaveClass('h-10')
        expect(largeContainer.querySelector('button')).toHaveClass('h-11')
    })

    it('should apply dark theme color tokens correctly', () => {
        const { container } = render(<Button>Dark Theme Button</Button>)
        const button = container.querySelector('button')

        // Verify that the button uses CSS custom properties for dark theme
        expect(button).toHaveClass('bg-primary')
        expect(button).toHaveClass('text-primary-foreground')
        expect(button).toHaveClass('ring-offset-background')
    })

    it('should be disabled when disabled prop is true', () => {
        const { container } = render(<Button disabled>Disabled Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeDisabled()
        expect(button).toHaveClass('disabled:opacity-50')
    })
})
