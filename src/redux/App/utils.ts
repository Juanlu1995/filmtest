import {Films} from './types';

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
