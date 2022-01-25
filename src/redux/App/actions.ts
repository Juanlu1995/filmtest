import {Films} from './types';
import {createAction} from '@reduxjs/toolkit';
import {AppActionTypes} from './actionTypes';

export const setFilms = createAction<Films>(AppActionTypes.SET_FILMS);
export const reorderFilms = createAction(AppActionTypes.REORDER_FILMS);
export const duplicateMovie = createAction<string>(AppActionTypes.DUPLICATE_FILM);
export const changeRateFilms = createAction(AppActionTypes.CHANGE_RATE_FILMS);
