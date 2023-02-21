import * as Icon from 'react-bootstrap-icons';

function Header() {
    return (
        <header className='w-100 container d-flex flex-column justify-content-center px-3' style={{ 
            backgroundColor: 'var(--primary-color)',
            height: '30vh'
             }}>
            <div className="d-flex justify-content-between fs-3">
                <div className="text-light">Welcome back</div>
                <div className="text-light"><Icon.GearFill /></div>
            </div>
            <h1 className='text-light'>John Doe</h1>
        </header>
    )
}

export default Header;