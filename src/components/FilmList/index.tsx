import React from 'react';
import {Film, Films} from '../../redux/App/types';
import {List} from '@mui/material';
import FilmInList from '../FilmInList';

interface Props {
    readonly films: Films;
}

const FilmList = ({films}: Props): JSX.Element => {
    return (
        <List>
            {films.map((film: Film) => <FilmInList key={`${film.id}_key`} film={film}/>)}
        </List>
    )
}

export default React.memo(FilmList);