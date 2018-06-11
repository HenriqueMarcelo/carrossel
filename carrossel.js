var i = null;

var Carrossel = function(opcoes){
  var _this = this;

  /*Setando Defauts*/
  _this.opcoes = opcoes;
  _this.tempo = opcoes.tempo || 3;
  _this.classeEspecificada = opcoes.classe || 'carrossel';
  _this.infinito = (typeof opcoes.infinito !== 'undefined') ?  opcoes.infinito : true ;
  _this.unidade = opcoes.unidade || 'vw';


  _this.elementosComClasseEspecificada = document.getElementsByClassName(_this.classeEspecificada);

  validacoes();

  _this.carrossel       = _this.elementosComClasseEspecificada[0];
  _this.itens           = _this.carrossel.children[0];
  _this.setas           = _this.carrossel.children[1];
  _this.indicadores     = _this.carrossel.children[2];
  _this.setaEsquerda    = _this.setas.children[0];
  _this.setaDireita     = _this.setas.children[1];
  _this.numeroDeBanners = _this.itens.childElementCount;
  _this.bannerAtual     = 0;
  _this.loop            = null;

  _this.carrossel.setAttribute("class", _this.carrossel.getAttribute('class') + ' ' + 'classeCarrossel');

  _this.anterior = function (){
    if(_this.infinito){
      _this.bannerAtual--;
      if(_this.bannerAtual < 0){
        _this.itens.setAttribute("class", "itens notransition");
        _this.bannerAtual = _this.numeroDeBanners;
        trocarImg();

        setTimeout(function() {
          _this.anterior();
        }, 0);

      }else{
        _this.itens.setAttribute("class", "itens");
        trocarImg();
      }
    }else{
      this.bannerAtual--;
      if(_this.bannerAtual < 0){
        _this.bannerAtual = _this.numeroDeBanners - 1;
      }
      _this.itens.setAttribute("class", "itens");
      trocarImg();
    }
  }

  _this.proxima = function (){
    if(_this.infinito){
      _this.bannerAtual++;
      if(_this.bannerAtual > _this.numeroDeBanners){
        _this.itens.setAttribute("class", "itens notransition");
        _this.bannerAtual = 0;
        trocarImg();

        setTimeout(function() {
          _this.proxima();
        }, 0);

      }else{
        _this.itens.setAttribute("class", "itens");
        trocarImg();
      }
    }else{
      _this.bannerAtual++;
      if(_this.bannerAtual >= _this.numeroDeBanners){
        _this.bannerAtual = 0;
        trocarImg();
      }else{
        trocarImg();
      }
    }
  }

  function validacoes(){
    if(_this.elementosComClasseEspecificada.length != 1){
      console.error("Erro ao encontrar classe especificada");
    }
    if(_this.elementosComClasseEspecificada.length > 1){
      console.error("Muitos Elementos com classe especificada. Crie uma instância de Carrossel para cada slider.");
    }
  }

  function registraEventosSetas(){
    _this.setaEsquerda.addEventListener("click", function callBackEsquerda(){
      pararLoop();
      _this.anterior();
      iniciarLoop();
    }, false);

    _this.setaDireita.addEventListener("click", function callBackDireita(){
      pararLoop();
      _this.proxima();
      iniciarLoop();
    }, false);
  }

  function trocarImg(){
    _this.itens.style.left = "-"+_this.bannerAtual * 100+_this.unidade;
    indicadoresAtivos = _this.indicadores.getElementsByClassName('ativo');
    for (i of indicadoresAtivos) {
      i.setAttribute("class", "");
    }

    indicadorAtivo = _this.bannerAtual;
    if (_this.bannerAtual < 0) {
      indicadorAtivo = _this.numeroDeBanners - 1;
    }
    if (_this.bannerAtual >= _this.numeroDeBanners) {
      indicadorAtivo = 0;
    }

    _this.indicadores.children[indicadorAtivo].children[0].setAttribute("class", "ativo");
  }

  function criaClones(){
    for (var i = 0; i < _this.numeroDeBanners; i++) {
      clone = _this.itens.children[i].cloneNode(true);
      _this.itens.appendChild(clone);
    }
  }

  function iniciarLoop(){
    _this.loop = window.setInterval(function proximaCallBack(){
      _this.proxima();
    }, _this.tempo * 1000);
  };

  function pararLoop(){
    window.clearInterval(_this.loop);
  }

  function criaIndicadores(){
    for (var i = 0; i < _this.numeroDeBanners; i++) {
      divIndicador = document.createElement('div');
      aIndicador   = document.createElement('a');
      divIndicador.appendChild(aIndicador);
      _this.indicadores.appendChild(divIndicador);
      aIndicador.dataset.banner = i;
    }
    _this.indicadores.children[0].children[0].setAttribute("class", "ativo")
  }

  function registraEventosIndicadores(){
    for (var i = 0; i < _this.indicadores.children.length; i++) {
      indicador = _this.indicadores.children[i].children[0] ;
      indicador.addEventListener("click", function callBackIndicador( e ){
        pararLoop();

        if(_this.bannerAtual >= _this.numeroDeBanners){
          _this.itens.setAttribute("class", "itens notransition");
          _this.bannerAtual = 0;
          trocarImg();

          setTimeout(function() {
            _this.itens.setAttribute("class", "itens");
            _this.bannerAtual = e.target.dataset.banner;
            trocarImg();
            iniciarLoop();
          }, 0);

        }else{
          _this.itens.setAttribute("class", "itens");
          _this.bannerAtual = e.target.dataset.banner;
          trocarImg();
          iniciarLoop();
        }

      }, false);

    }
  }

  /*
  *  Ver o que fazer com isso no futuro
  */
  function arrastavel(){
    var f = function callBackClickItens(ee){
      diff = ee.x - xInicial;
      stringCss = "calc( -"+_this.bannerAtual * 100+_this.unidade+" + "+diff+"px)";
      _this.itens.style.left = stringCss;
    }
    _this.itens.addEventListener("mousedown", function callBackClickItens(e){
      diff = 0;

      if(_this.bannerAtual === _this.numeroDeBanners){
        _this.itens.setAttribute("class", "itens notransition");
        _this.bannerAtual = 0;
        trocarImg();
      }

      _this.itens.setAttribute("class", "itens notransition");
      pararLoop();
      xInicial = e.x;
      document.addEventListener("mousemove" ,f , false);
      //
    }, false);

    document.addEventListener("mouseup", function callBackClickItens(e){
      document.removeEventListener("mousemove",f , false);
      _this.itens.setAttribute("class", "itens");

      parte = document.documentElement.clientWidth / 6;

      if( Math.abs(diff) < parte ){
        trocarImg();
      }else if(diff > 0 ){
        if(_this.bannerAtual){
          _this.anterior();
        }else{
          trocarImg();
        }
      }else{
        _this.proxima();
      }

    }, false);
  }

  registraEventosSetas();

  criaIndicadores();

  registraEventosIndicadores();

  if(_this.infinito){
    criaClones();
  }

  iniciarLoop();

};
