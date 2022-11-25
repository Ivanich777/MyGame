import Action from '../types/Action';

export const init = {
  user: '',
  points: 0,
};

export const userReducer = (
  state: { user: string, points: number } = init,
  action: Action
): { user: string, points: number } => {
  switch (action.type) {
    case 'REGA':
      return {
        ...state,
        user: action.payload.user,
        points: action.payload.points
      };
    case 'LOGOUT':
      return {
        ...state,
        user: ''
      };
    case 'EDIT':
      return {
        ...state,
        points: action.payload.points
      };
    default: return state;
  }
};
