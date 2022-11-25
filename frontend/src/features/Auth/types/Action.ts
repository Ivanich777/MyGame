import { Res, ResScore } from './User';

type Action =
| { type: 'REGA'; payload: Res }
| { type: 'LOGOUT' }
| { type: 'EDIT', payload: ResScore}

export default Action;
