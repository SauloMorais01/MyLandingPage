const body = document.querySelector('body');
let boolModalExit = true;


document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var tempParams = {
        to_name: 'Saulo Morais',
        from_name: document.getElementById('nome').value,
        message: document.getElementById('mensagem').value,
        email: document.getElementById('email').value
    }

    emailjs.send('service_utdmcav', 'template_4np0dhe', tempParams).then(
        (response) => {
            console.log(response.status);
            alert('Sua mensagem foi enviada com sucesso!!')
        },
        (error) => {
            console.log(error.status);
            alert('Ops! algo deu errado.')
        },
    )
    
    this.reset();
});


const sobre = document.querySelector('.sobre');
const habilidades = document.querySelector('.habilidades');
const projetos = document.querySelector('.projetos');

let menuController = document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('sobre-menu')) {
        sobre.classList.remove('hidden');
        habilidades.classList.add('hidden');
        projetos.classList.add('hidden');
    }

    if(el.classList.contains('habilidades-menu')) {
        sobre.classList.add('hidden');
        habilidades.classList.remove('hidden');
        projetos.classList.add('hidden');
    }

    if(el.classList.contains('projetos-menu')) {
        sobre.classList.add('hidden');
        habilidades.classList.add('hidden');
        projetos.classList.remove('hidden');
    }
})