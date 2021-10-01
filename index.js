var students = [
    //  0          1
    'Muhammad', 'Bilol'
];

let numbers = [];


/*
console.log(students[0]);
console.log(students[1]); 
*/
/*
for (var i = 1; i <= 100; ++i) {
    numbers.push(i);
}
*/
// i = 0;
// length = 2;
// i < length = 1;

/*
i = i + 1;
i += 1;
i++
++i
*/

/*
for (var i = 0; i < students.length; ++i) {
    console.log(students[i]);
} 
*/

/*
for (var iterator = 0; iterator < numbers.length; ++iterator) {
    console.log('' + numbers[iterator]);
}
*/

/*
for (initialization; condition; increment/decrement/ending) {
    statements
}
*/
/*
var i = 0;

while(i < students.length) {
    console.log(students[i]);

    ++i;
}
*/

var students = 'Muhammad,Bilol,Faridun,Abdullah';
/*
var reverse = '';

for (var i = name.length - 1; i >= 0; --i) {
    reverse += name[i];
}

console.log(reverse);

console.log(name.reverse()); */

var name = 'Faridun';

console.log(name.split('').reverse().join('').toLowerCase());

for (var j = 0; j < 10; ++j) {
    console.log(name.split('').reverse().join('').toLowerCase());
}


