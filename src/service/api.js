import request from 'orcrist-request';
export const traceLog = params => {
  return request('/api/trading-order/outer/trace', {
    method: 'GET',
    body: params,
  });
};
