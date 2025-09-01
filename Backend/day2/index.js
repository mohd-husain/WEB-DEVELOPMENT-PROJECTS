let express = require("express")

require("dotenv").config()

let App = express()

App.get("/slider", (req, res) => {

    let sliderData = [
        {
            title: "Slider1",
            url: `https://www.wscubetech.com/web-development`
        },
        {
            title: "Slider2",
            url: `https://www.wscubetech.com/mobile-app-development-course`
        },
        {
            title: "Slider3",
            url: `https://www.wscubetech.com/mobile-app-development-course`
        }
    ]

    let obj = {
        status: 1,
        data: sliderData,
    }

    res.send(obj)
})

App.get('/news', (req, res) => {

    let obj = {
        state: 1,
        msg: "News Data"
    }
    res.send(obj)
})

App.listen(process.env.PORT ?? 8000, () => { //process ek predefine hai
    console.log("Server Start");

})