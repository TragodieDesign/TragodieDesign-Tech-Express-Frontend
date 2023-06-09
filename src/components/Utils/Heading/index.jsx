import React from 'react'
import PropTypes from 'prop-types'

const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
} 
const Heading =({type, children, ...props}) =>{
    return (
        <h1></h1>
    )
}
Heading.defaultProps={
    type:'h1'
}
Heading.propTypes ={
    children: PropTypes.node,
    type: PropTypes.string
}

export default Heading