import Header from '../layouts/Header';
import Content from './Content';
import { useEffect, useState } from 'react';
import Loader from '../layouts/_Loader';
import Footer from '../layouts/Footer';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

function History(props) {
    let active = props.active

    const [loader, setLoader] = useState(false);
    const [histories, setHistories] = useState([]);
    const [historyDetails, setHistoryDetails] = useState([])

    useEffect(() => {
        setLoader(true)
        fetch(BACKEND_URL + 'histories')
        .then(response => response.json())
        .then(response => {
            setHistories(response.data)
            // console.log(histories)
            // setLoader(false)
        })

        fetch(BACKEND_URL + 'histories/detail')
        .then(response => response.json())
        .then(response => {
            setHistoryDetails(response.data)
            setLoader(false)
        })
    }, [])

    return (
        <div className='wrapper position-relative'>
            <Header title={'History'} />
            <Content 
                histories={histories}
                loader={loader}
                setLoader={setLoader}
                historyDetails={historyDetails}
            />
            <Footer active={active} />
            {loader && <Loader type={'spinningBubbles'} color={'#46345c'}/>}
        </div >
    )
}

export default History;
