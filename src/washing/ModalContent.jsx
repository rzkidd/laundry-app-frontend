import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom' 
import $ from 'jquery'

function ModalContent(props) {
    let items = props.items
    let [selectedItems, setSelectedItems] = [props.selectedItems, props.setSelectedItems]
    let [checked, setChecked] = [props.checked, props.setChecked]
    

    function handleAddItem() {
        let temp = [...selectedItems]
        for (let check of checked) {
            let item = items.find(item => item.id == check)
            if (item && !selectedItems.find(selectedItem => selectedItem.id == check)){
                temp = [...temp, {id: item.id, name: item.name, amount: 0}]
            }
        }

        setSelectedItems(temp)

    }

    function handleReset(){
        setChecked([])
        setSelectedItems([])
        $('.form-check-input').prop('checked', false);
    }

    function handleChange(event) {
        let id = event.target.id
        id = id[id.length - 1]

        let temp = [...checked]
        let selectedTemp = [...selectedItems]
        
        if (!checked.find(item => item == id)){
            temp = [...temp, id]
        } else {
            let deleted = temp.splice(temp.indexOf(id), 1)
            selectedTemp.splice(selectedTemp.findIndex((item) => item.id == deleted[0]), 1)
        }

        setSelectedItems(selectedTemp)
        setChecked(temp);
    }

    function isChecked() {
        items.forEach((item) => {
            if (checked.find((check) => check == item.id)){
                $('#item-' + item.id).prop('checked', true)
            } else {
                $('#item-' + item.id).prop('checked', false)
            }
        })
        // return (checked.find(item => item == id)) ? true : false
    }
    
    useEffect(() => {
        isChecked()
    })

    return (
        <div className="modal fade" id="items-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-white" style={{ backgroundColor: 'var(--primary-color)' }}>
                        <h1 className="modal-title fs-5 " id="items-modal-label">Choose item</h1>
                        <Icon.XLg style={{ cursor: 'pointer' }} className='fs-4' data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        {
                            items.map((item) => (
                                <div key={item.id}>
                                    <input type="checkbox" name={'item-' + item.id} id={'item-' + item.id} className='form-check-input me-3' onChange={handleChange} />
                                    <label htmlFor={'item-' + item.id} className='form-label'>{item.name}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
                        <button type="button" className="btn text-white" style={{ backgroundColor: 'var(--secondary-color)' }} onClick={handleAddItem} data-bs-dismiss="modal">Add item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContent;