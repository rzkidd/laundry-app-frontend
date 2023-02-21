import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

function Footer(props) {
    let active = props.active
    return (
        <footer className="navbar navbar-expand w-100 bg-white fixed-bottom" style={{ height: '10vh' }}>
            <ul className='navbar-nav justify-content-around container-fluid'>
                { (active == 'home') ?
                    <li 
                        className='nav-item d-flex align-items-center rounded-pill px-3 py-1 fw-bold' 
                        style={{ backgroundColor: 'var(--ternary-color)', color: 'var(--secondary-color)' }}>
                            <Icon.House className='pe-2' style={{ fontSize: '2.5rem' }}/>
                            Home
                    </li>
                    :
                    <li className='nav-item d-flex align-items-center px-3 py-1'>
                        <Link to={`/`} className='text-dark'>
                            <Icon.House className='fs-1 '/>
                        </Link>
                    </li>
                }
                { (active == 'histories') ? 
                    <li 
                        className='nav-item d-flex align-items-center rounded-pill px-3 py-1 fw-bold' 
                        style={{ backgroundColor: 'var(--ternary-color)', color: 'var(--secondary-color)' }}>
                            <Icon.FileText className='pe-2' style={{ fontSize: '2.5rem' }}/>
                            History
                    </li>
                    :
                    <li className='nav-item d-flex align-items-center px-3 py-1'>
                        <Link to={`/histories`} className='text-dark'>
                            <Icon.FileText className='fs-1 '/>
                        </Link>
                    </li>
                }
                <li className='nav-item d-flex align-items-center px-3 py-1'><Icon.Bell className='fs-1 '/></li>
                <li className='nav-item d-flex align-items-center px-3 py-1'><Icon.Person className='fs-1 '/></li>
            </ul>
        </footer>
    )
}

export default Footer;