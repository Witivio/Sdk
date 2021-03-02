import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { throwException } from './exception';

export class WebhookClient {
    private instance: AxiosInstance; 
    private baseUrl: string | undefined;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "https://app.witivio.com";
    }

    sendMessage(messageDto : MessageDto): Promise<SendMessageResponse> {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message";
        url_ = url_.replace("{botId}", encodeURIComponent("" + messageDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(messageDto);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSendMesage(_response);
        });
    }

    protected processSendMesage(response: AxiosResponse): Promise<SendMessageResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<SendMessageResponse>(_responseText);
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SendMessageResponse>(<any>null);
    }

    sendMessageAdaptiveCard(messageDto : MessageDto): Promise<SendMessageResponse> {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/adaptive";
        url_ = url_.replace("{botId}", encodeURIComponent("" + messageDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(messageDto);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSendMessageAdaptiveCard(_response);
        });
    }

    protected processSendMessageAdaptiveCard(response: AxiosResponse): Promise<SendMessageResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<SendMessageResponse>(_responseText);
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SendMessageResponse>(<any>null);
    }

    askFeedback(feedbackDto : FeedbackDto): Promise<void> {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/feedback";
        url_ = url_.replace("{botId}", encodeURIComponent("" + feedbackDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(feedbackDto);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processAskFeedback(_response);
        });
    }

    protected processAskFeedback(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(<any>null);
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(<any>null);
    }

    askQuestion(questionDto : QuestionDto): Promise<AskQuestionResponse> {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message/input";
        url_ = url_.replace("{botId}", encodeURIComponent("" + questionDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(questionDto);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processAskQuestion(_response);
        });
    }

    protected processAskQuestion(response: AxiosResponse): Promise<AskQuestionResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            
            return Promise.resolve<AskQuestionResponse>(Object.assign({status:200}, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve<AskQuestionResponse>(<AskQuestionResponse>{status:202, message : response.headers.location});
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<AskQuestionResponse>(<any>null);
    }

    askQuestionWithList(questionDto : QuestionDto): Promise<AskQuestionResponse> {
        let url_ = this.baseUrl + "/api/botproxy/{botId}/message/input/array";
        url_ = url_.replace("{botId}", encodeURIComponent("" + questionDto.botId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(questionDto);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processAskQuestionWithList(_response);
        });
    }

    protected processAskQuestionWithList(response: AxiosResponse): Promise<AskQuestionResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            
            return Promise.resolve<AskQuestionResponse>(Object.assign({status:200}, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve<AskQuestionResponse>(<AskQuestionResponse>{status:202, message : response.headers.location});
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<AskQuestionResponse>(<any>null);
    }

    waitForResponse(endpoint : string): Promise<AskQuestionResponse> {
        //let end = endpoint.split("ngrok.io")[1];
        let url_ = endpoint;
        console.log(url_)
        url_ = url_.replace(/[?&]$/, "");
        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processWaitForResponse(_response);
        });
    }

    protected processWaitForResponse(response: AxiosResponse): Promise<AskQuestionResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data; 
            return Promise.resolve<AskQuestionResponse>(Object.assign({status:200}, _responseText));
        }
        else if (status === 202) {
            const _responseText = response.data;
            return Promise.resolve<AskQuestionResponse>(<AskQuestionResponse>{status:202, message : response.headers.location});
        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("A server side error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<AskQuestionResponse>(<any>null);
    }
}

export class MessageDto implements IMessageDto {
    botId?: string;
    message?: string;
    conversationContext?: any;

    constructor(data?: IMessageDto) {
    }

    init(_data?: any) {
        if (_data) {
            this.botId = _data["botId"];
            this.message = _data["message"];
            this.conversationContext = _data["conversationContext"];
        }
    }

    static fromJS(data: any): MessageDto {
        data = typeof data === 'object' ? data : {};
        let result = new MessageDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["message"] = this.message;
        data["conversationContext"] = this.conversationContext;
        return data; 
    }
}

export interface IMessageDto{
    botId?: string;
    message?: string;
    conversationContext?: any;
}

export class FeedbackDto implements IFeedbackDto {
    botId?: string;
    answer?: any;
    conversationContext?: any;

    constructor(data?: IFeedbackDto) {
    }

    init(_data?: any) {
        if (_data) {
            this.botId = _data["botId"];
            this.answer = _data["answer"];
            this.conversationContext = _data["conversationContext"];
        }
    }

    static fromJS(data: any): FeedbackDto {
        data = typeof data === 'object' ? data : {};
        let result = new FeedbackDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["botId"] = this.botId;
        data["answer"] = this.answer;
        data["conversationContext"] = this.conversationContext;
        return data; 
    }
}

export interface IFeedbackDto{
    botId?: string;
    answer?: string;
    conversationContext?: any;
}

export class QuestionDto implements IQuestionDto {
    botId?: string;
    question?: string;
    conversationContext?: any;
    listChoice?: any[];
    isFileWaiting?: boolean;
    jsonPath?: string;
    choice1?: string;
    choice2?: string;
    choice3?: string;
    choice4?: string;
    choice5?: string;
    choice6?: string;
    choice7?: string;
    choice8?: string;
    choice9?: string;
    choice10?: string;

    constructor(data?: IQuestionDto) {
    }

    init(_data?: any) {
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

    static fromJS(data: any): QuestionDto {
        data = typeof data === 'object' ? data : {};
        let result = new QuestionDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

export interface IQuestionDto{
    botId?: string;
    question?: string;
    conversationContext?: any;
    listChoice?: any[];
    isFileWaiting?: boolean;
    jsonPath?: string;
    choice1?: string;
    choice2?: string;
    choice3?: string;
    choice4?: string;
    choice5?: string;
    choice6?: string;
    choice7?: string;
    choice8?: string;
    choice9?: string;
    choice10?: string;
}

export class SendMessageResponse implements ISendMessageResponse {
    message?: string;

    constructor(data?: ISendMessageResponse) {
    }

    init(_data?: any) {
        if (_data) {       
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): SendMessageResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SendMessageResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["message"] = this.message;
        return data; 
    }
}

export interface ISendMessageResponse{
    message?: string;
}

export class AskQuestionResponse implements IAskQuestionResponse {
    message?: string;
    status?: number;
    files?: string[];

    constructor(data?: IAskQuestionResponse) {
    }

    init(_data?: any) {
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

    static fromJS(data: any): AskQuestionResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AskQuestionResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

export interface IAskQuestionResponse{
    message?: string;
    status?: number;
    files?: string[];
}


export class WebhookBody implements IWebhookBody {
    botId?: any;
    userContext?: any;
    conversationContext?: any;
    answer? : any;
    userId? : any;
    username? : any;
    question? : any;
    channel? : any;
    email? : any;
    upn? : any;
    botName? : any;
    userProfileId? : any;
    userProfileName? : any;
    userLanguage? : any;
    files? : any;
    tenantId? : any;

    constructor(data?: IWebhookBody) {
    }

    init(_data?: any) {
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

    static fromJS(data: any): WebhookBody {
        data = typeof data === 'object' ? data : {};
        let result = new WebhookBody();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

export interface IWebhookBody{
    botId?: any;
    userContext?: any;
    conversationContext?: any;
    answer? : any;
    userId? : any;
    username? : any;
    question? : any;
    channel? : any;
    email? : any;
    upn? : any;
    botName? : any;
    userProfileId? : any;
    userProfileName? : any;
    userLanguage? : any;
    files? : any;
    tenantId? : any;
}