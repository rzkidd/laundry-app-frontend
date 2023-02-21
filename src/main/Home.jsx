import Header from './Header';
import Footer from '../layouts/Footer';
import Content from './Content';

function Home(props) {
    let active = props.active
    return (
        <div className='wrapper position-relative'>
            <Header />
            <Content />
            <Footer active={active}/>
        </div >
    )
}

export default Home;
