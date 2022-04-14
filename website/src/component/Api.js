import axios from 'axios'

let Api = axios.create({
  headers: {
    'Client-ID': 'e6i9dghrt34h2mfeqb3dqpa2tjcy08',
    'Authorization' : 'Bearer h0ni2msxs37xvybwmgo8aeju4ngpdl'
  }
})

export default Api