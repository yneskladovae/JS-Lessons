import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const promise1 = new Promise((resolve, reject) => {
    console.log("Promise is resolved");
});

promise1.then(() => {
    console.log("Promise is resolved");
}).catch(() => {
    console.log("Promise is rejected");
});

console.log(promise1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise Data");
});

promise2.then((data) => {
    console.log(data);
})

console.log(promise2)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const promise3 = new Promise((resolve, reject) => {
    reject("Promise Error");
});

promise3.then(() => {
    console.log("Promise is resolved");
}).catch((err) => {
    console.log(err);
});

console.log(promise3)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Data");
    }, 3000)

});

promise4.then((data) => {
    console.log(data);
})

console.log(promise4)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

const handlePromise: any = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: any) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: any) => console.log(`Promise is rejected with error: ${paramName}`),
}

export const createPromise = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    });
    console.log('Promise is created');
}

export const resolvePromise = () => {
    handlePromise.resolve('resolved data');
    handlePromise.onSuccess('resolved data');
}

export const rejectPromise = () => {
    handlePromise.reject('rejected error');
    handlePromise.onError('rejected error');
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My name is");
    }, 1000)

});

const onSuccess = (data: any) => {
    return `${data} Doggy`
}

const print = (value: string) => {
    console.log(value)
}

promise6
    .then(onSuccess)
    .then(print)

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise7_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Anna"});
    }, 2000);
});

const promise7_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16});
    }, 3000);
});

const promise7_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''});
    }, 4000);
});

Promise.all([promise7_1, promise7_2, promise7_3])
    .then((results) => {
        const [obj1, obj2, obj3] = results;
        const mergedObject = Object.assign({}, obj1, obj2, obj3);
        console.log(mergedObject);
    })

// just a plug
export default () => {
};