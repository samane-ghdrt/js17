function listOfColours(colours) {
  // Write your code here...
  const divEl=document.querySelector('div');
  const selectEl=document.createElement('select');
const pEL=document.createElement('p');
divEl.append(pEL);
pEL.append(selectEl);
for (const element of colours) {
  const optionEl=document.createElement('option');
 selectEl.append(optionEl);
 optionEl.value=element;
 optionEl.text=element;
}

selectEl.addEventListener('change',(e)=>{
  const selectedColour = selectEl.value;  
pEL.textContent = `You have selected: ${selectedColour}`;
pEL.style.color = selectedColour;
  
})
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
