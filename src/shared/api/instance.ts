import { CONFIG } from '@/shared/model/config';
import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { useSession } from '../model/session';
import type { ApiPaths, ApiSchemas } from './schema';

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
export const rqClient = createClient(fetchClient);

export const publicFetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
export const publicRqClient = createClient(publicFetchClient);

fetchClient.use({
  async onRequest({ request }) {
    const token = await useSession.getState().refreshToken();

    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    } else {
      return new Response(
        JSON.stringify({
          code: 'NOT_AUTHORIZED',
          message: 'You are not authorized to access this response',
        } as ApiSchemas['Error']),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  },
});
