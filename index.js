const express = require("express")
const app = express()
const currentDate = new Date();

app.get("/", (req, res) => {
  res.send("hello Kazakhstan!")
})

app.listen(3000, () =>{
  console.log("Project is ready")
})
let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "*help"} })
})

client.on("message", message => {
  if(message.content === "*sabaqPonedelnik"){
    message.channel.send("Дүйсенбі сабақ кестесі: \n Информатика \n Информатика \n Математика \n Математика \n --- \n Основы Права \n Қазақ Тілі \n Қазақ Тілі")
  }
  
    if(message.content === "*sabaqVtornik"){
    message.channel.send("Сейсенбі сабақ кестесі: \n Математика \n Математика \n Химия \n Химия \n География \n География \n Қазақ Әдебиеті \n Қазақ Әдебиеті")
  }
  
  if(message.content === "*sabaqSreda"){
    message.channel.send("Сәрсенбі сабақ кестесі: \n Всемирная История \n Химия \n Биология \n Биология \n Английский Язык \n Английский Язык \n Физика \n Физика")
  }
  
  if(message.content === "*sabaqChetverg"){
    message.channel.send("Бейсенбі сабақ кестесі: \n Английский Язык \n Қазақ Тілі \n Физика \n Физика \n Русский язык и Литература \n Русский язык и Литература \n Математика \n Математика \n Самопознание \n --- \n Физическая Культура \n Физическая Культура")
  }
  
  if(message.content === "*sabaqPiatnitsa"){
    message.channel.send("Жұма сабақ кестесі: \n Русский язык и Литература \n Русский язык и Литература \n Кураторский час \n Биология \n --- \n История Казахстана \n Английский язык \n Английский язык \n --- \n --- \n Исскуство \n Исскуство")
  }
  
if(message.content === "*help"){
    message.channel.send("Сұрақты былай қою керек: \n Дүйсенбі - *sabaqPonedelnik \n Сейсенбі - *sabaqVtornik \n Сәрсенбі - *sabaqSreda \n Бейсенбі - *sabaqChetverg \n Жұма - *sabaqPiatnitsa \n СОРларды сұрау алгоритмі: \n *sor08.04.21(осы жерге дейінгі сұрақтар тек 9В сыныбына қатысты, әзірге сіздерге СОЧтар кестесін ұсына аламын) \n СОЧтарды сұрау алгоритмі: \n  *[сынып нөмірі]soch[dd.mm.21] \n мысалы: *9soch11.05.21 \n СОЧтар 9:25-тен бастап 10:05-ге дейін және 10:25-тен 11:05-ге дейін өтеді")
  }

if(message.content === "*date"){
  message.channel.send(currentDate.toLocaleDateString());
}

if(message.content === "*time"){
  message.channel.send(currentDate.toLocaleTimeString());
}


if(message.content === "*9soch11.05.21"){
  message.channel.send("Английский язык \n Всемирная История");
}

if(message.content === "*9soch12.05.21"){
  message.channel.send("Химия \n Қазақ тілі/Русский язык(Я2)");
}

if(message.content === "*9soch13.05.21"){
  message.channel.send("Физика \n Қазақ Тілі/Русский язык(Я1)");
}

if(message.content === "*9soch14.05.21"){
  message.channel.send("Қазақ Әдебиеті/Русская Литература \n Қазақстан тарихы");
}

if(message.content === "*9soch15.05.21"){
  message.channel.send("Математика \n География");
}

if(message.content === "*9soch17.05.21"){
  message.channel.send("Биология \n Информатика");
}

if(message.content === "*9soch18.05.21"){
  message.channel.send("ЧОП");
}

if(message.content === "*8soch11.05.21"){
  message.channel.send("Информатика \n Қазақ Әдебиеті/Русская Литература");
}

if(message.content === "*8soch12.05.21"){
  message.channel.send("Химия \n Всемирная История");
}

if(message.content === "*8soch13.05.21"){
  message.channel.send("Қазақ тілі/Русский язык(Я1) \n Физика");
}

if(message.content === "*8soch14.05.21"){
  message.channel.send("География \n Биология");
}

if(message.content === "*8soch15.05.21"){
  message.channel.send("Қазақ тілі/Русский язык(Я2) \n Английский язык");
}

if(message.content === "*8soch17.05.21"){
  message.channel.send("Математика \n Қазақстан тарихы");
}

if(message.content === "*8soch18.05.21"){
  message.channel.send("Ничего");
}

if(message.content === "*7soch14.05.21"){
  message.channel.send("Қазақ тілі/Русский язык(Я1) \n Всемирная История");
}

if(message.content === "*7soch11.05.21"){
  message.channel.send("География \n Қазақ Әдебиеті/Русская Литература");
}

if(message.content === "*7soch12.05.21"){
  message.channel.send("Қазақстан тарихы \n Қазақ Тілі/Русский язык(Я2)");
}

if(message.content === "*7soch13.05.21"){
  message.channel.send("Английский язык \n Химия");
}

if(message.content === "*7soch15.05.21"){
  message.channel.send("Математика \n Биология");
}

if(message.content === "*7soch17.05.21"){
  message.channel.send("Информатика \n Физика");
}

if(message.content === "*7soch18.05.21"){
  message.channel.send("Ничего");
}

if(message.content === "*adam emes"){
  let gif = new Discord.MessageAttachment("https://media.tenor.com/images/575b2126bd3651cb06fe94660c2f2f24/tenor.gif", "rick.gif")
  message.channel.send(gif)
}
})


client.login("ODI3Mzg2MDc4MjI2MTUzNTQ3.YGaRVQ.yzTT5kJUS3u39pnNnlZXDdMGSF0")