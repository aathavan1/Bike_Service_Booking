const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.use("/owner", require('./routes/routeso'))
app.use("/customer", require('./routes/routesc'))



app.listen(3001, () => {
    console.log("Server is running");
})