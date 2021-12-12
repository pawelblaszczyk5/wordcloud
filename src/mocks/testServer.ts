import { handlers } from '@/mocks';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
