window.addEventListener("load", () => {
  const oclock = () => {
    const hours = new Date();

    return hours.toLocaleTimeString("pt-BR", {
      hours: false,
    });
  };

  console.log(oclock());

  const timer = document.querySelector(".hoursNow");
  let setTimer;

  const showHours = () => {
    setTimer = setInterval(() => {
      timer.innerHTML = oclock();
    }, 1000);
  };

  showHours();
});
