let express = require("express")
require("dotenv").config()
let App = express()

App.use(express.json()) //yeh line mujhe permission deti hai ke agar frontend se body me koi object ara hai to usko receive karke handle kara jae
//yeh line use karte hi mujhe body ka data backend me milne lagega

App.post("/login", (req, res) => {

    let { username, password } = req.body;


    let obj = {
        status: true,
        msg: "Login Successfully",
        username,
        password,
    }

    res.status(200).json(obj)
    // res.send(obj)

})

App.get("/product", (req, res) => {

    let {title}=req.query
    

    let product = [
        {
            title: "IPHONE",
            desc: "I Phone Mobile"
        },
        {
            title: "MI",
            desc: "MI Mobile"
        },
        {
            title: "VIVO",
            desc: "VIVO Mobile"
        },
    ]

    if(title && title!= ""){
        product=product.filter((v) => v.title.toLowerCase().includes(title.toLowerCase()))
    }

    let obj = {
        status: true,
        data: product,
    }

    res.status(200).json(obj)
})

App.listen(process.env.PORT ?? 8001, () => {
    console.log("Server Start Ho Gyaa");

})