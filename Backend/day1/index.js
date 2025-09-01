let calculator = require("./calculator.js") //Agar backend ke andar kisi module ko import karna hai to require() use hota hai

console.log("Hellow");
console.log(10 + 20)
console.log(calculator.addData(10, 7));

let http = require("http")//require means import http tab aaya hai jab maine node.js ko install kara hai ye ek inbuild package hai node.js ko jo server create karne me help karega

let server = http.createServer((req, res) => {
    if (req.url == "/") {
        let obj = {
            status: 1,
            msg: "API First Response",
            user: ["ram", "shyam", "anant"],
        }
        res.end(JSON.stringify(obj)) //.end means server response ko end karna.
    }
    if (req.url == "/news") {
        let obj = {
            status: 1,
            msg: "News",
        }
        res.end(JSON.stringify(obj)) //.end means server response ko end karna.
    }
})

server.listen(8000) //listen() yeh server ko start karne ke leye pass kara hai //http://localhost:8000 ab yeh ek URL banega aur iske upar data aaega

//All of these are window's functions (it will not work in console, it will only work on browser)
//alert()
//confirm()
//setInterval()
//setTimeout()
//scrollTo()
//scrollBy()
//prompt()
//clearTimeout()
//clearInterval()