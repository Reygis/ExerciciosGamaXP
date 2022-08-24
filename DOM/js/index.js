//Geral

// 1- O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header');
header[0].style.backgroundColor = '#2E948A';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
linkCursos.setAttribute('href', 'cursos.html');


// Home
if (window.location.pathname == '/index.html') {
    // 1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
    let introducao = document.querySelector('#introducao');
    introducao.style.justifyContent = 'center';

    // 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
    let titulo1 = document.querySelector(".titulo.depoimento h3");
    titulo1.innerHTML = 'O que falam sobre nós';

    // 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
    let titulo2 = document.querySelectorAll(".titulo h3");
    titulo2[1].innerHTML = 'Mais conteúdo pra você';

    // 4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
    let todosTitulos = document.querySelectorAll('.titulo');
    todosTitulos.forEach(element => element.style.textTransform = 'uppercase');

    // 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
    let todosPosts = document.querySelector('#todos_posts');
    todosPosts.setAttribute('href', 'blog.html');

    // 6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
    // <div id="independencia">
    // <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
    // <h2>Independência Financeira</h2>
    // <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    //  eu fugiat nulla pariatur. </p>
    // <a class="comecar_agora" href="./curso.html">começar agora</a>
    // </div>
    let investimentos_poupando_independencia = document.querySelector('#investimentos_poupando_independencia');
    let novadiv = document.createElement(`div`);
    novadiv.setAttribute('id', 'independencia');
    novadiv.innerHTML =
        `<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
        <h2>Independência Financeira</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. </p>
        <a class="comecar_agora" href="./curso.html">começar agora</a>
        </div>
        `;
    investimentos_poupando_independencia.appendChild(novadiv);
};

// Página Contato
if (window.location.pathname == '/contato.html') {
    // 1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
    let botaoenviar = document.querySelector('#enviar');
    botaoenviar.setAttribute('action', 'sucesso.html');

    // 2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
    let formulario = document.querySelector('#formulario form');
    let telefone = document.createElement('input');
    telefone.setAttribute('type', 'tel');
    telefone.setAttribute('placeholder', 'telefone');
    formulario.insertBefore(telefone, formulario.children[3]);

    // 3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;
    let textA = document.getElementsByTagName('textarea');
    textA[0].style.boxSizing = "border-box";

    //4 - O botão não está do tamanho adequado, precisa ter uma largura maior;
    let botaoEnviar = document.getElementById('enviar');
    botaoEnviar.style.width = 'auto';

    //5 - Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
    // *********  tentativa de fazer puxando de um iframe display:none ********//
    document.write ('<iframe id="iframe1" src="/index.html" style="display:none" onload="copiar()"></iframe>');
    function copiar(){
        let TituloComentario = document.getElementById('iframe1').contentWindow.document.querySelector('.titulo.depoimento');
        TituloComentario.setAttribute('style', 'margin:20px;color:#009688;font-size:25px;text-transform:uppercase;');
        let comentario = document.getElementById('iframe1').contentWindow.document.getElementById('falam_sobre');
        comentario.setAttribute('style','display:flex;flex-wrap:wrap;flex-direction:row;margin:10px 5px 110px 5px;gap:30px;');
        let cardComentario = document.getElementById('iframe1').contentWindow.document.querySelectorAll('#falam_sobre div');
        cardComentario.forEach(element=>{element.setAttribute('style','display:flex;align-items:center;padding:10px 5px;width:570px;margin-left:20px;gap:20px;')});
        let main = document.getElementsByTagName('main');
        console.log(main[0]);
        main[0].insertBefore(TituloComentario, main[0].children[2]);
        main[0].insertBefore(comentario, main[0].children[3]);
    };

    // ***** fazendo na unha _ colando o texto do html ***** ////
    // let main = document.getElementsByTagName('main');
    // let novaSection = document.createElement('div');
    // novaSection.innerHTML =
    //     `<section class='titulo depoimento' style="margin:20px;">
    //         <h3 style="color:#009688;font-size:30px;">O QUE FALAM SOBRE NÓS</h3>
    //     </section>

    //     <section id='falam_sobre' style="display:flex; flex-wrap:wrap; flex-direction:row; margin:10px 5px 110px 5px;">
    //         <div class="depoimentos" style ="display:flex;align-items:center;padding:10px 5px;width:570px;margin-left:20px">
    //             <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    //             <p style ="margin:15px">
    //                 ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    //                 totam rem aperiam.”
    //                 <br>
    //                 <br>
    //                 Wally, 25
    //             </p>
    //         </div>

    //         <div class="depoimentos"style ="display:flex;align-items:center;padding:10px 5px;width:570px;margin-left:20px">
    //             <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    //             <p style ="margin:15px">
    //                 ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //                 laudantium, totam rem aperiam.”
    //                 <br>
    //                 <br>
    //                 Jaden Smith, 23
    //             </p>
    //         </div>

    //         <div class="depoimentos"style ="display:flex;align-items:center;padding:10px 5px;width:570px;margin-left:20px">
    //             <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    //             <p style ="margin:15px">
    //                 ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //                 laudantium, totam rem aperiam.”
    //                 <br>
    //                 <br>
    //                 Whoopi Goldberg, 37
    //             </p>
    //         </div>

    //         <div class="depoimentos"style ="display:flex;align-items:center;padding:10px 5px;width:570px;margin-left:20px">
    //             <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    //             <p style ="margin:15px">
    //                 ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //                 laudantium, totam rem aperiam.”
    //                 <br>
    //                 <br>
    //                 Janes Joplin, 29
    //             </p>
    //         </div>
    //     </section>`;
    // main[0].appendChild(novaSection);
};