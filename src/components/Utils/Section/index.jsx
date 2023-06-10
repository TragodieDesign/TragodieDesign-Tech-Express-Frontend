import  PropTypes  from "prop-types"
import * as Styled from './styles'

const Section = (props) =>{
    return (
        <Styled.Section {...props} 
        className={`${props.className || 'section'}`} 
        >
            {props.children}
        </Styled.Section>
    )
}
    Section.propTypes={
    children: PropTypes.node,
    className: PropTypes.string
}
export default Section