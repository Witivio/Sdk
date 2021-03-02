import { AxiosInstance, AxiosResponse } from 'axios';
export declare class WebhookClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    sendMessage(messageDto: MessageDto): Promise<SendMessageResponse>;
    protected processSendMesage(response: AxiosResponse): Promise<SendMessageResponse>;
    sendMessageAdaptiveCard(messageDto: MessageDto): Promise<SendMessageResponse>;
    protected processSendMessageAdaptiveCard(response: AxiosResponse): Promise<SendMessageResponse>;
    askFeedback(feedbackDto: FeedbackDto): Promise<void>;
    protected processAskFeedback(response: AxiosResponse): Promise<void>;
    askQuestion(questionDto: QuestionDto): Promise<AskQuestionResponse>;
    protected processAskQuestion(response: AxiosResponse): Promise<AskQuestionResponse>;
    askQuestionWithList(questionDto: QuestionDto): Promise<AskQuestionResponse>;
    protected processAskQuestionWithList(response: AxiosResponse): Promise<AskQuestionResponse>;
    waitForResponse(endpoint: string): Promise<AskQuestionResponse>;
    protected processWaitForResponse(response: AxiosResponse): Promise<AskQuestionResponse>;
}
export declare class MessageDto implements IMessageDto {
    botId?: string;
    message?: string;
    conversationContext?: any;
    constructor(data?: IMessageDto);
    init(_data?: any): void;
    static fromJS(data: any): MessageDto;
    toJSON(data?: any): any;
}
export interface IMessageDto {
    botId?: string;
    message?: string;
    conversationContext?: any;
}
export declare class FeedbackDto implements IFeedbackDto {
    botId?: string;
    answer?: any;
    conversationContext?: any;
    constructor(data?: IFeedbackDto);
    init(_data?: any): void;
    static fromJS(data: any): FeedbackDto;
    toJSON(data?: any): any;
}
export interface IFeedbackDto {
    botId?: string;
    answer?: string;
    conversationContext?: any;
}
export declare class QuestionDto implements IQuestionDto {
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
    constructor(data?: IQuestionDto);
    init(_data?: any): void;
    static fromJS(data: any): QuestionDto;
    toJSON(data?: any): any;
}
export interface IQuestionDto {
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
export declare class SendMessageResponse implements ISendMessageResponse {
    message?: string;
    constructor(data?: ISendMessageResponse);
    init(_data?: any): void;
    static fromJS(data: any): SendMessageResponse;
    toJSON(data?: any): any;
}
export interface ISendMessageResponse {
    message?: string;
}
export declare class AskQuestionResponse implements IAskQuestionResponse {
    message?: string;
    status?: number;
    files?: string[];
    constructor(data?: IAskQuestionResponse);
    init(_data?: any): void;
    static fromJS(data: any): AskQuestionResponse;
    toJSON(data?: any): any;
}
export interface IAskQuestionResponse {
    message?: string;
    status?: number;
    files?: string[];
}
export declare class WebhookBody implements IWebhookBody {
    botId?: any;
    userContext?: any;
    conversationContext?: any;
    answer?: any;
    userId?: any;
    username?: any;
    question?: any;
    channel?: any;
    email?: any;
    upn?: any;
    botName?: any;
    userProfileId?: any;
    userProfileName?: any;
    userLanguage?: any;
    files?: any;
    tenantId?: any;
    constructor(data?: IWebhookBody);
    init(_data?: any): void;
    static fromJS(data: any): WebhookBody;
    toJSON(data?: any): any;
}
export interface IWebhookBody {
    botId?: any;
    userContext?: any;
    conversationContext?: any;
    answer?: any;
    userId?: any;
    username?: any;
    question?: any;
    channel?: any;
    email?: any;
    upn?: any;
    botName?: any;
    userProfileId?: any;
    userProfileName?: any;
    userLanguage?: any;
    files?: any;
    tenantId?: any;
}
