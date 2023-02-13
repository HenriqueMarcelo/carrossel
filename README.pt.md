[Documentation in English 🇬🇧](README.md)

# Projeto de Banner Rotativo em JavaScript

Este é um projeto simples de banner rotativo criado em JavaScript puro, sem a utilização de bibliotecas externas. Ele tem como objetivo exibir imagens de forma intercalada em uma área específica de uma página web.
Seu principal objetivo é exibir imagens largas com altura fixa em que seu conteúdo principal está no centro e portanto suas bordas podem ser cortadas (cropadas).
Ele é perfeitamente compatível com a funcionalidade de "containers" de frameworks como bootstrap e tailwind, tornando a integração ainda mais fácil e prática.

## Características

- Exibição de múltiplas imagens;
- Troca automática de imagem a cada 5 segundos (tempo configurável);
- Navegação por botões de "anterior" e "próximo".
- Exibição dos indicadores de qual imagem está sendo exibida (bullets)

## Como usar

Para utilizar este projeto em seu site, basta seguir os seguintes passos:

1. Faça o download dos arquivos deste projeto;
2. Adicione o arquivo carrossel.css e  carrossel.js à sua página HTML;
3. Insira o seguinte código em sua página HTML, onde deseja exibir o banner rotativo
```
<div class="carrossel">
    <div class="itens">
        <a style="background:transparent url('deep-pink.png') center center"></a>
        <a style="background:transparent url('deep-sky-blue.png') center center"></a>
        <a style="background:transparent url('dim-gray.png') center center"></a>
    </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function(event) {
		carrossel = new Carrossel({
		classe:"carrossel",
		tempo:"5",
		infinito:true,
		indicadores:false,
		setas: true
		});
	});
<script />
```


## Sites utilizando nossa biblioteca
 - https://follybohrer.com.br/
 - https://pontaladministradora.com.br/
 - https://www.valescamarotti.com.br/
 - https://www.glauberbraga.com.br/
 - https://www.toyoserra.com.br/

## Tarefas
 - Transformar em uma sintaxe mais moderna para ser utilizado com import do JS
 - Enviar o projeto para o NPM
 - Criar uma documentação mais detalhada
 - Ser compativel com mais gestos do usuário

## Contribuições
Este é um projeto open-source e todas as contribuições são bem-vindas! Se você encontrar algum bug ou tiver uma sugestão de melhoria, por favor, abra uma issue aqui no GitHub.