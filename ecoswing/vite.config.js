import { defineConfig } from 'vite'
import dns from 'node:dns'
import ip from 'ip'
dns.setDefaultResultOrder('verbatim')


export default defineConfig({
    plugins: [],
    server: {
      host: ip.address(), // Change this to a valid IP address if needed
      port: 3000, // Optional otherwise your app will start on default port
    },
  })