import { Highlights,Heading, Card, TitleBox, SliderList, Banners, SingleProduct, BuyButton} from '@/components/All'
import {fromImageToUrl, API_URL} from '../../Http/urls'
//import products from '../../../products.json'
import Image from 'next/image';
import Head from 'next/head'



const Product = ({product}) => {
	
	return ( 
  <div>
    <div>
      <Head>
        {product.meta_title &&
          <title>{product.meta_title}</title>
        }
        {product.meta_desciption &&
          <meta 
          name="description"
          content={product.meta_desciption}
          ></meta>  
        }
      </Head>
    </div>
    <div className='main' >
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

      <div>
      <h1>
        {product.title}
      </h1>
      </div>
      <div>
      <h3>
        R$ {product.price}
      </h3>

      </div>
      <div>
        <p>
          {product.description}
        </p>
      </div>
      <div>
        <BuyButton product={product}/>
      </div>
    </div>		
</div>
	)
}
export async function getStaticProps({params: {slug}}) {
  const product_res = await fetch (`${API_URL}/products/?slug=${slug}`)
  const found =await product_res.json()
  return {props:{
    product: found[0]
  }}
}
export async function getStaticPaths(){
  const products_res =await fetch(`${API_URL}/products/`)
  const products = await products_res.json()
  return {
    paths: products.map(product =>({
      params: {slug:String(product.slug)}
    })),
    fallback:false
  }

}

export default Product
