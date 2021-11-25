const fs = require("fs");
const dataJSON = require("../data.json");


const readMessages = () => {
    return dataJSON.messages;
}
const addMessage = (msg) => {
    dataJSON.messages.push(msg);
}
const addMessages = (arrayOfMsg) => {
    for (let msg of arrayOfMsg) {
        addMessage(msg);
    }
}
const saveToFile = (file) => {
    fs.writeFile("data.json", file, (err) => {
        if (err) {
            console.log("Something went wrong!");
            console.log(err);
            throw err;
        }
    })
}

exports.readMessages = readMessages;
exports.addMessage = addMessage;
exports.addMessages = addMessages;
exports.saveToFile = saveToFile;
exports.dataJSON = dataJSON;
console.log(dataJSON.messages);