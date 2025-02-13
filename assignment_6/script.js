const container = document.querySelector('.container');
const inputText = document.querySelector('.input-text');

function addTodo() {
    if (inputText.value.trim() === '') return; // Prevent adding empty tasks

    const todoDiv = document.createElement('div');
    const listText = document.createElement('p');
    const deleteBtn = document.createElement('button');

    listText.textContent = inputText.value;
    deleteBtn.textContent = 'Delete'; 

    // Assigning classes to newly created elements
    todoDiv.classList.add('listArea');
    listText.classList.add('listText');
    deleteBtn.classList.add('delete-button');

    todoDiv.appendChild(listText);
    todoDiv.appendChild(deleteBtn);
    container.appendChild(todoDiv);

    deleteBtn.addEventListener('click', () => {
        container.removeChild(todoDiv);
    });

    todoDiv.addEventListener('click', () => {
        todoDiv.classList.toggle('finishedTask');
    });

    inputText.value = ''; // Clear input after adding a task
}
