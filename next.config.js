/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = { ...nextConfig, env: { CLIENT: process.env.CLIENT, CLIENT_URL: process.env.CLIENT_URL } }
