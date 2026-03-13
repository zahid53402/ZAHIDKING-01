const axios = require("axios");
const config = require("../config");
const { chatbot } = require("./chatbot");

module.exports = async (conn, m) => {

try{

if(!chatbot()) return;
if(!m.body) return;
if(m.body.startsWith(config.PREFIX)) return;

let text = m.body;

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents:[
{
parts:[
{ text: "You are Zahid King AI Assistant.\nUser: " + text }
]
}
]
}
);

let reply = res.data.candidates[0].content.parts[0].text + "\n\nPowered by Zahid King";

conn.sendMessage(m.chat,{text:reply},{quoted:m});

}catch(e){
console.log(e);
}

};
