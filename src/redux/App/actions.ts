import {Films} from './types';
import {createAction} from '@reduxjs/toolkit';
import {AppActionTypes} from './actionTypes';

export const setFilms = createAction<Films>(AppActionTypes.SET_FILMS);
