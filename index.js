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

/*
var student = {
    name: 'Bilol',
    age: 14
};

console.log(student.age, student.name);
*/

students = [
    {
	name: 'Muhammad',
	age: 17
    },
    {
	name: 'Bilol',
	age: 14,
    }
];

/*
for (student in students) {
    console.log(student);
    console.log(students[student].name);
}
*/
for (var student of students) {
    student.months = student.age * 12;
    student.reverse = student.name.split('').reverse().join('');
}

console.log(students);
