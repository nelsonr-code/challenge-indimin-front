import { Link } from 'react-router-dom'
import Logo from '@assets/react.svg'

export const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img
						alt=''
						src={Logo}
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					{'Indimin challenge app'}
				</Link>
				<Link>{'Management'}</Link>
			</div>
		</nav>
	)
}
