import {AppState} from './types';
import {AppActionTypes as ActionTypes} from './actionTypes';
import {AnyAction} from '@reduxjs/toolkit';

const initialState: AppState = {
    authors: [],
    films: []
};

const appReducer = (state = initialState, action: AnyAction): AppState => {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.SET_FILMS:
            return {
                ...state,
                films: payload,
            };
        default:
            return {...state};
    }
};

export default appReducer;