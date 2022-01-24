import { Container } from '@mui/material';
import React from 'react';
import '../../App.css';
import FilmsList from '../../containers/FilmsList';

const Main = (): JSX.Element => {
    return (
        <>
            <Container>
                <FilmsList/>
            </Container>
        </>
    );
}

export default Main;
