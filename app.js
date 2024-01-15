const Smpt = require("smtp-server")
const fs = require("fs")
const app  = new Smpt({
    secure : true, 
    key : fs.readFileSync('private.key'),
    cert : fs.readFileSync('server.crt'),
    onRcptTo(adress, session, callback){
        console.log(adress)
        return callback()
    }
}) ; 


app.listen(587, ()=>console.log("started ... on 587"))