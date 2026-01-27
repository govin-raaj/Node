
let todos = [];
let filter = 'all';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
}



function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const isDuplicate = todos.some(
        todo => todo.text.toLowerCase() === text.toLowerCase()
    );

    if (isDuplicate) {
        alert('This task already exists!');
        todoInput.value = '';
        return;
    }
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        editing: false
    };

    todos.push(todo);
    saveTodos();
    todoInput.value = '';
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
}

function getFilteredTodos() {
    if (filter === 'active') {
        return todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
        return todos.filter(todo => todo.completed);
    }
    return todos;
}

function renderTodos() {
    const filteredTodos = getFilteredTodos();

    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks to show</div>';
        return;
    }

    todoList.innerHTML = filteredTodos.map(todo => `
    <li class="todo-item ${todo.completed ? 'completed' : ''}">
        ${todo.editing
            ? `
                    <input
                        type="text"
                        value="${todo.text}"
                        onkeypress="if(event.key === 'Enter') saveTodo(${todo.id}, this.value)"
                        onblur="saveTodo(${todo.id}, this.value)"
                        autofocus
                    />
                  `
            : `
                    <input
                        type="checkbox"
                        ${todo.completed ? 'checked' : ''}
                        onchange="toggleTodo(${todo.id})"
                    />
                    <span ondblclick="editTodo(${todo.id})">${todo.text}</span>
                    <button class="edit-btn" onclick="editTodo(${todo.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
                  `
        }
    </li>
`).join('');

}

function editTodo(id) {
    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, editing: true }
            : { ...todo, editing: false }
    );
    renderTodos();
}

function saveTodo(id, newText) {
    const text = newText.trim();
    if (text === '') return;

    const isDuplicate = todos.some(
        todo =>
            todo.text.toLowerCase() === text.toLowerCase() &&
            todo.id !== id
    );

    if (isDuplicate) {
        alert('This task already exists!');
        return;
    }

    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, text, editing: false }
            : todo
    );

    saveTodos();
    renderTodos();
}



addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter = btn.dataset.filter;
        renderTodos();
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    saveTheme(isDark ? 'dark' : 'light');

    themeToggle.textContent = isDark
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});

loadTheme();
loadTodos();
renderTodos();