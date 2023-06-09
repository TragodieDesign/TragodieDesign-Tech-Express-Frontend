import Image from 'next/image';
import * as Styled from './styles'
import PropTypes from 'prop-types';
import {Eye} from '@styled-icons/remix-line/Eye'
import {Link} from '@styled-icons/fa-solid/Link'
const Card =(props) =>{
    return (
<Styled.Card>
    <Styled.Box className='card-box'>

    <Image 
                className="img-fallback"
                src={props.img}
                alt={props.alt}
                layout='responsive'
                width={props.w}
                height={props.h}
            
            />
            <Styled.Actions className='card-actions'>
                <Styled.Icon>
                   <Eye className='icon' size="50"/>
                </Styled.Icon>
                <Styled.Icon>
                   <Link className='icon' size="50"/>
                </Styled.Icon>
            </Styled.Actions>
            <Styled.Content>
                <Styled.Title>
                    {props.title}
                </Styled.Title>
                <Styled.Price>
                R$ {props.price}
                </Styled.Price>
                
            </Styled.Content>


    </Styled.Box>
</Styled.Card>
    )
}
Card.PropTypes ={
    img: PropTypes.string,
    alt: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}
export default Card