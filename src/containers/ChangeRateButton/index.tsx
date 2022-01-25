import React from 'react';
import {Button} from '@mui/material';
import {useAppDispatch} from '../../utils/hooks';
import {changeRateFilms} from '../../redux/App/actions';

const ChangeRateButton = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(changeRateFilms());
    }
    return <Button variant={'outlined'} onClick={handleClick}>Change rate</Button>
}

export default ChangeRateButton;