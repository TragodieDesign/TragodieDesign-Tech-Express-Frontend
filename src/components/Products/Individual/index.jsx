import Image from 'next/image';
import * as Styled from './styles';
import PropTypes from 'prop-types';
import { Eye } from '@styled-icons/remix-line/Eye';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt';
import { useEffect, useState } from 'react';
import { Http } from 'src/Http/api';
import Link from 'next/link'
const Individual = (props) => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await Http.get('products');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Styled.Individual>
      <Styled.Box className='card-box'>
        <Image
          className='img-fallback'
          src={props.img}
          alt={props.alt}
          layout='responsive'
          width={props.w}
          height={props.h}
        />
        <Styled.Actions className='card-actions'>
          <Styled.Icon>
            <Eye className='icon' size='50' />
          </Styled.Icon>
          {data.map((products) => {
            if (products.id === props.products.id) {
              return (
                <Styled.Icon key={products.id}>
                  <Link href={`/products/${products.slug}`} className='icon' size='50'>
                    
                    <RightArrowAlt className='icon' size='50' />
                    
                  </Link>
                </Styled.Icon>
              );
            }
            return null;
          })}

        </Styled.Actions>
        <Styled.Content>
          <Styled.Title>{props.title}</Styled.Title>
          <Styled.Price>R$ {props.price}</Styled.Price>
        </Styled.Content>
      </Styled.Box>
    </Styled.Individual>
  );
};

Individual.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Individual;
