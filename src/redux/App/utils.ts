import {Film, Films} from './types';

export const shuffleFilms = (films: Films): Films => shuffle(films);

const shuffle = (array: any[]) => {
    let currentIndex: number = array.length;
    let randomIndex: number;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const duplicateMovieById = (films:Films, id: string): Films => {
    const filmIndex :number= films.findIndex(film => film.id === id);
    if (filmIndex >= 0) {
        const film = films[filmIndex];
        films.splice(filmIndex, 0, film)
        return films
    } else {
        // TODO handle error
        return films;
    }
}