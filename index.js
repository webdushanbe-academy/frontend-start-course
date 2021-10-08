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

var block = document.getElementById('students');

var students = [
    {
        name: 'Muhammad',
        age: 16,
        course: 'Frontend'
    },
    {
        name: 'Saida',
        age: 16,
        course: 'Frontend'
    },
    {
        name: 'Masha',
        age: 22,
        course: 'SMM'
    }
];

var ul = document.createElement('ul');
block.appendChild(ul);
for (var student of students) {
        var li = document.createElement('li');
        li.innerText = "Name: " + student.name;
        li.id = student.name;
        ul.appendChild(li);

        var ul2 = document.createElement('ul');
        var li2 = document.createElement('li');
        li2.innerText = "Age: " + student.age;

        var li3 = document.createElement('li');
        li3.innerText = "Course: " + student.course;

        ul2.appendChild(li2);
        ul2.appendChild(li3);

        li.appendChild(ul2);
}

var student = document.getElementById('student');
var button = document.getElementById('delete');

button.addEventListener('click', function () {
    document.getElementById(student.value).remove();
});