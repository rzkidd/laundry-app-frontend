import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color }) => (
    <div className='w-100 h-100 position-fixed d-flex justify-content-center align-items-center'
        // style={{ 
        //     backgroundColor: 'var(--backdrop-color)'
        // }}
    >
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);
 
export default Loader;