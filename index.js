var block = document.querySelector('.block');


var students = [
	{
		name: 'Muhammad',
		age: 17,
		course: 'Frontend'
	},
	{
		name: 'Abdullah',
		age: 17,
		course: 'Frontend'
	},
	{
		name: 'Bilol',
		age: 14,
		course: 'Frontend'
	},
	{
		name: 'Faridun',
		age: 22,
		course: 'Frontend'
	},
];

var ul = document.createElement('ul');

block.appendChild(ul);


for (var student of students) {
	var li = document.createElement('li');
	li.innerText = "Name: " + student.name;
	ul.appendChild(li);


	var ul2 = document.createElement('ul');
	li.appendChild(ul2);

	var li2 = document.createElement('li');
	li2.innerText = "Age: " + student.age;
	var li3 = document.createElement('li');
	li3.innerText = "Course: " + student.course;

	ul2.appendChild(li2);
	ul2.appendChild(li3);

}