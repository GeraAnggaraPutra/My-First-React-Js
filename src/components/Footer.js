import { Navbar, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar className='bg-dark mt-5' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Learn React</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#" className='text-decoration-none'>GAP</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Footer