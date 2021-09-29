var name = 'Muhammad';

var age = 25;

/*
if (condition) {
    statement;
} else {
    statement
}
*/

/*
== -> равно
!= -> не-равно
> - больше
< - меньше
>= - больше или равно
<= - меньше или равно
*/

/*
integer = 29
string = "WebDushanbe Academy"
float = 1.5
boolean = true, false
*/

if (age == 18) {
    if (name == 'Muhammad') {
        console.log(name + ' is in 1 course');
    }
} 
else if (age == 19) {
    console.log('2 course');
}
else if (age == 20) {
    console.log('3 course');
}
else if (age == 21) {
    console.log('4 course');
}
else if (age > 21) {
    console.log('Worker');
}
else {
    console.log('Pupil');
}