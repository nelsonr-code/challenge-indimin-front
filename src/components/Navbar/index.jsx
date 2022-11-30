import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '@assets/react.svg'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>
					{/* <Link to={'/management/citizens/list/'}> */}
					<img
						alt=''
						src={Logo}
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					{'Indimin challenge app'}
					{/* </Link> */}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto '>
						<Link to={'/'} className='me-2'>
							{'Citizens'}
						</Link>
						<Link to={'/management/tasks/list'}>{'Tasks'}</Link>
						{/* <Nav.Link href='#home'>{'Ojo'}</Nav.Link>
						<Nav.Link href='#link'>{'Bruja'}</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
