import React from 'react';
import {useAppDispatch} from '../../utils/hooks';
import {ListItemButton} from '@mui/material';
import {duplicateMovie} from '../../redux/App/actions';
interface Props {
    readonly id: string;
}
const DuplicateButtonFilm = ({id}: Props) :JSX.Element => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(duplicateMovie(id));
    }
    return <ListItemButton onClick={handleClick}>Duplicate</ListItemButton>

}

export default React.memo(DuplicateButtonFilm);