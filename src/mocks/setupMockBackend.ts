import { setupWorker } from 'msw';
import { handlers } from '@/mocks';

export const setupMockBackend = () => setupWorker(...handlers).start();
