export const API_URL = process.env.NEXT_PUBLIC_API_URL


export const MAGIC_PUBLIC_KEY =process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_3C1A9C6DCFDBB388'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51NKXa3AwjYICeY9bCUWzlWujgxiUaQxQRfceC9nT5NTCbDcbKVd16NO1EJe4Nh7TfgvRUvWeafriTW0VFtIavcYp00SFW5sKQM'
/**
 * 
 * @param {any} image
 * 
 */
export const fromImageToUrl =(image) => {
    if (!image){
        return "/public/vercel.svg"
    }
    if (image.url.indexOf("/") === 0){
        return `${API_URL}/${image.url}`
    }
    return image.url
}