import { AxiosInstance } from "axios";
import { AskQuestionResponse, FeedbackDto, MessageDto, QuestionDto } from "../services/webhookClient";
export declare const sendMessage: (messageDto: MessageDto, axiosInstance?: AxiosInstance | undefined) => Promise<string | null | undefined>;
export declare const sendMessageAdaptive: (messageDto: MessageDto, axiosInstance?: AxiosInstance | undefined) => Promise<string | null | undefined>;
export declare const askFeedback: (feedbackDto: FeedbackDto, axiosInstance?: AxiosInstance | undefined) => Promise<void>;
export declare const askQuestion: (questionDto: QuestionDto, axiosInstance?: AxiosInstance | undefined) => Promise<AskQuestionResponse | null>;
export declare const askQuestionWithList: (questionDto: QuestionDto, axiosInstance?: AxiosInstance | undefined) => Promise<AskQuestionResponse | null>;
export declare const waitForResponse: (url: string, axiosInstance?: AxiosInstance | undefined) => Promise<AskQuestionResponse | null>;
