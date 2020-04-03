let listaDeTeclas = document.querySelectorAll('.btn');
let conteudoDoVisor = document.querySelector('.visorBorda div')
let buttonResultado = document.querySelector('#resultado')
let buttonLimpar = document.querySelector('#limpar');

listaDeTeclas.forEach(tecla =>{
    tecla.onclick = () =>{
        if(tecla.textContent == '=' || tecla.textContent == 'CE' ){
            return
        }
        conteudoDoVisor.innerHTML += tecla.textContent
    }
})

buttonResultado.onclick = ()=>{
    let resultadoDaOperacao = eval(conteudoDoVisor.textContent)
    conteudoDoVisor.innerHTML = resultadoDaOperacao
}

buttonLimpar.onclick = () =>{
    conteudoDoVisor.innerHTML = ""
}