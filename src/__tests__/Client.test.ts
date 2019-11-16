import axios from 'axios';
import { Client } from '../index';

jest.mock('axios');

describe('Client', () => {
  test('Should init an Axios instance', () => {
    const client = new Client('');
    expect(axios.create).toBeCalledTimes(1);
  });
});
