import express from 'express';
import * as router from "./routers/export-router";

const app = express()
const port = process.env.PORT || 8080

//настрока базы в config

app.use(express.json())
app.use('/users', router.userRouter)
app.use(express.static(process.cwd() + "/public"));

app.listen(port, () => {
    console.log('server on port ' + port)
})

