import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom' 
import ModalContent from './ModalContent';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import ModalNotification from './ModalNotification';
import { render } from '@testing-library/react';
import Loader from '../layouts/_Loader';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

function Content(props) {
    let items = props.items
    let [selectedItems, setSelectedItems] = [props.selectedItems, props.setSelectedItems]
    let [loader, setLoader] = [props.loader, props.setLoader]
    const [checked, setChecked] = useState([])
    const [notifStatus, setNotifStatus] = useState();
    const [notifMessage, setNotifMessage] = useState();
    const [isShow, setIsShow] = useState(false);

    const handleModal = () => {
        setIsShow(!isShow)
    }
    
    const handleItemAdd = (event) => {
        let id = event.target.id
        id = id[id.length - 1]
        let temp = [...selectedItems]
        temp.forEach((x) => { 
            if (x.id == id) {
                x.amount++
            }
        })
        setSelectedItems(temp)
    }

    function handleItemDecrease(event) {
        let id = event.target.id
        id = id[id.length - 1]
        let temp = [...selectedItems]
        temp.forEach((x) => { 
            if (x.id == id) {
                if (x.amount > 0){
                    x.amount--
                }
            }
        })
        setSelectedItems(temp)
    }

    function handleDeleteItem(event, id) {
        let temp = [...selectedItems]
        let checkedTemp = [...checked]
        checkedTemp.splice(checkedTemp.indexOf(id), 1)
        temp.splice(temp.findIndex((item) => item.id == id), 1)
        setSelectedItems(temp)
        setChecked(checkedTemp)
    }

    function handleSubmit(){
        console.log('json body: ', JSON.stringify(selectedItems) )
        if (selectedItems.length != 0){
            setLoader(true)
            fetch(BACKEND_URL + 'items', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(selectedItems)
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.message)
                setNotifStatus(response.status)
                setNotifMessage(response.message)
                setLoader(false)
                setIsShow(!isShow)
                setSelectedItems([])
                setChecked([])
            })
        } else {
            setNotifMessage('There are no items to be added')
            setIsShow(!isShow)
        }
    }

    return (
        <main 
            id='main-content'
            style={{ 
                backgroundColor: 'var(--ternary-color)', 
                height: '90vh',
                borderTopLeftRadius: '3rem',
                borderTopRightRadius: '3rem',
                top: '10vh',
                overflow: 'auto'
            }}
            className='position-absolute w-100 d-flex flex-column justify-content-between' 
        >
            <div className="mt-4 mx-4 washing-content h-100">
                {
                selectedItems.map((item) => (
                    <div key={item.id} className=" container bg-white rounded-3 fw-bold fs-4 d-flex align-items-center justify-content-between mb-3" 
                        style={{ 
                            height: '4rem',
                            color: 'var(--primary-color)' 
                        }}
                    >
                        <div className='d-flex align-items-center'>
                            <button key={item.id} type='button' className='btn me-3' onClick={e => handleDeleteItem(e, item.id)}>
                                <Icon.Trash id={'delete-' + item.id} className='fs-3 text-danger' />
                            </button>
                            {item.name}
                        </div>
                        <div className='w-25 d-flex justify-content-around align-items-center'>
                            <button type='button' onClick={handleItemDecrease} className='btn'>
                                <Icon.DashCircle id={'min-' + item.id} className='fs-3' style={{ cursor: 'pointer' }} />
                            </button>
                            <span>{item.amount}</span>
                            <button type='button'  onClick={handleItemAdd} className='btn'>
                                <Icon.PlusCircle id={'add-' + item.id} className='fs-3' style={{ cursor: 'pointer' }} />
                            </button>
                        </div>
                    </div>
                ))
                }
                <button className="btn w-100 bg-white rounded-3 text-muted d-flex align-items-center justify-content-center mb-3" 
                    style={{ height: '3rem' }} data-bs-toggle='modal' data-bs-target="#items-modal">
                    Add item
                </button>
            </div>
            <button type='button'
                className='btn mb-4 rounded-4 align-self-center d-flex align-items-center justify-content-center fw-bold fs-4 text-white' 
                style={{ 
                    backgroundColor: 'var(--secondary-color)',
                    height: '5rem',
                    width: '90%'
                }}
                onClick={handleSubmit}
            >
                Done
            </button>
            <ModalContent 
                items={items} 
                selectedItems={selectedItems} 
                setSelectedItems={setSelectedItems}
                checked={checked}
                setChecked={setChecked}
            />
            <ModalNotification 
                status={notifStatus}
                message={notifMessage}
                isShow={isShow}
                handleModal={handleModal}
            />
            
        </main>
    )
}

export default Content;