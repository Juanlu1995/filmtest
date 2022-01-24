import React from 'react';
import {Film} from '../../redux/App/types';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import FilmRating from '../FilmRate';

interface Props {
    readonly film: Film;
}

const FilmInList = ({film}: Props): JSX.Element => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <FilmRating>{film.rate}</FilmRating>
                </ListItemIcon>
                <ListItemText primary={film.name}/>
            </ListItemButton>
        </ListItem>
    )
}
export default React.memo(FilmInList);