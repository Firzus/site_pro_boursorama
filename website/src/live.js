import React, { Component, useEffect } from "react"
import axios from 'axios'

function Live() {
    useEffect(() => {
      const fetchData = async () => {
        await axios.post('https://id.twitch.tv/oauth2/token?client_id=e6i9dghrt34h2mfeqb3dqpa2tjcy08&client_secret=qpxxwh5n0jkpz9f473whmttzut8y84&grant_type=client_credentials')
        .then(response => console.log(response.data))
      }
      fetchData()
    })
  }
 
export default Live