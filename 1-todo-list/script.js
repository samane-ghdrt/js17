const divEl =document.querySelector('#content');
function todoList(todos) {
  // Write your code here...
  const ulEl=document.createElement('ul');
  divEl.append(ulEl);
  
  
  for (const element of todos) {
    const liEl=document.createElement('li');
    ulEl.append(liEl);
    
    for (const [key, value] of Object.entries(element)) {
      liEl.textContent=key +':' +value ;
    }
  }
divEl.addEventListener('click',(e)=>{
e.target.style
})
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];
 

todoList(todos);
