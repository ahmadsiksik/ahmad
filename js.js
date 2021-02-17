var students = [];
var submit=document.getElementById('submit')
    submit.addEventListener('click', (a) => {
    a.preventDefault();
    let Name = document.getElementById('Studint_Name');
	let Id = document.getElementById('Studint_Id');
	let GPA = document.getElementById('Studint_GPA');
	insertStudent(Name.value, Id.value, GPA.value);
    Name.value="";
    Id.value="";
    GPA.value="";
});

document.getElementById('Delete').addEventListener('click', (w) => {
    w.preventDefault();
    let Name = document.getElementById('Studint_Name');
    let Id = document.getElementById('Studint_Id');
    let GPA = document.getElementById('Studint_GPA');
    deletStudent(Id.value);
    Name.value="";
    Id.value="";
    GPA.value="";
    
    });


    document.getElementById('updata').addEventListener('click', (y) => {
        y.preventDefault();
        let Name = document.getElementById('Studint_Name');
        let Id = document.getElementById('Studint_Id');
        let GPA = document.getElementById('Studint_GPA');
        updataStudent(Name.value, Id.value, GPA.value);
        Name.value="";
        Id.value="";
        GPA.value="";

        });

function insertStudent(name, id, gpa) {
    var student = {
		name: name,
		id: id,
		gpa: gpa,
	};

	students.push(student);
    console.log('students array: ', students);
}

function deletStudent(id) {
    for(var i=0;i<students.length;i++){
        if(students[i].id===id){
            delete students[i];
            console.log('students array: ', students);
        }
    }
}


function updataStudent(name,id, gpa) {
    for(var i=0;i<students.length;i++){
        if(students[i].id===id){
            students[i].name=name;
            students[i].id=id;
            students[i].gpa=gpa;
            console.log('students array: ', students);
        }
    }
}




function show(){
    document.getElementById("info").style.display="block";
    document.getElementById("header").style.display="none";
}



function _error(){
    var Name=document.getElementById("Studint_Name").value;
    var Id=document.getElementById("Studint_Id").value;
    var GPA=document.getElementById("Studint_GPA").value;
    
  
if(Name==''||Id==''||GPA==''){

if(Name==''){
    document.getElementById("demo1").innerHTML="Please enter the name";
}

if(Name!=''){
    document.getElementById("demo1").innerHTML="";
}

if(Id==''){
    document.getElementById("demo2").innerHTML="Please enter the Id";

}
if(Id!=''){
    document.getElementById("demo2").innerHTML="";
  
}

if(GPA==''){
    document.getElementById("demo3").innerHTML="Please enter the GPA";
}
if(GPA!=''){
    document.getElementById("demo3").innerHTML="";
}
return false;
}

}


















/*





var students = [];

document.getElementById('Add').addEventListener('click', () => {
let x = 30;
let nameInputEl = document.getElementById('name');
let idInputEl = document.getElementById('idNumber');
let gdpaInputEl = document.getElementById('gdpa');

// Validation for input
inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

// insert student
insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

// Show success message
showMessage('success');
student=null;


});
document.getElementById('print').addEventListener('click', () => {

printstudent();


});



document.getElementById('Delete').addEventListener('click', () => {

let x = 20;
let nameInputEl = document.getElementById('name');
let idInputEl = document.getElementById('idNumber');
let gdpaInputEl = document.getElementById('gdpa');

// Validation for input
Deletestudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

student = null;

});


document.getElementById('Updata').addEventListener('click', () => {

let x = 20;
let nameInputEl = document.getElementById('name');
let idInputEl = document.getElementById('idNumber');
let gdpaInputEl = document.getElementById('gdpa');

// Validation for input
updatastudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

student = null;

});



function inputValidation(name, id, gdpa) {
// check for the value of each element
let x = 30;

if (name == '') {
alert('Please insert the student name');
}

if (id == '') {
alert('Please insert the student id number');
}

if (gdpa == '') {
alert('Please insert the student gdpa');
}
}

function insertStudent(name, id, gdpa) {
let student = {
name: name,
id: id,
gdpa: gdpa,
};
students.push(student);
console.log('students array: ', students);
}

function showMessage(event){
if (event == 'success') {
alert('Studnet added!')
}else{
alert('Faild to add student')
}

}

function printstudent()
{

students.top();
}
function Deletestudent(id)
{

var i;
for (i = 0; i < students.length; i++)
{
if(students[i].id===id)
{
delete students[i];
console.log('students array: ', students);

}

}

}
function updatastudent(name, id, gdpa)
{
var i;
for (i = 0; i < students.length; i++)
{
if(students[i].id===id)
{
students[i].id=id;
students[i].name=name;
students[i].gdpa=gdpa;
console.log('students array: ', students);

}

}


}
// This week task:
// Show list of students
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
*/