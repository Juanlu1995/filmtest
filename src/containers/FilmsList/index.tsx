import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Films, Films as FilmsType} from '../../redux/App/types';
import {createStructuredSelector} from 'reselect';
import {RootState} from '../../redux/types';
import {makeSelectFilms} from '../../redux/App/selectors';
import FilmList from '../../components/FilmList';
import Loading from '../../components/Loading';
import {getFilms} from '../../api/films.api';
import {setFilms} from '../../redux/App/actions';

interface SelectorProps {
    readonly films: FilmsType;
}

const structureSelector = createStructuredSelector<RootState, SelectorProps>({
    films: makeSelectFilms(),
})

const FilmsList = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        getFilms().then((films: Films) => {
            dispatch(setFilms(films));
        }).catch(error => {
            //TODO handle error
            dispatch(setFilms([]));
        })
    },[])
    const {films} = useAppSelector(structureSelector);

    return !!films ? <FilmList films={films}/> : <Loading/>
}

export default FilmsList;