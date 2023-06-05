
import Image from 'next/image'
import Link from 'next/link'



const Logo =() => {
  return (
    <Link href={'./'}>
    <Image 
    src={'/../public/phantom-logo.png'} 
    width={75} 
    height={75}/>
    
    </Link>
    )
}
export default Logo