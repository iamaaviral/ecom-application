import React from 'react'
import ReactDom from 'react-dom'

const PortalX = ({name}) => {
    return ReactDom.createPortal(
        <h1>Hi i am {name}</h1>
    , document.getElementById('main-root'))
}

export default PortalX