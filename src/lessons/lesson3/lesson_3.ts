import axios from "axios";
import {log} from "util";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const configOMB = {
    baseURL: 'https://jsonplaceholder.typicode.com',
};

const axiosInstance = axios.create(configOMB);

export const API = {
    methodGet: (postId: number) => {
        return axiosInstance.get(`/posts/${postId}`)
            .then(response => response.data)
    },
    methodPost: () => {
        return axiosInstance.post(`/posts`, {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then(response => response.data)
    },
    methodPut: (postId: number) => {
        return axiosInstance.put(`/posts/${postId}`, {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then(response => response.data)
    },
    methodDelete: (postId: number) => {
        return axiosInstance.delete(`/posts/${postId}`,)
            .then(response => response.config)
    },
};

API.methodGet(2)
    .then(data => console.log(data))

API.methodPost()
    .then(data => console.log(data))


API.methodPut(1)
    .then(data => console.log(data))


API.methodDelete(3)
    .then(data => console.log(data))

// just a plug
export default () => {
};