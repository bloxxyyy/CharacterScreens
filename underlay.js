const wrapper = document.getElementsByClassName("underlay")[0];

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}
  
const createNav1 = tile => {
    tile.classList.add("tile");
    const tileImage = document.createElement("div");
    tileImage.classList.add("characterCardNav");
    tileImage.classList.add("navItem");
    tile.classList.add("cardNav");
    tile.appendChild(tileImage);
    return tile;
}

const createNav2 = tile => {
    tile.classList.add("tile");
    const tileImage = document.createElement("div");
    tileImage.classList.add("itemsCardNav");
    tileImage.classList.add("navItem");
    tile.classList.add("cardNav");
    tile.appendChild(tileImage);
    return tile;
}

const createTiles = (col, row) => {
    Array.from(Array(col * row)).map((tile, index) => {

        var t = createTile(index);
        if ((index) % col === 0 && Math.floor(index / col) === 3) {
            t = createNav1(t)
        }

        if ((index) % col === 0 && Math.floor(index / col) === 4) {
            t = createNav2(t)
        }

        


        wrapper.appendChild(t);
    });
}
  
const createGrid = () => {
    wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 100 : 50;
    var height = Math.max( document.body.scrollHeight, document.body.offsetHeight);
    
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(height / size);
    
    /* Size of a tile width */
    var tileWidth = document.body.clientWidth / columns;
    const nav = document.getElementsByClassName("nav")[0];
    nav.style.width = tileWidth + "px";



    wrapper.style.height = height + "px";

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns, rows);
}

createGrid();

window.onresize = () => createGrid();
window.onload = function(){
    createGrid();
}