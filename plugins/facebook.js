const axios = require('axios')
const fs = require('fs')
const path = require('path')

async function facebookCommand(sock, chatId, message) {

try{

const text = message.message?.conversation || message.message?.extendedTextMessage?.text
const url = text.split(' ').slice(1).join(' ').trim()

if(!url){
return sock.sendMessage(chatId,{text:"Send Facebook link\nExample: .fb https://facebook.com/video"},{quoted:message})
}

await sock.sendMessage(chatId,{
react:{text:"⏳",key:message.key}
})

const api = `https://api.siputzx.my.id/api/d/facebook?url=${encodeURIComponent(url)}`

const {data} = await axios.get(api)

let video = null
let title = "Facebook Video"

if(data?.status && data?.data?.data){

const hd = data.data.data.find(v=>v.resolution==="HD")
const sd = data.data.data.find(v=>v.resolution==="SD")

video = hd?.url || sd?.url
title = data.data.title || title

}

if(!video){
return sock.sendMessage(chatId,{text:"❌ Failed to download video"},{quoted:message})
}

await sock.sendMessage(chatId,{
video:{url:video},
caption:`${title}\n\n> Powered by Zahid King`
},{quoted:message})

}catch(e){

console.log(e)

sock.sendMessage(chatId,{
text:"❌ Facebook downloader error"
},{quoted:message})

}

}

module.exports = facebookCommand
