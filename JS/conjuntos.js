let cards = [
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoBorussia.jpg",
    "titulo": "Conjunto B. Dortmud",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoBW.jpg",
    "titulo": "Conjunto PSG",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoFlamengo.jpg",
    "titulo": "Conjunto Flamengo",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoManCity.jpg",
    "titulo": "Conjunto Man. City",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoChelse.jpg",
    "titulo": "Conjunto Chelse",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoNikeCinza.jpg",
    "titulo": "Conjunto Nike Corta Vento",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoNikeCinza2.jpg",
    "titulo": "Conjunto Nike Moletom",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/conjuntos/ConjuntoPSG.jpg",
    "titulo": "Conjunto PSG",
    "preco": "R$249,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
   
  ];
  
  
  
  
  
  
  
  
  function pagination (page, total, limit) {
      var pageSize = Math.ceil(total/limit);
  
      var _pagination = {
          page: page,
          total: total,
          limit: limit,
          pages: pageSize
        };
  
      if(page > 1){
        var prev = page-1;
        _pagination.previous = prev;
      }
  
      var remaining = total - (page * limit);
  
      if(remaining > 0){
          _pagination.next = page + 1;
      }
  
      return _pagination;
    }
  
    function getUrlVars(){
      let vars = {};
      let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value){
          vars[key] = value;
      });
      return vars;
  }
  
    var array = cards;
    var pageQuery = getUrlVars()["pagina"];
    var page = parseInt(pageQuery) || 1;
    var limit = 10;
    var offset = (page - 1) * limit;
    var total = array.length;
    var items = array.slice(offset, offset+limit);
    let paginationResults = pagination(page, total, limit)
  
    let cardHtml = '';
  
  for (let i = 0; i < items.length; i++) {
    let card = items[i];
    let html = 
        '<div class="card">'+
        '<a href="'+card.link+'">'+'<img src="'+card.imagem+'" alt="produto">'+
          '<div class="precos-paragrafo">'+
            '<p>'+card.titulo+'</p>'+
            '<p>'+card.preco+'</p>'+
          '</div>'+'<a/>'+
        '</div>';
    cardHtml += html;
  }
  
  document.getElementById('cards').innerHTML = cardHtml;
  
   
  
    let paginationItens = '';
  
    for (let i = 0; i < paginationResults.pages; i++) {
      let pageActive = i+1;
      let active = page == pageActive?'active':'';
      paginationItens += '<a href="conjuntos.html?pagina='+pageActive+'" class="linkPaginacao '+active+'">'+pageActive+'</a>';
    }
  
    document.getElementById('pagination').innerHTML = paginationItens;