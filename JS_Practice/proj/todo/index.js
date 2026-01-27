const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function todoAPP() {
  readline.question(
    '\nChoose your option:\n1. Add todo\n2. Update todo\n3. Delete todo\n4. show todos \n5. Exit\n> ',
    (no) => {
      switch (no) {
        case '1':
          readline.question('Enter todo text: ', (text) => {
            addTodo(text);
            console.log('Todo added!');
            console.log(todos);
            todoAPP();
          });
          break;

        case '2':
          readline.question('Enter id: ',(id)=>{
            readline.question('Enter new text: ',(text)=>{
                updateTodo(Number(id),text)
                console.log("todo updated")
                console.log(todos);
                todoAPP();
            })
          })
          break;

        case '3':
          readline.question('Enter todo id to delete: ', (id) => {
            deleteTodo(Number(id));
            console.log('Todo deleted!');
            console.log(todos);
            todoAPP();
          });
          break;
        
        case '4':
            console.log('todos:' , todos);
            todoAPP();
            break;

        case '5':
          console.log('Goodbye 👋');
          readline.close();
          break;

        default:
          console.log('Invalid option');
          todoAPP();
      }
    }
  );
}

function addTodo(text) {
  let todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todos.push(todo);
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

function updateTodo(id, newText) {
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    console.log("ID not found");
    return;
  }

  todo.text = newText;
}



todoAPP();
