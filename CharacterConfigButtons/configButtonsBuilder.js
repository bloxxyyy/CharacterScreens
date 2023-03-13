class Button {
    constructor(name, sortBy, json) {
      this.name = name;
      this.json = json;
      this.order = sortBy;
      this.element = this.buildButtonElement();
      this.addClickListener();
    }
  
    buildButtonElement() {
      const container = document.createElement("div");
      container.classList.add("character-buttons");
      container.id = `button-${this.name}-order`;
  
      return container;
    }
  
    addClickListener() {
      this.element.addEventListener("click", () => {
        this.toggleOrder();
        this.sortJson();
        var order = this.order ? "Descending" : "Ascending";
        buildPopup("Sorted by " + this.name + ": " + order);
        remakeCards();
      });
    }
  
    toggleOrder() {
      this.order = !this.order;
    }
  
    sortJson() {
        this.json.characters.sort((a, b) => {
            if (this.name === "name") {
                return a.Name.localeCompare(b.Name);
            } else if (this.name === "age") {
                return a.Age - b.Age;
            } else if (this.name === "gender") {
                return a.Gender.localeCompare(b.Gender);
            } else if (this.name === "status") {
                return a.Status.localeCompare(b.Status);
            }
        });

        if (!this.order) {
            this.json.characters.reverse();
        }
    }
  
    hide() {
      this.element.style.display = "none";
    }
  
    show() {
      this.element.style.display = "block";
    }
  }

const container = document.querySelector(".character-buttons-container");
const buttonJson = JSON.parse('{"buttons":[["name", true], ["age", true], ["gender", true], ["status", true]]}');
const buttons = [];

buttonJson.buttons.forEach(([name, sortBy]) => {
    const button = new Button(name, sortBy, json);
    container.appendChild(button.element);
    buttons.push(button);
});

function hideButtons() {
    buttons.forEach(button => {
      button.hide();
    });
}

function displayButtons() {
    buttons.forEach(button => {
      button.show();
    });
  }