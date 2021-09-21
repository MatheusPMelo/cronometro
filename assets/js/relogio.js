const relogio = () => {
  const criaHoraDosSegundos = (segundos) => {
    const hours = new Date(segundos * 1000);

    return hours.toLocaleTimeString("pt-BR", {
      hours: false,
      timeZone: "UTC",
    });
  };

  const relogio = document.querySelector(".relogio");

  let segundos = 0;
  let timer;

  const iniciaRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  };

  document.addEventListener("click", (e) => {
    const elemento = e.target;

    if (elemento.classList.contains("iniciar")) {
      clearInterval(timer);
      relogio.classList.remove("stop");
      iniciaRelogio();
    }
    if (elemento.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("stop");
    }

    if (elemento.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("stop");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
};
relogio();
