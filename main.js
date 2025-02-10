const keyboard = document.querySelector(".keyboard");

const keys = "1234567890qwertyuiopasdfghjklzxcvbnm".split("");

keys.forEach((key) => {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("key");
  keyDiv.setAttribute("data-key", key);

  const spanElem = document.createElement("span");
  spanElem.innerText = key;

  keyDiv.appendChild(spanElem);

  keyboard.appendChild(keyDiv);

  if (key === "0" || key === "p" || key === "l") {
    const lineBreakDiv = document.createElement("div");
    lineBreakDiv.classList.add("break");
    keyboard.appendChild(lineBreakDiv);
  }
});

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key.toLowerCase();

  const keyElement = document.querySelector(`.key[data-key="${pressedKey}"]`);

  if (keyElement) {
    keyElement.classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  const releasedKey = e.key.toLowerCase();

  const keyElement = document.querySelector(`.key[data-key="${releasedKey}"]`);

  if (keyElement) {
    keyElement.classList.remove("active");
  }
});
