// <ul> 
//     <li>Name: Muhammad
//         <ul>
//             <li>Age: 16</li>
//             <li>Course: Frontend</li>
//         </ul>
//     </li>
//     <li>Name: Saida
//         <ul>
//             <li>Age: 16</li>
//             <li>Course: Frontend</li>
//         </ul>
//     </li>
// </ul>

function search(array, element) {
    if (array.indexOf(element) !== -1) {
        return array[array.indexOf(element)];
    } else {
        return -1;
    }
}

var block = document.getElementById('students');

var students = [
    'Saida',
    'Muhammad',
    'Intizor',
    'Muhammad',
    'Bilol',
    'Faridun',
    'Abdullah'
];

var ul = document.createElement('ul');
ul.id = "students-list";

block.appendChild(ul);

for (var s of students) {
    var li = document.createElement('li');

    li.innerText = s;

    ul.appendChild(li);
}



var student = document.getElementById('student');
var button = document.getElementById('delete');

button.addEventListener('click', function () {
    var result = search(students, student.value);

    var ulCheck = document.getElementById('students-list');

    if (ulCheck) {
        ulCheck.remove();
    }


    if (result == parseInt(-1)) {
        var h1 = document.createElement('h1');

        h1.innerText = "No Result!";

        h1.id = "noresult";

        block.appendChild(h1);
    } else {
        var noresult = document.getElementById('noresult');

        if (noresult) {
            noresult.remove();
        }
        var ul = document.createElement('ul');
        ul.id = "students-list";

        block.appendChild(ul);

        var li = document.createElement('li');

        li.innerText = result;

        ul.appendChild(li);
    }

});