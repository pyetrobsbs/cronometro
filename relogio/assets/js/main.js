let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
let segundos =0;
let intervalo;
function criarHora(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false, 
    timeZone: 'UTC' 
  });
}
function MudaTempo(){
  segundos++;
  relogio.innerHTML = criarHora(segundos);
}
iniciar.addEventListener('click', ()=>{
 relogio.classList.remove('pausado');
intervalo = setInterval(MudaTempo,1000);
});

pausar.addEventListener('click', ()=>{
 clearInterval(intervalo);
 relogio.classList.add('pausado');

}

);
zerar.addEventListener('click', ()=>{
clearInterval(intervalo);
intervalo = null;
segundos = 0;
relogio.innerHTML = '00:00:00';

});




