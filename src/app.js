import Debug from './utils/debug';
import Buzz from '@med/buzz';
window.onerror = (message, source, lineno, colno, error) => {
  const errorLog = `:::${message}:::${source}:::${lineno}:::${colno}:::`;
  Buzz.traceLog({
    log: encodeURIComponent(errorLog),
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
