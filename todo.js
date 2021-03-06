const toDoform = document.querySelector(".js-toDoForm");
const toDoinput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
//todos_ls 로컬 스토리지

let toDos = [];
// const 인경우 삭제한 어레이로 교체할 수 없기에 let으로 수정함.



function delToDo(event){
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){        
        return toDo.id !== parseInt(li.id);        
    });
    toDos = cleanToDos;
    saveToDos()
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify( toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");    
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",delToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);
    saveToDos()    
    }

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}



function loadtoDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });            
        };
        
    }

function init(){
    loadtoDos();
    toDoform.addEventListener("submit", handleSubmit);
    
}
init();