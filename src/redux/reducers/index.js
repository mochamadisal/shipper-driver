import {SHOW_SIDE_MENU, SET_DATA_DRIVER, SET_ERROR, SEARCH_DATA_DRIVER} from '../actions/typeAction';

const initialState = {
    sideMenu: false,
    listDriver: [],
    bankDataDriver: [],
    isError: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SHOW_SIDE_MENU:
        return {
            ...state,
            sideMenu: action.data,
        };
    case SET_DATA_DRIVER:
        return {
            ...state,
            listDriver: action.data,
            bankDataDriver: action.data,
        };
    case SEARCH_DATA_DRIVER:
        const search = action.data.toLowerCase();
        const filterData = state.bankDataDriver.filter((row) => (
            (row.name.first.toLowerCase().indexOf(search) > -1)
        ));
        return {
            ...state,
            listDriver: filterData,
        };
    case SET_ERROR:
        return {
            ...state,
            isError: action.data,
        };
    default:
        return state;
    }
};

