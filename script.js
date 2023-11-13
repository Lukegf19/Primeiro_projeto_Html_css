   // Obtém o elemento de entrada de texto
   const inputBusca = document.getElementById('txtBusca');

   // Adiciona um ouvinte de evento de digitação para capturar a entrada do usuário
   inputBusca.addEventListener('input', function() {
       const termoBusca = inputBusca.value.toLowerCase(); // Obtém o termo de pesquisa em letras minúsculas

       // Obtém todas as categorias de receitas
       const categorias = document.getElementsByClassName('Categorias colunas');

       // Itera sobre as categorias e verifica se o termo de pesquisa corresponde ao título da categoria
       for (let i = 0; i < categorias.length; i++) {
           const categoria = categorias[i];
           const titulo = categoria.getElementsByTagName('h2')[0].textContent.toLowerCase();

           // Verifica se o termo de pesquisa está presente no título da categoria
           if (titulo.includes(termoBusca)) {
               categoria.style.display = 'block'; // Exibe a categoria correspondente
           } else {
               categoria.style.display = 'none'; // Oculta as categorias não correspondentes
           }
       }
   });