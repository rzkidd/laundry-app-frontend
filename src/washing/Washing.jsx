import Header from '../layouts/Header';
import Content from './Content';
import { useEffect, useState, createContext } from 'react';
import Loader from '../layouts/_Loader';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducer/loaderSlice';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const ItemsContext = createContext()

function Washing() {
    const [selectedItems, setSelectedItems] = useState([])
    const [items, setItems] = useState([])

    const loader = useSelector((state) => state.loader.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggle(true))
        setTimeout(() => {
            fetch(BACKEND_URL + 'items')
            .then(response => response.json())
            .then(response => {
                setItems(response.data)
                dispatch(toggle(false))
            })
        }, 5000);
    }, [])

    return (
        <ItemsContext.Provider value={items}>
            <div className='wrapper position-relative'>
                <Header title={'Add details'} />
                <Content 
                    selectedItems={selectedItems} 
                    setSelectedItems={setSelectedItems} 
                />
                {loader && <Loader type={'spinningBubbles'} color={'#46345c'}/>}
            </div >
        </ItemsContext.Provider>
    )
}

export default Washing;
