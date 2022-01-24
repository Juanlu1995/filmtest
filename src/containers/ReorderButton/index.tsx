import React from 'react';
import {Button} from '@mui/material';
import {useAppDispatch} from '../../utils/hooks';
import {reorderFilms} from '../../redux/App/actions';

const ReorderButton = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(reorderFilms());
    }
    return <Button variant={'outlined'} onClick={handleClick}>Reorder</Button>
}

export default ReorderButton;