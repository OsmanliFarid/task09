axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response.data);
});

const UlId = document.querySelector("#UlId");

const arr = ["farid", "elmir", "ayxan"];

const inputText = document.querySelector("#inputText");
inputText.addEventListener("change", () => {
  const name = arr.filter((item) =>
    item.toLowerCase().includes(inputText.value)
  );
  UlId.innerHTML = `<li>${name}</li>`;
});

UlId.innerHTML = `<li>${arr}</li>`;
let count = 0;
let count2 = 0;
let count3 = 0;
setInterval(() => {
  count++;
  const dakka = document.querySelector("#dakka");
  const seconds = document.querySelector("#seconds");
  const Hours = document.querySelector("#Hours");
  if (count === 60) {
    count2++;
    count = 0;
    dakka.innerHTML = `${count2}`;
  } else if (count2 === 60) {
    count3++;
    Hours.innerHTML = `${count3}`;
  } else if (count < 10) {
    seconds.innerHTML = `0${count}`;
  } else {
    seconds.innerHTML = `${count}`;
  }
}, 100);
