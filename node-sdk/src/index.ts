import { AxiosInstance } from "axios";
import { AskQuestionResponse, FeedbackDto, MessageDto, QuestionDto } from "../services/webhookClient";

import { WebhookClient } from "../services/webhookClient";
const initService = async(axiosInstance ?:AxiosInstance) => {
    let client = axiosInstance ? new WebhookClient("https://localhost:7092", axiosInstance) : new WebhookClient("https://localhost:7092");
    return client;
}

export const sendMessage = async (messageDto : MessageDto, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    let response = await client.sendMessage(messageDto);
    return response ? response.message : null;
};

export const sendMessageAdaptive = async (messageDto : MessageDto, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    let response = await client.sendMessageAdaptiveCard(messageDto);
    return response ? response.message : null;
};

export const askFeedback = async (feedbackDto : FeedbackDto, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    await client.askFeedback(feedbackDto);
};

export const askQuestion = async (questionDto : QuestionDto, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    let response = await client.askQuestion(questionDto);
    while(response.status == 202){
        await sleep(5000);
        response = response.message ? await client.waitForResponse(response.message) : new AskQuestionResponse();
    }
    return response ? response : null;
};

export const askQuestionWithList = async (questionDto : QuestionDto, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    let response = await client.askQuestionWithList(questionDto);
    while(response.status == 202){
        await sleep(5000);
        response = response.message ? await client.waitForResponse(response.message) : new AskQuestionResponse();
    }
    return response ? response : null;
};

export const waitForResponse = async (url : string, axiosInstance? : AxiosInstance) =>{
    let client = await initService(axiosInstance);
    let response = await client.waitForResponse(url);
    return response ? response : null;
};


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}