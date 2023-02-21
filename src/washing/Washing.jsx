import Header from '../layouts/Header';
import Content from './Content';
import { useEffect, useState } from 'react';
import Loader from '../layouts/_Loader';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

function Washing() {
    const [selectedItems, setSelectedItems] = useState([])
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch(BACKEND_URL + 'items')
        .then(response => response.json())
        .then(response => {
            setItems(response.data)
            setLoader(false)
        })
    }, [])

    return (
        <div className='wrapper position-relative'>
            <Header title={'Add details'} />
            <Content 
                items={items} 
                selectedItems={selectedItems} 
                setSelectedItems={setSelectedItems} 
                loader={loader}
                setLoader={setLoader}
            />
            {loader && <Loader type={'spinningBubbles'} color={'#46345c'}/>}
        </div >
    )
}

export default Washing;
