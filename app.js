const Smpt = require("smtp-server")
const fs = require("fs")
const app  = new Smpt({
    secure : true, 
    key : fs.readFileSync('/etc/letsencrypt/live/ezfarm.fr/fullchain.pem'),
    cert : fs.readFileSync('/etc/letsencrypt/live/ezfarm.fr/fullchain.pem'),
    onRcptTo(adress, session, callback){
        console.log("New email")
        console.log(adress)
        console.log(session)
        return callback()
    }
}) ; 


app.listen(587, ()=>console.log("started ... on 587"))