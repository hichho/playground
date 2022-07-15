import { useRequest } from 'vue-request';

function useApi(service, options) {
  return useRequest(service, {
    ...options,
    onError: (error, params) => {
      console.log(error, params);
    },
  });
}

export default useApi;
