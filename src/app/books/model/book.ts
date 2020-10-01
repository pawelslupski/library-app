export interface Book {
    id: number;
    ISBN: string;
    title: string;
    author: string;
    genres: string[];
    pages: number;
    releaseDate: string;
    isBorrowed: boolean;
    clientFirstName: string;
    clientLastName: string;
}