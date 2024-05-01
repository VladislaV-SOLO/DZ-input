// const mainArray = [1,2,3,4,5];
// const filterArray = [3,4,5,6,7];
// let setMainArray = new Set(mainArray);
// let setFilterArray = new Set(filterArray)

// function filterArrayByAnother (mainArray, filterArray) {
//     let result = mainArray.filter((num) => setFilterArray.has(num))
//     console.log(result);
// }
// filterArrayByAnother(mainArray, filterArray)

// Второй метод // Второй метод // Второй метод // Второй метод // Второй метод // Второй метод

// const mainArray = [1,2,3,4,5];
// const filterArray = [3,4,5,6,7];
// let result = [];

// function filterArrayByAnother(mainArray, filterArray) {
//     for (let i = 0; i < mainArray.lenght; i++) {
//         for (let j = 0; j < filterArray.lenght; j++) {
//             if (mainArray[i] === filterArray[j]) {
//                 result.push(mainArray[i])
//             }
//         }
//     }
// }
// filterArrayByAnother(mainArray, filterArray)

// третий метод // третий метод // третий метод // третий метод // третий метод // третий метод

// const mainArray = [1,2,3,4,5];
// const filterArray = [3,4,5,6,7];

// function filterArrayByAnother (mainArray, filterArray) {
//     let result = [];
//     for (let i = o; i < mainArray.lenght; i++) {
//         if (filterArray.indexOf(mainArray[i]) == -1) {
//             result.push(mainArray[i]);
//         }
//     }
//     return result;
// }
// filterArrayByAnother(mainArray, filterArray)
// console.log(result);

// четвертый метод // четвертый метод // четвертый метод // четвертый метод // четвертый метод // четвертый метод 

const mainArray = [1,2,3,4,5];
const filterArray = [3,4,5,6,7];

function filterArrayByAnother (element) {
    return mainArray.indexOf(element) !== -1;
}
let newArray = filterArray.filter(filterArrayByAnother);
console.log(newArray);
