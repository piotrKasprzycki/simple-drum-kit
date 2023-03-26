const drums = document.querySelector("#drums");

const instruments = [
  { name: "crash", key: "q" },
  { name: "hi-hat", key: "w" },
  { name: "bass-drum", key: "e" },
  { name: "snare", key: "r" },
];

instruments.forEach((instrument) => {
  //creating button for each instrument
  const newButton = document.createElement("button");
  newButton.classList.add("drum");
  newButton.style.backgroundImage = `url("images/${instrument.name}.svg")`;
  drums.append(newButton);

  //triggering audio file and changing instrument button style on click
  newButton.addEventListener("click", (e) => {
    const audio = new Audio(`samples/${instrument.name}.wav`);
    audio.play();

    newButton.style.boxShadow = "1.6px 3.2px 3.2px hsl(0deg 0% 0% / 0.45)";
    newButton.style.transform = "scale(0.98)";
    setInterval(() => {
      newButton.style.boxShadow = "0.8px 1.6px 1.6px hsl(0deg 0% 0% / 0.45)";
      newButton.style.transform = "scale(1)";
    }, 400);
  });

  //clicking instrument button on key press
  document.addEventListener("keypress", (e) => {
    if (e.key === instrument.key) newButton.click();
  });
});
