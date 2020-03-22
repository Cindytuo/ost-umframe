import Debug from './utils/debug';
import { traceLog } from './service/api.js';

window.onerror = (message, source, lineno, colno, error) => {
  const errorLog = `:::${message}:::${source}:::${lineno}:::${colno}:::`;
  traceLog({
    log: encodeURIComponent(errorLog),
    requestId: Date.now(),
    scene: 'basic',
  });
};

Debug && Debug();
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
