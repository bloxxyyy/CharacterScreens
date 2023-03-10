const wrapper = document.getElementsByClassName("underlay")[0];

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}
  
const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}
  
const createGrid = () => {
    wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 100 : 50;
    var height = Math.max( document.body.scrollHeight, document.body.offsetHeight);
    
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(height / size);
    
    wrapper.style.height = height + "px";

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();
window.onload = function(){
    createGrid();
}