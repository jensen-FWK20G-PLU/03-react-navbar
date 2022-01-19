import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar component', () => {

	it('renders without crashing', () => {
		render( <NavBar /> )
	})

	it('renders Home, About us, Portfolio in order', () => {
		render( <NavBar /> )
		const buttons = screen.getAllByRole('button')

		expect(buttons.length).toBe(3)

		expect(buttons[0]).toHaveTextContent(/home/i)
		expect(buttons[1]).toHaveTextContent(/^about( us)?/i)
		expect(buttons[2]).toHaveTextContent(/portfolio/i)
	})

	// has Home selected initially (CSS class .selected)
	// selects About us on user click
	// selects Portfolio us on user click
})