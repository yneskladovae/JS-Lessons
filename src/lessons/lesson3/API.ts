import axios from 'axios';

export type FilmObject = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}
export type FilmResponse = {
    Response: 'True' | 'False'
    Search: FilmObject[]
    totalResults: string
}

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};

const key = '39f06c05';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string): Promise<FilmResponse> => {
        return axiosInstance.get<FilmResponse>(`/?s=${title}&apikey=${key}`)
            .then(response => response.data)
            .catch(error => error);
    },
    searchFilmsByType: (title: string, type: string): Promise<FilmResponse> => {
        return axiosInstance.get<FilmResponse>(`/?s=${title}&type=${type}&apikey=${key}`)
            .then(response => response.data)
            .catch(error => error);
    }
};

export default API;
