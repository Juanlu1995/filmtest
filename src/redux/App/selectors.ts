import {AppState, Authors, Films} from './types';
import {RootState} from '../types';
import {createSelector} from '@reduxjs/toolkit';

const makeSelectAppState = (state: RootState): AppState => state.App

export const makeSelectFilms = () => createSelector(makeSelectAppState, (appState: AppState): Films => appState.films);

export const makeSelectAuthors = () => createSelector(makeSelectAppState, (appState: AppState): Authors => appState.authors);
