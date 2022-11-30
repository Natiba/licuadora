let estadoLicuadora = "apagado";
let btnSoundLicuadora = document.querySelector("#licuadora-boton-sonido");
let soundLicuadora = document.querySelector("#licuadora-sonido");
let licuadora = document.querySelector("#licuadora");
let boton = document.querySelector("#licuadora-boton");

boton.addEventListener("click",() => {
    controlarLicuadora() 
})

const controlarLicuadora = () => {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    //sonido
    sonidoEncendido()
    // Agrego clase creada desde Css
    licuadora.classList.add("licuadora-activa");
  } else {
    estadoLicuadora = "apagado";
    //sonido
    sonidoEncendido()
    licuadora.classList.remove("licuadora-activa");
  }
};

const sonidoEncendido = () => {
    if (soundLicuadora.paused) {
      btnSoundLicuadora.play();
        soundLicuadora.play();
    } else {
      btnSoundLicuadora.play();
        soundLicuadora.pause();
        soundLicuadora.currentTime = 0
        /* reinicio el audio al seg 0 */
    }
}