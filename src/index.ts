// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./Tarefa";

let form = document.getElementById('form');


let tarefas: Tarefa[];

window.addEventListener('load', (event) => {

    let atividadeExistente = document.querySelector('#table');

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const inputForm = document.getElementById('tf_2do') as HTMLInputElement;
        const newTask = document.createElement('tr');
        const priority = document.querySelector('#priority') as HTMLInputElement;
        
        newTask.innerHTML += `<td><input type="checkbox"></td>`;
        newTask.innerHTML += `<td>${inputForm.value.substr(3)}</td>`;
        newTask.innerHTML += `<td><i class="material-icons">delete</i></td>`;

        if (priority.value === '1'){
            newTask.className = 'low';
        } else if( priority.value === '2'){
            newTask.className = 'middle';
        } else if (priority.value === '3'){
            newTask.className = 'high'
        }
        inputForm.value = '';

        atividadeExistente.appendChild(newTask)


    })



})