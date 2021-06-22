const { MessageDto, FeedbackDto, QuestionDto } = require('../lib/services/webhookClient')
const { sendMessage, sendMessageAdaptive, askFeedback, askQuestion, askQuestionWithList, waitForResponse } = require('../lib/src')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require('fs');
const https = require('https');
const axios  = require('axios').default;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/testSendMessage',async (req, res, next)=>{
  try{
    const messageSendToBot = "Hi " + req.body.userName + ", I'm " + req.body.botName + " we are in " + req.body.channel + " and i answer from the question " + req.body.question;
    const messageDto = new MessageDto()
    messageDto.init({
        botId: req.body.botId,
        conversationContext: req.body.conversationContext,
        message: messageSendToBot
    });
    const httpsAgent = new https.Agent({      
      rejectUnauthorized: false
    })
    let instance = axios.create({httpsAgent})
    let message = await sendMessage(messageDto, instance);
    res.end();
  } catch(err){
    next(err);
  }
});

app.post('/testSendMessageAdaptive',async (req, res, next)=>{
  try{
    const jsonObject = {
      "type": "AdaptiveCard",
      "body": [
          {
              "type": "TextBlock",
              "color": "Light",
              "text": "L'accès au 52 CE se fait directement par l'avenue des Champs Elysées via une imposante porte en fer forgée de style Art Déco",
              "wrap": true
          }
      ],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "version": "1.0",
      "backgroundImage": "https://www.peintures1825.fr/wp-content/uploads/2018/05/Noir-intense.jpg"
  }
    const messageSendToBot = JSON.stringify(jsonObject);
    const messageDto = new MessageDto()
    messageDto.init({
        botId: req.body.botId,
        conversationContext: req.body.conversationContext,
        message: messageSendToBot
    });
    const httpsAgent = new https.Agent({      
      rejectUnauthorized: false
    })
    let instance = axios.create({httpsAgent})
    let message = await sendMessageAdaptive(messageDto, instance);
    res.end();
  } catch(err){
    next(err);
  }
});

app.post('/testAskFeedback',async (req, res, next)=>{
  try{
   
    const feedbackDto = new FeedbackDto()
    feedbackDto.init({
        botId: req.body.botId,
        conversationContext: req.body.conversationContext,
        answer: req.body.answer
    });
    const httpsAgent = new https.Agent({      
      rejectUnauthorized: false
    })
    let instance = axios.create({httpsAgent})
    await askFeedback(feedbackDto, instance);
    res.end();
  } catch(err){
    next(err);
  }
});

app.post('/testAskQuestion',async (req, res, next)=>{
  try{
   res.end();
    const questionDto = new QuestionDto()
    questionDto.init({
        botId: req.body.botId,
        conversationContext: req.body.conversationContext,
        question: "Dans quel ville es-tu ?",
        isFileWaiting : false
    });
    const httpsAgent = new https.Agent({      
      rejectUnauthorized: false
    })
    let instance = axios.create({httpsAgent})
    let response = await askQuestion(questionDto, instance);
    console.log(response.message)
  } catch(err){
    next(err);
  }
});

app.post('/testAskQuestionWithList',async (req, res, next)=>{
  try{
   res.end();
    const questionDto = new QuestionDto()
    questionDto.init({
        botId: req.body.botId,
        conversationContext: req.body.conversationContext,
        question: "Dans quel ville es-tu ?",
        listChoice:[
          {
            "name": "lyon"
          },
          {
            "name": "paris"
          }
        ],
        jsonPath: "$.name"
    });
    const httpsAgent = new https.Agent({      
      rejectUnauthorized: false
    })
    let instance = axios.create({httpsAgent})
    let response = await askQuestionWithList(questionDto, instance);
    console.log(response.message)
  } catch(err){
    next(err);
  }
});

https
.createServer(
  {
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key'),
  },
  app
)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})