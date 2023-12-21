document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const dice_area = document.getElementById("dice_area");
  console.log(dice_area);

  const new_dice = new DiceType();
  console.log(new_dice.name);

  const second_dice = new DiceType(
    (name = "Attribute"),
    (color = "Red"),
    (reroll_status = true),
  );
  console.log(second_dice.name);
  second_dice.log_to_console();
  second_dice.set_value(4);
  second_dice.log_to_console();

  let new_dice_holder = new DiceHolder(new_dice);
  new_dice_holder.add_dice();
  new_dice_holder.get_dice_num_info();

  new_dice_holder.add_dice();
  new_dice_holder.add_dice();
  new_dice_holder.add_dice();
  new_dice_holder.get_dice_num_info();

  render_dice(dice_area, new_dice_holder);
});

class DiceType {
  constructor(name = "Default", color = "white", reroll_status = true) {
    this.name = name;
    this.color = color;
    this.reroll_status = reroll_status;
    this.value = null;
  }

  log_to_console() {
    console.log(this);
  }

  set_value(value) {
    this.value = value;
  }
}

class DiceHolder {
  constructor(dice_type) {
    this.dice_type = dice_type;
    this.dice_list = [];
  }

  add_dice() {
    this.dice_list.push(this.dice_type);
  }

  get_dice_num_info() {
    console.log(
      "There is " +
        this.dice_list.length +
        " " +
        this.dice_type.name +
        " dice stored",
    );
  }
  get_num_of_dice() {
    return this.dice_list.length;
  }
  get_dice_array() {
    return this.dice_list;
  }
}

function render_dice(dice_area, dice_holder) {
  let dice_array = dice_holder.get_dice_array();
  dice_array.forEach((element) => {
    const new_dice_div = document.createElement("div");
    new_dice_div.classList.add("dice", "first-face");
    const dot = document.createElement("span");
    dot.classList.add("dot");
    new_dice_div.appendChild(dot);
    dice_area.appendChild(new_dice_div);
  });
}
