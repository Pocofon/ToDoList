const input__in = document.querySelector('.input__in').value;


document.querySelector('.btn__add').onclick = function(){
    const input = document.querySelector('.input__in');
    value = input.value;
    input.value = '';

    if(value.length == 0){
        alert("Please Enter a Task");
        console.log(input__in);
    }

    else{
        document.querySelector('.tasks').innerHTML += `
        <div class="task">
                <input class="input__out" type="text" value="${value}" readonly>
                <button class="edit btn">Edit</button>
                <button class="delete btn">Delete</button>
            </div>`;

        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentElement.remove();
            }
        }

        const edit_tasks = document.querySelectorAll('.edit');
        for(let i =0; i<edit_tasks.length; i++){
            edit_tasks[i].onclick = function(){
                console.log(edit_tasks[i]);
                const vInput = this.parentElement.firstElementChild;
                if(edit_tasks[i].innerHTML === 'Edit'){
                    vInput.removeAttribute('readonly');
                    edit_tasks[i].innerHTML = 'Set';
                }
                else{
                    vInput.setAttribute('readonly', true);
                    edit_tasks[i].innerHTML = 'Edit';
                }
            }
        }
    }
}
