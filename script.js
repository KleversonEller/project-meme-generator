window.onload = function () {
  //? Requisito 1

  let caixaDeTexto = document.querySelector('#text-input');

  caixaDeTexto.addEventListener('keyup', function (evento) {
    let texto = document.querySelector('#meme-text');
    texto.innerHTML = evento.target.value;
  });

  //! Implementa o valor digitado no input no texto da imagem

  //? Requisito 2

  let imagemSelecionada = document.querySelector('#meme-insert');

  imagemSelecionada.addEventListener('change', function (evento) {
    let localImagem = document.querySelector('#meme-image');
    let cria = document.createElement('img');
    let imagem = evento.target;
    let reader = new FileReader();

    reader.onload = function () {
      let referencia = reader.result;
      cria.src = referencia;
    };
    reader.readAsDataURL(imagem.files[0]);
    localImagem.appendChild(cria);
  });

  //! Pega o aquivo selecionado pelo ususario e exibe na tela
};
