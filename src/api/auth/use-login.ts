// import type { AxiosError } from 'axios';
// import { createQuery } from 'react-query-kit';

// import { client } from '../common';
// import type { SignupRequest, SignupResponse } from './types';

// type Variables = SignupRequest;
// type Response = SignupResponse;

// export const usePost = createQuery<Response, Variables, AxiosError>({
//   queryKey: ['posts'],
//   fetcher: (variables) => {
//     return client
//       .get(`posts/`) //${variables.id}
//       .then((response) => response.data);
//   },
// });
