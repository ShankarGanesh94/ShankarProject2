// container = document.getElementById('container')

// h1 = document.createElement('h1');

// let element = h1.innertext = ('Hello!!!');


// console.log(element);

// //

// h2= document.createElement('h2');
// let element1 = h2.innertext=('How Are You?')



// console.log(element1);


// container.append(element);


// container.append(element1);

// //remove elemnt


// container.remove(h1);



let button = document.getElementById('add');

let todolist = document.getElementById('todolist');

let input = document.getElementById('input');

let todos = [];  //array

button.addEventListener('click', ()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value='';
})


function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todolist.append(para)
  
    


    
}
 
