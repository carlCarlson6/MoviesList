// TODO
export class MovieId {
    constructor(
        private readonly value: string,
    ) {}

    ToString(): string {
        return this.value;
    }
}

export type MovieIds = MovieId[];