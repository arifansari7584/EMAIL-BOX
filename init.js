const mongoose =require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection succesfull");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }
  let allChats=([{
    from : "aman",
    to : "rocky",
    message : "how are you",
    created_at : new Date()
  },
  {
    from : "anish",
    to : "mohsin",
    message : "I love you",
    created_at : new Date()
  },
  {
    from : "choti",
    to : "rohit",
    message : "relationship the end",
    created_at : new Date()
  },
]);
Chat.insertMany(allChats);