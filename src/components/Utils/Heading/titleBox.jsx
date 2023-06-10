import PropTypes from 'prop-types'
import * as Styled from './styles'

const TitleBox =(props) =>{
    return <Styled.TitleBox {...props}>
        {props.children}
        </Styled.TitleBox>}
TitleBox.propTypes={
    children: PropTypes.node
}
export default TitleBox