import Topic from './Topic';

type Action =
  | { type: 'INIT_TOPICS', payload: Topic[] };

export default Action;
