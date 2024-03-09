const fs = require('fs');

function findIncreasingSequence(arr) {
    let currentSequence = [arr[0]];
    let maxSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentSequence.push(arr[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence.slice();
            }
            currentSequence = [arr[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

function findDecreasingSequence(arr) {
    let currentSequence = [arr[0]];
    let maxSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentSequence.push(arr[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence.slice();
            }
            currentSequence = [arr[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

const filePath = '10m.txt';

fs.promises.readFile(filePath, 'utf8')
    .then((content) => {

        const numbers = content.split(/\s+/).map(Number);

        const numbersfor = content.split(/\s+/).map(Number);

        const maxNumber = numbers.reduce((max, current) => Math.max(max, current), -Infinity);

        const minNumber = numbers.reduce((min, current) => Math.min(min, current), Infinity);

        numbers.sort((a, b) => a - b);


        let median;
        const middle = Math.floor(numbers.length / 2);

        if (numbers.length % 2 === 0) {

            median = (numbers[middle - 1] + numbers[middle]) / 2;
        } else {

            median = numbers[middle];
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);

        const average = sum / numbers.length;

        console.log("Максимальне число в файлі:" + maxNumber);

        console.log("Мінімальне число в файлі: " + minNumber);

        console.log("Медіана в файлі: " + median);

        console.log("Середнє арифметичне в файлі: " + average);


        const result = findDecreasingSequence(numbersfor);

        console.log("Найбільша зменшувана послідовність в файлі:", result);

        const result1 = findIncreasingSequence(numbersfor);

        console.log("Найбільша збільшувана послідовність в файлі:", result1);


    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            console.error("Файл" + filePath + "не знайдено.");
        } else {
            console.error('Помилка читання файлу:', err.message);
        }
    });



