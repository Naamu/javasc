const toDoform = document.querySelector(".js-toDoForm");
const toDoinput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
//todos_ls 로컬 스토리지

function paintToDo(text){
    console.log(text);
    }

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
}

function loadToDo(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    toDoform.addEventListener("submit", handleSubmit);
    }
}

function init(){
    loadToDo();
    
}
init();