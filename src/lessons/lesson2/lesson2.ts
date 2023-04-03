import {finished} from "stream";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a: number) => {
    return (b: number) => {
        return a + b
    }
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let count = 0;
    return () => {
        return ++count;
    }
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeUltraCounter = (n: number) => {
    let count = n;
    return {
        increase: () => {
            ++count
        },
        decrease: () => {
            --count
        },
        reset: () => {
            count = 0
        },
        set: (n: number) => {
            count = n
        },
        getCount: () => {
            return count
        }
    }
}

const counterUltra = makeUltraCounter(2);
counterUltra.increase();
counterUltra.increase();
console.log(counterUltra.getCount()); // 4
counterUltra.decrease();
console.log(counterUltra.getCount()); // 3
counterUltra.set(5);
console.log(counterUltra.getCount()); // 5
counterUltra.reset();
console.log(counterUltra.getCount()); // 0

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// function superSum(...a: any) {
//
//     let currentSum = a;
//
//     function f(...b: any) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return currentSum;
//     };
//
//     return f;
// }
//
// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2,5)(3,9) )


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

const sumNumberToN = (n : number): number => {
    return n > 0 ? n + sumNumberToN(n - 1) : 0;
}

console.log(sumNumberToN(100))

// Вычислить факториал
const factorial = (n : number): number => {
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

// Числа Фибоначчи
const fib = (n : number): number => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(6))

// Напишите функцию printList(list), которая выводит элементы списка по одному.

let list: any = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// @ts-ignore
const printList = (list) => {
    console.log(list.value)
    if (list.next) {
        printList(list.next);
    }
}

console.log(printList(list))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arr: any = [1, 2, [3, 4, [5, 6]]];

function deepFlat(arr: any[]): any[] {
    let result: any[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(deepFlat(item));
        } else {
            result.push(item);
        }
    });

    return result;
}

console.log(deepFlat(arr));


// just a plug
export default () => {
};