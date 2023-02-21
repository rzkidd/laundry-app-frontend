import Cleaning from '../assets/icons/cleaning.png'
import Cloth from '../assets/icons/cloth.png'
import Iron from '../assets/icons/iron.png'
import WashingMachine from '../assets/icons/washing-machine.png'
import {Link} from 'react-router-dom' 

function Content() {
    return (
        <main 
            style={{ 
                backgroundColor: 'var(--ternary-color)', 
                height: '65vh',
                borderTopLeftRadius: '3rem',
                borderTopRightRadius: '3rem',
                top: '25vh'
            }}
            className='position-absolute w-100' 
        >
            <div className="row row-cols-2 my-4 mx-4 main-content h-100">
                <div className="col bg-white rounded-5">
                    <Link to={`/wash-and-iron`}>
                        <img src={WashingMachine} alt="washing-machine" />
                        <h4>Wash & Iron</h4>
                    </Link>
                </div>
                <div className="col bg-white rounded-5">
                    <Link to={''}>
                        <img src={Iron} alt="iron" />
                        <h4>Ironing</h4>
                    </Link>
                </div>
                <div className="col bg-white rounded-5">
                    <Link to={''}>
                        <img src={Cloth} alt="cloth" />
                        <h4>Dry Cleaning</h4>
                    </Link>
                </div>
                <div className="col bg-white rounded-5">
                    <Link to={''}>
                        <img src={Cleaning} alt="cleaning" />
                        <h4>Cleaning</h4>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Content;