import React from 'react';
import {CircularProgress, Grid} from '@mui/material';

const Loading = (): JSX.Element => {
    return (
        <Grid container justifyContent="center" alignContent={'center'}>
            <CircularProgress/>
        </Grid>
    )
}

export default Loading;