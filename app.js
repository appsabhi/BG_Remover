const express = require("express")
const Route = require("./Routes/route")
const app = express()


app.set("Views","views")
app.set("view engine","ejs")
app.use(express.static("Public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Route)


app.listen("4000",()=>{
    console.log("app listening on port 4000")
})