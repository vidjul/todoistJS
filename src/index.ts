import Axios = require('axios');
import axios from 'axios';
import errorHandler from './utils/errorHandler';

export const Greeter = (name: string) => `Hello ${name}`;

export class Client {
  private instance: Axios.AxiosInstance;

  constructor(public apiKey: string) {
    this.apiKey = apiKey;
    this.instance = axios.create({
      baseURL: 'https://api.todoist.com/sync/v8/sync',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  public async sync() {
    try {
      const res = await this.instance.post('', {
        resource_types: ['all'],
      });
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
