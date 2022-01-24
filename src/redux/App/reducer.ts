import {AppState} from './types';
import {AppActionTypes as ActionTypes} from './actionTypes';
import {AnyAction} from '@reduxjs/toolkit';
import {duplicateMovieById, shuffleFilms} from './utils';

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
        case ActionTypes.REORDER_FILMS:
            return {
                ...state,
                films: shuffleFilms([...state.films]),
            };
        case ActionTypes.DUPLICATE_MOVIE:
            return {
                ...state,
                films: duplicateMovieById([...state.films], payload)
            }
        default:
            return {...state};
    }
};

export default appReducer;
