

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const rightNow = dayjs().format('MMM DD YYYY [at] hh:mm:ss a');


$("#task").click(function() {
    $("form").dialog({
      height: 410,
      width: 410,
      title: "Add Task",
        click: function() {
          $( this ).dialog( "close" );
        },
      appendTo: '#popup',
    });
  });



// Todo: create a function to generate a unique task id
function generateTaskId() {
    let taskId = nextId;
    nextId++;
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return taskId;
};

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $('<div>')
  .addClass('task-card draggable my-3')
  .attr('data-task-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.description);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
  .addClass('danger-btn-delete')
  .text('Delete')
  .attr('data-task-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

  
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);
  $('#todo-cards').append(taskCard)
  
  }

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  const addTaskBtn = $("#addTasks")
  const taskTitleInput = $('#taskTitle')
  const datepickerInput = $('#datepicker')
  const taskDescriptionInput = $('#taskDescription')
  addTaskBtn.click(function(event){
    event.preventDefault()
    createTaskCard({title: taskTitleInput.val(), dueDate: datepickerInput.val(), description: taskDescriptionInput.val()})
    $("form").dialog('close');
  })


 $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true
  });

    // ? Make lanes droppable
    $('.lane').droppable({
      accept: '.draggable',
      drop: handleDrop,
    });
  });
