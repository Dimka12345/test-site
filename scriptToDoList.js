'use strict'

let Tasks = [];

//document.getElementById('addTaskButton').addEventListener('onclick', getNewItem());

//document.getElementById('clearButton').addEventListener('onclick', clearTaskList());
    
function addTask() {
    getNewItem();
    showTaskList();
}


function getNewItem() {
    let element = document.getElementById('inputTask').value;
    let id = Date.now().toString();

    localStorage.setItem (id, element);
    Tasks.push(element);
    
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        alert(`${key}: ${localStorage.getItem(key)}`);
      }
}

function showTaskList() {
    let TaskList = document.getElementById('listTask');
    let item = '';
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        item += `<li class="list-group-item" id=${key}>${localStorage.getItem(key)}</li>`;
      }
    TaskList.insertAdjacentHTML('beforeend', item);
}

function createTask() {

}

function clearTaskList() {
    localStorage.clear();
    Tasks.length = 0;
}