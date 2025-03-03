import { IHttpClient, json } from '@aurelia/fetch-client';
import { inject } from 'aurelia';

@inject(IHttpClient)
export class Chat {
  public userMessage = '';
  public chatHistory: { sender: string; message: string }[] = [];

  constructor(private readonly http: IHttpClient) {}

  async sendMessage() {
    if (!this.userMessage.trim()) return;

    this.chatHistory.push({ sender: 'User', message: this.userMessage });

    try {
      const response = await this.http.post(
        'http://localhost:3001/api/chat',
        json({ message: this.userMessage }),
      );
      const data = await response.json();

      this.chatHistory.push({ sender: 'Bot', message: data.reply });
    } catch (error) {
      console.error('Error:', error);

      this.chatHistory.push({
        sender: 'Bot',
        message: 'Sorry, something went wrong.',
      });
    }

    this.userMessage = '';
  }
}
