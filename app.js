let count = 0;

const start = document.querySelector("#value");

const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      start.style.color = "green";
    } else if (count <= -1) {
      start.style.color = "red";
    } else if (count === 0) {
      start.style.color = "#222";
    }

    start.textContent = count;
  });
});
