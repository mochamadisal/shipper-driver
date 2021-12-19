import {SHOW_SIDE_MENU} from '../actions/typeAction';

const initialState = {
    sideMenu: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SHOW_SIDE_MENU:
        return {
            ...state,
            sideMenu: action.data,
        };
    default:
        return state;
    }
};

