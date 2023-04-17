import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import {findAllByDisplayValue} from "@testing-library/react";

type ResponseSearchType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<Array<ResponseSearchType> | string>('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<Array<ResponseSearchType> | string>('');
    console.log(serachResult)

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(data => {
                if (data.Response === "True") {
                    setSerachResult(data.Search)
                } else {
                    setSerachResult('Film not found')
                }
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
        .then(data => {
            if (data.Response === "True") {
                setSerachResultByType(data.Search)
            } else {
                setSerachResultByType('Film not found')
            }
        })
    }

    const mappedSearchResults = Array.isArray(serachResult) && serachResult.map(el => {
        return (
            <div key={el.imdbID}>
                <div><strong>{el.Title}</strong></div>
                <div>{el.Year}</div>
                <div>{el.Type}</div>
                <img src={el.Poster} alt="poster"/>
            </div>
        )
    })

    const mappedSearchResultsByType = Array.isArray(serachResultByType) && serachResultByType.map(el => {
        return (
            <div key={el.imdbID}>
                <div><strong>{el.Title}</strong></div>
                <div>{el.Year}</div>
                <div>{el.Type}</div>
                <img src={el.Poster} alt="poster"/>
            </div>
        )
    })

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {Array.isArray(serachResult) ? mappedSearchResults : serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {Array.isArray(serachResultByType) ? mappedSearchResultsByType : serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;