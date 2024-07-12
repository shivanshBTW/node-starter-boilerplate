import express from 'express'
import cors from 'cors'

const port = process.env.PORT || 2021

const app = express()

app.get('/sendMessage', async (req, res) => {
  // const { query } = req
  // const { topic, timestamp } = query
  // const response = await sendMessageHandler({ topic, timestamp })
  // res.send({
  //   topic,
  //   response,
  //   randomMessage: 'A Simple Node.js Server is Up and Running.......'
  // })
})

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
  })
)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
