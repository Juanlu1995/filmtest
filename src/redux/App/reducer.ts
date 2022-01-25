import {AppState, Film} from './types';
import {AppActionTypes as ActionTypes} from './actionTypes';
import {AnyAction} from '@reduxjs/toolkit';
import {changeRateToFilms, duplicateMovieById, removeFilm, shuffleFilms} from './utils';

const initialState: AppState = {
    authors: [],
    films: [],
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
        case ActionTypes.DUPLICATE_FILM:
            return {
                ...state,
                films: duplicateMovieById([...state.films], payload)
            }
        case ActionTypes.CHANGE_RATE_FILMS:
            const newFilms = changeRateToFilms([...state.films]);
            return {
                ...state,
                films: newFilms
            }
        default:
            return {...state};
    }
};

export default appReducer;
