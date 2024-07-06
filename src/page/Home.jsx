import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"


const Home = () => {

    const checkoutHandler = async (amount) => {

        // const {data} = await axios.post("http://localhost:4000/api/checkout",{
        //   amount
        // })
        // console.log(data)
        // console.log(window)

    }
  return (
    <Box>
        <Stack direction={"row"}>
            <Card
            amount={5000}
            img="https://avatars.githubusercontent.com/u/95423130?v=4"
            checkoutHandler={checkoutHandler}
            />

        </Stack>
    </Box>
  )
}

export default Home