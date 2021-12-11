import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const setupMockBackend = () => setupWorker(...handlers).start();
