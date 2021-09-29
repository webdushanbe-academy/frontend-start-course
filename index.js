var person = 'Muhammad';

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

/*
если переменная name существует:
    если переменная age больше или равно 18:
        вывод в консоль("Вам доступен данный контент")
    иначе:
        вывод в консоль("Ваш возраст не совпадает")
иначе:
    вывод в консоль("Нет доступа")
*/

if (person) {
    if (age >= 18) {
        console.log("Вам доступен данный контент");
    }
    else {
        console.log("Ваш возраст не совпадает");
    }
}
else {
    console.log("Нет доступа");
}