import React from 'react';

const Input = (props, nameOfref) => {
    return <input {...props} ref={nameOfref}/>
}

const forwardInput = React.forwardRef(Input)
export default forwardInput
