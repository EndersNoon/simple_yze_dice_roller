document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

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
});

class DiceType {
  constructor(name = "Default dice", color = "white", reroll_status = true) {
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
