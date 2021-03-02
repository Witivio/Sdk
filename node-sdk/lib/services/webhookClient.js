"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookBody = exports.AskQuestionResponse = exports.SendMessageResponse = exports.QuestionDto = exports.FeedbackDto = exports.MessageDto = exports.WebhookClient = void 0;
const axios_1 = require("axios");
const exception_1 = require("./exception");
class WebhookClient {
    constructor(baseUrl, instance) {
        this.jsonParseReviver = undefined;
        this.instance = instance ? instance : axios_1.default.create();
        this.baseUrl = baseUrl ? baseUrl : "https://app.witivio.com";
    }
    sendMessage(messageDto) {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message";
        url_ = url_.replace("{botId}", encodeURIComponent("" + messageDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(messageDto);
        let options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processSendMesage(_response);
        });
    }
    processSendMesage(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(_responseText);
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
    sendMessageAdaptiveCard(messageDto) {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/adaptive";
        url_ = url_.replace("{botId}", encodeURIComponent("" + messageDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(messageDto);
        let options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processSendMessageAdaptiveCard(_response);
        });
    }
    processSendMessageAdaptiveCard(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(_responseText);
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
    askFeedback(feedbackDto) {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/feedback";
        url_ = url_.replace("{botId}", encodeURIComponent("" + feedbackDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(feedbackDto);
        let options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processAskFeedback(_response);
        });
    }
    processAskFeedback(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(null);
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
    askQuestion(questionDto) {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message/input";
        url_ = url_.replace("{botId}", encodeURIComponent("" + questionDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(questionDto);
        let options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processAskQuestion(_response);
        });
    }
    processAskQuestion(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(Object.assign({ status: 200 }, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve({ status: 202, message: response.headers.location });
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
    askQuestionWithList(questionDto) {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message/input/array";
        url_ = url_.replace("{botId}", encodeURIComponent("" + questionDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(questionDto);
        let options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processAskQuestionWithList(_response);
        });
    }
    processAskQuestionWithList(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(Object.assign({ status: 200 }, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve({ status: 202, message: response.headers.location });
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
    waitForResponse(endpoint) {
        //let end = endpoint.split("ngrok.io")[1];
        let url_ = endpoint;
        console.log(url_);
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.instance.request(options_).then((_response) => {
            return this.processWaitForResponse(_response);
        });
    }
    processWaitForResponse(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve(Object.assign({ status: 200 }, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve({ status: 202, message: response.headers.location });
        }
        else if (status === 404) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 500) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 400) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            const _responseText = response.data;
            return exception_1.throwException("A server side error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return exception_1.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    }
}
exports.WebhookClient = WebhookClient;
class MessageDto {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.botId = _data["botId"];
            this.message = _data["message"];
            this.conversationContext = _data["conversationContext"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new MessageDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["message"] = this.message;
        data["conversationContext"] = this.conversationContext;
        return data;
    }
}
exports.MessageDto = MessageDto;
class FeedbackDto {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.botId = _data["botId"];
            this.answer = _data["answer"];
            this.conversationContext = _data["conversationContext"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new FeedbackDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["answer"] = this.answer;
        data["conversationContext"] = this.conversationContext;
        return data;
    }
}
exports.FeedbackDto = FeedbackDto;
class QuestionDto {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.botId = _data["botId"];
            this.question = _data["question"];
            this.conversationContext = _data["conversationContext"];
            if (Array.isArray(_data["listChoice"])) {
                this.listChoice = [];
                for (let item of _data["listChoice"])
                    this.listChoice.push(item);
            }
            this.isFileWaiting = _data["isFileWaiting"];
            this.jsonPath = _data["jsonPath"];
            this.choice1 = _data["choice1"];
            this.choice2 = _data["choice2"];
            this.choice3 = _data["choice3"];
            this.choice4 = _data["choice4"];
            this.choice5 = _data["choice5"];
            this.choice6 = _data["choice6"];
            this.choice7 = _data["choice7"];
            this.choice8 = _data["choice8"];
            this.choice9 = _data["choice9"];
            this.choice10 = _data["choice10"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new QuestionDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["question"] = this.question;
        data["conversationContext"] = this.conversationContext;
        if (Array.isArray(this.listChoice)) {
            data["listChoice"] = [];
            for (let item of this.listChoice)
                data["listChoice"].push(item);
        }
        data["isFileWaiting"] = this.isFileWaiting;
        data["jsonPath"] = this.jsonPath;
        data["choice1"] = this.choice1;
        data["choice2"] = this.choice2;
        data["choice3"] = this.choice3;
        data["choice4"] = this.choice4;
        data["choice5"] = this.choice5;
        data["choice6"] = this.choice6;
        data["choice7"] = this.choice7;
        data["choice8"] = this.choice8;
        data["choice9"] = this.choice9;
        data["choice10"] = this.choice10;
        return data;
    }
}
exports.QuestionDto = QuestionDto;
class SendMessageResponse {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.message = _data["message"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new SendMessageResponse();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["message"] = this.message;
        return data;
    }
}
exports.SendMessageResponse = SendMessageResponse;
class AskQuestionResponse {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.message = _data["message"];
            this.status = _data["status"];
            if (Array.isArray(_data["files"])) {
                this.files = [];
                for (let item of _data["files"])
                    this.files.push(item);
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AskQuestionResponse();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["message"] = this.message;
        data["status"] = this.status;
        if (Array.isArray(this.files)) {
            data["files"] = [];
            for (let item of this.files)
                data["files"].push(item);
        }
        return data;
    }
}
exports.AskQuestionResponse = AskQuestionResponse;
class WebhookBody {
    constructor(data) {
    }
    init(_data) {
        if (_data) {
            this.botId = _data["botId"];
            this.userContext = _data["userContext"];
            this.conversationContext = _data["conversationContext"];
            this.answer = _data["answer"];
            this.userId = _data["userId"];
            this.username = _data["username"];
            this.question = _data["question"];
            this.channel = _data["channel"];
            this.email = _data["email"];
            this.upn = _data["upn"];
            this.botName = _data["botName"];
            this.userProfileId = _data["userProfileId"];
            this.userProfileName = _data["userProfileName"];
            this.userLanguage = _data["userLanguage"];
            this.files = _data["files"];
            this.tenantId = _data["tenantId"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new WebhookBody();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["userContext"] = this.userContext;
        data["conversationContext"] = this.conversationContext;
        data["answer"] = this.answer;
        data["userId"] = this.userId;
        data["username"] = this.username;
        data["question"] = this.question;
        data["channel"] = this.channel;
        data["email"] = this.email;
        data["upn"] = this.upn;
        data["botName"] = this.botName;
        data["userProfileId"] = this.userProfileId;
        data["userProfileName"] = this.userProfileName;
        data["userLanguage"] = this.userLanguage;
        data["files"] = this.files;
        data["tenantId"] = this.tenantId;
        return data;
    }
}
exports.WebhookBody = WebhookBody;
