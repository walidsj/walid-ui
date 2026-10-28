import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Input } from './input'

describe('Input', () => {
	it('supports native attributes and an accessible label', () => {
		render(
			<>
				<label htmlFor="email">Email</label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
				/>
			</>,
		)

		const input = screen.getByRole('textbox', { name: 'Email' })

		expect(input).toHaveAttribute('type', 'email')
		expect(input).toHaveAttribute('name', 'email')
		expect(input).toHaveAttribute('placeholder', 'you@example.com')
		expect(input).toBeRequired()
	})

	it('updates its value when the user types', async () => {
		const user = userEvent.setup()

		render(<Input aria-label="Full name" />)
		const input = screen.getByRole('textbox', { name: 'Full name' })

		await user.type(input, 'Walid')

		expect(input).toHaveValue('Walid')
	})

	it('supports the disabled state', async () => {
		const user = userEvent.setup()

		render(
			<Input
				aria-label="Full name"
				disabled
			/>,
		)
		const input = screen.getByRole('textbox', { name: 'Full name' })

		await user.type(input, 'Walid')

		expect(input).toBeDisabled()
		expect(input).toHaveValue('')
	})

	it('marks the input invalid from the invalid prop', () => {
		render(
			<Input
				aria-label="Email"
				invalid
			/>,
		)

		expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
			'aria-invalid',
			'true',
		)
	})

	it('preserves consumer-provided aria-invalid values', () => {
		render(
			<Input
				aria-label="Email"
				aria-invalid="grammar"
			/>,
		)

		expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
			'aria-invalid',
			'grammar',
		)
	})

	it('merges custom classes with base classes', () => {
		render(
			<Input
				aria-label="Search"
				className="bg-red-500"
			/>,
		)

		const input = screen.getByRole('textbox', { name: 'Search' })

		expect(input).toHaveClass('bg-red-500')
		expect(input).not.toHaveClass('bg-background')
	})

	it('supports input sizes', () => {
		const { rerender } = render(
			<Input
				aria-label="Search"
				size="sm"
			/>,
		)
		expect(screen.getByRole('textbox')).toHaveClass('h-8')
		rerender(
			<Input
				aria-label="Search"
				size="lg"
			/>,
		)
		expect(screen.getByRole('textbox')).toHaveClass('h-12')
	})

	it('forwards a ref to the input element', () => {
		const ref = createRef<HTMLInputElement>()

		render(
			<Input
				aria-label="Full name"
				ref={ref}
			/>,
		)

		expect(ref.current).toBeInstanceOf(HTMLInputElement)
	})
})
