export type Author = {
    readonly id: string; //hashed id
    readonly name: string;
}

export type Authors = Author[]

export type Film = {
    readonly id: string; //hashed id
    readonly name: string;
    readonly rate: number;//0 - 10
    readonly author: Author;
};

export type Films = Film[]

export type AppState = {
    readonly films: Films,
    readonly authors: Authors,
}
