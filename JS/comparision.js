const num1=10;
const num2=5;

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }
}
compareNumbers();