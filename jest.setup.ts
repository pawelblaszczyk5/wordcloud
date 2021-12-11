import '@testing-library/jest-dom';
import { handlers } from '@/mocks';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
