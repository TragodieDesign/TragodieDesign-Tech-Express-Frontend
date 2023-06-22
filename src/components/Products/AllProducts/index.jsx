
import { fromImageToUrl, API_URL } from '@/Http/urls'
import { propTypes } from 'prop-types'
import Image from 'next/image';
import {Container, Row, Button} from 'react-bootstrap'

const AllProducts =({products})=>{
    return(
        <div>
                {products.map(product=>(
            <div key={product.name} >
                <div>
                    <Image
                  className='thumbnail'
                  src={product.image.alternativeText}
                  alt={product.image.name}
                  layout='responsive'
                  width={product.image.width}
                  height={product.image.height}
                />
                </div>
                <div>{product.title} <br/>R$ {product.price}</div>
                    <div>
                    <Button href={`/products/${product.slug}`} >Ver produto</Button>
                    </div>
            </div>
        ))
            
        }
        </div>
        
    )

}
export async function getStaticProps(){
    //Fetch products
    const product_res =await fetch(`${API_URL}/products`)
    const products = await product_res.json()

    //return products as props
    return {
        props:{
            products
        }
    }
}
export default AllProducts