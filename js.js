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

function Show(){
    for(var i=0;i<students.length;i++){
        list=document.getElementById('st'),
        li=document.createElement("LI"),
        txt=document.createTextNode(students[i].name+" | ");
        txt1=document.createTextNode(students[i].id+" | ");
        txt2=document.createTextNode(students[i].gpa);
        li.appendChild(txt);
        li.appendChild(txt1);
        li.appendChild(txt2);
        list.appendChild(li);
    }
        document.getElementById("st").style.display="block";
}

function show(){
    document.getElementById("all").style.display="block";
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















