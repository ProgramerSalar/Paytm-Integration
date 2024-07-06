import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"


const Home = () => {

    const checkoutHandler = async (amount) => {

      const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

        const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
          amount
        })
        // console.log(data)
        // console.log(window)

        const options = {
          "key": key, // Enter the Key ID generated from the Dashboard
          "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Manish Kumar",
          "description": "Tutorial of RezorPay",
          "image": "https://avatars.githubusercontent.com/u/95423130?s=400&u=c3cfd05f71ec0e43cf86f3cd3b3f86abd67fdc53&v=4",
          "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
          "callback_url":"http://localhost:4000/api/paymentVerification",
          "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9999999999"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      const razor = new window.Razorpay(options);
      razor.open()
    

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