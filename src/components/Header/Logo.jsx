
import Image from 'next/image'
import Link from 'next/link'



const Logo =() => {
  return (
    <Link href={'./'}>
    <Image 
    src={'https://res.cloudinary.com/dx92aia72/image/upload/v1682558962/ID%20visual/logo_branco_pmvt8w.png'} 
    width={75} 
    height={75}/>
    
    </Link>
    )
}
export default Logo