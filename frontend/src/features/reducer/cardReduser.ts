import Action from './types/Action';
import State from './types/State';

export const init = {
    cards: []
};

export const cardReducer = (
    state: State = init,
    action: Action
): State => {
    switch (action.type) {
        case 'INIT_CARD':
            return {
                 ...state,
                 cards: action.payload
            };
            default: return state;
}
};
