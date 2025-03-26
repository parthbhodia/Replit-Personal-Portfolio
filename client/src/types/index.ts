export interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface ChatResponse {
  response: string;
}
