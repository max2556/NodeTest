const http = require('http');
const url = require("url");
const { readMessages, addMessage, addMessages, saveToFile, dataJSON } = require("./modules/fileModule");

const { myDateTime, getBody } = require('./modules/myModules');

const sendData = {
    message: "That's a server response",
}

const PORT = process.env.PORT || 8000;

const options = {
    'Content-Type': 'application/json',
    'Made-By': 'CBETuJIHuK'
}

var savedMessages = readMessages();

const saveDelay = 60000;


setInterval(savedata, saveDelay);

http.createServer(async function(req, res) {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        if (req.method === "GET") {
            res.writeHead(200, 'application/json');
            res.write(JSON.stringify(savedMessages));
            res.end();
        }

        if (req.method === "POST") {
            res.writeHead(200, options);

            let body = JSON.parse(await getBody(req));
            console.log(body);
            addMessage(body);
            res.write(JSON.stringify(sendData));
            res.end();

        }
        res.end();
    } catch (error) {
        console.log(error);
    }
}).listen(PORT);


function savedata() {
    saveToFile(JSON.stringify(dataJSON));
}