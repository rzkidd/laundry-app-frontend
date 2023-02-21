function Collapse(props) {
    let id = props.id, historyDetails = props.historyDetails.filter(item => item.history_id == id)

    return (
        <div className="collapse my-3" id={'history-' + id}>
            <div className="card card-body border-0 p-0">
                <ul className="list-group list-group-flush">
                    {
                        historyDetails
                        .map((detail) => (
                            <li key={detail.history_id + detail.name} className="list-group-item d-flex justify-content-between align-items-center">
                                {detail.name}
                                <span className="badge rounded-pill" style={{ backgroundColor: 'var(--secondary-color)' }}>{detail.amount}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Collapse;