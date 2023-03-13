const letters = "AB0CD1EF2GH3IJ4KL5MN6OP7QR8ST9UVWXYZ";

function onLoadInfoBarData(item) {
  let iteration = 0;
  item.dataset.value = item.innerText;

  let interval = setInterval(() => {
    item.innerText = item.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return item.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= item.dataset.value.length) { 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 40);
}