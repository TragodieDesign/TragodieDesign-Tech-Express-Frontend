/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['localhost', 'res.cloudinary.com','http://54.89.253.12:1337']
  }

}


module.exports = nextConfig
