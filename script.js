document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskTitleInput = document.getElementById('task-title');
    const taskPrioritySelect = document.getElementById('task-priority');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskTitle = taskTitleInput.value;
        const taskPriority = taskPrioritySelect.value;

        if (taskTitle === '') {
            alert('Please enter a task title.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add(taskPriority);
        taskItem.innerHTML = `
            <span>${taskTitle}</span>
            <div class="task-actions">
                <button class="edit-task">Edit</button>
                <button class="delete-task">Delete</button>
            </div>
        `;

        tasksList.appendChild(taskItem);

        taskTitleInput.value = '';

        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        taskItem.querySelector('.edit-task').addEventListener('click', () => {
            const newTitle = prompt('Edit task title:', taskTitle);
            if (newTitle !== null && newTitle !== '') {
                taskItem.querySelector('span').textContent = newTitle;
            }
        });
    });
});
