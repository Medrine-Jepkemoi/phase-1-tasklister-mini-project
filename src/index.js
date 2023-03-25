document.addEventListener('DOMContentLoaded', () => {
  // your code here

  //grabbing the form and adding an event listener to it to enable submit event
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {

    //prevents befault behavior of the submit event
    e.preventDefault();
    
    //targetting the form input to display its value
    addToDo(e.target.new_task_description.value);

    //reset form
    form.reset();

  })

});

//function to add values to the to do list
  function addToDo(todo){

    //create an element to store the list
    const list = document.createElement('li');
    list.addEventListener('click', removeTask)
    list.textContent = todo;

    //create a button to remove task, btn is a child of list
    const btn = document.createElement('button');
    btn.textContent = 'Clear';
    list.appendChild(btn)

    //accessing where to store the list and appending the list to it
    const div = document.querySelector('#list ul').appendChild(list)
  }

  //function to delete values form the todo list
  function removeTask(e){
    e.target.parentNode.remove();
 }





