import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

function Header({title}) {
    return (
        <header className='w-100 position-absolute container d-flex flex-column px-3 pt-3' style={{ 
            backgroundColor: 'var(--primary-color)',
            height: '15vh'
             }}>
            <div className="d-flex fs-3 align-items-center ">
                <Link to={`..`}>
                    <div className="text-light"><Icon.ArrowLeftCircle className='fs-1'/></div>
                </Link>
                <div className="text-light mx-auto fw-bold">{title}</div>
            </div>
        </header>
    )
}

export default Header;