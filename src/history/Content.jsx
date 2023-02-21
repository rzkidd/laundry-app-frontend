import * as Icon from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import Collapse from './_Collapse'

function Content(props) {
    let histories = props.histories, historyDetails = props.historyDetails
    const [filteredHistories, setFilteredHistories] = useState([])
    const [filterSelected, setFilterSelected] = useState('all')

    const getHistoryDay = (date) => {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let d = new Date(date)
        return days[d.getDay()]
    }

    const handleFilter = (event) => {
        let filter = event.target.dataset.filter
        
        if (filter == '7_days'){
            setFilteredHistories(histories.filter(history => Date.parse(history.created_at) > Date.now() - (7 * 24 * 1000 * 3600)))
            setFilterSelected(filter)
        } else if (filter == '1_month') {
            setFilteredHistories(histories.filter(history => Date.parse(history.created_at) > Date.now() - (30 * 24 * 1000 * 3600)))
            setFilterSelected(filter)
        } else if (filter == '3_months'){
            setFilteredHistories(histories.filter(history => Date.parse(history.created_at) > Date.now() - (3 * 30 * 24 * 1000 * 3600)))
            setFilterSelected(filter)
        } else if (filter == 'all'){
            setFilteredHistories([...histories])
            setFilterSelected(filter)
        }
    }

    useEffect(() => {
      setFilteredHistories([...histories])
        
      return () => {
        
      }
    }, [histories])
    
    return (
        <main 
            id='main-content'
            style={{ 
                backgroundColor: 'var(--ternary-color)', 
                height: 'auto',
                borderTopLeftRadius: '3rem',
                borderTopRightRadius: '3rem',
                top: '10vh',
                overflow: 'auto'
            }}
            className='position-absolute w-100 d-flex flex-column justify-content-between px-4 pt-5' 
        >
            <div className="row justify-content-between">
                <div className="col-3">
                    <button type='button' 
                        className={(filterSelected == 'all') ? 
                            'history-filter-btn btn w-100 border border-3 active'
                            :
                            'history-filter-btn btn w-100 border border-3'
                        } 
                        style={{ color: 'var(--secondary-color)' }}
                        data-filter='all'
                        onClick={(e) => handleFilter(e)}
                    >
                        All
                    </button>
                </div>
                <div className="col-3">
                    <button type='button' 
                        className={(filterSelected == '7_days') ? 
                            'history-filter-btn btn w-100 border border-3 active'
                            :
                            'history-filter-btn btn w-100 border border-3'
                        } 
                        style={{ color: 'var(--secondary-color)' }}
                        data-filter='7_days'
                        onClick={(e) => handleFilter(e)}
                    >
                        7 days
                    </button>
                </div>
                <div className="col-3">
                    <button type='button' 
                        className={(filterSelected == '1_month') ? 
                            'history-filter-btn btn w-100 border border-3 active'
                            :
                            'history-filter-btn btn w-100 border border-3'
                        } 
                        style={{ color: 'var(--secondary-color)' }}
                        data-filter='1_month'
                        onClick={(e) => handleFilter(e)}
                    >
                        1 month
                    </button>
                </div>
                <div className="col-3">
                    <button type='button' 
                        className={(filterSelected == '3_months') ? 
                            'history-filter-btn btn w-100 border border-3 active'
                            :
                            'history-filter-btn btn w-100 border border-3'
                        } 
                        style={{ color: 'var(--secondary-color)' }}
                        data-filter='3_months'
                        onClick={(e) => handleFilter(e)}
                    >
                        3 months
                    </button>
                </div>
            </div>
            <div className="mt-4 washing-content h-100" style={{ marginBottom: '10vh' }}>
                {
                    filteredHistories.map((history) => (
                        <div key={history.history_id} id="collapse-toggle">
                            <button type="button" 
                                
                                className="btn container bg-white rounded-3 fw-bold fs-4 d-flex align-items-center justify-content-between mb-3 py-2 px-4 " 
                                style={{ 
                                    height: 'auto',
                                    color: 'var(--primary-color)' 
                                }}
                                data-bs-toggle="collapse" 
                                data-bs-target={'#history-' + history.history_id}
                                // onClick={() => handleOpenDetails(history.history_id)}
                            >
                                <div className="d-flex flex-column align-items-start">
                                    <div className="fs-5">
                                        {new Date(history.created_at).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div className="fs-6 fw-light">
                                        {(history.history_count > 1) ? history.history_count + ' items' : history.history_count + ' item'}
                                    </div>
                                </div>
                                <Icon.ChevronDown />
                            </button>
                            <Collapse id={history.history_id} historyDetails={historyDetails}/>
                        </div>
                    ))
                }
            </div>
            
        </main>
    )
}

export default Content