import React, {ReactNode} from 'react';
import {Avatar} from '@mui/material';

interface Props {
    children?: ReactNode
}

const FilmRate = ({children}: Props): JSX.Element => {
    return <Avatar>{children}</Avatar>
}

export default React.memo(FilmRate);