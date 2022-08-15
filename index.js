const y = document.querySelectorAll(".entry");

y[0].focus();

y.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key < 9) {
      y[index].value = "";
      setTimeout(() => {
        y[index + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        y[index - 1].focus();
      }, 10);
    }
  });
});
