"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForResponse = exports.askQuestionWithList = exports.askQuestion = exports.askFeedback = exports.sendMessageAdaptive = exports.sendMessage = void 0;
const webhookClient_1 = require("../services/webhookClient");
const webhookClient_2 = require("../services/webhookClient");
const initService = (axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = axiosInstance ? new webhookClient_2.WebhookClient("https://localhost:7092", axiosInstance) : new webhookClient_2.WebhookClient("https://localhost:7092");
    return client;
});
const sendMessage = (messageDto, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    let response = yield client.sendMessage(messageDto);
    return response ? response.message : null;
});
exports.sendMessage = sendMessage;
const sendMessageAdaptive = (messageDto, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    let response = yield client.sendMessageAdaptiveCard(messageDto);
    return response ? response.message : null;
});
exports.sendMessageAdaptive = sendMessageAdaptive;
const askFeedback = (feedbackDto, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    yield client.askFeedback(feedbackDto);
});
exports.askFeedback = askFeedback;
const askQuestion = (questionDto, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    let response = yield client.askQuestion(questionDto);
    while (response.status == 202) {
        yield sleep(5000);
        response = response.message ? yield client.waitForResponse(response.message) : new webhookClient_1.AskQuestionResponse();
    }
    return response ? response : null;
});
exports.askQuestion = askQuestion;
const askQuestionWithList = (questionDto, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    let response = yield client.askQuestionWithList(questionDto);
    while (response.status == 202) {
        yield sleep(5000);
        response = response.message ? yield client.waitForResponse(response.message) : new webhookClient_1.AskQuestionResponse();
    }
    return response ? response : null;
});
exports.askQuestionWithList = askQuestionWithList;
const waitForResponse = (url, axiosInstance) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield initService(axiosInstance);
    let response = yield client.waitForResponse(url);
    return response ? response : null;
});
exports.waitForResponse = waitForResponse;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
