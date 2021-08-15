let cards = [
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaLakers.jpg",
      "titulo": "Camisa Lakers",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaCeltics.jpg",
      "titulo": "Camisa Celtics",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaCharlotte.jpg",
      "titulo": "Camisa charlotte's",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaChicacoBulls.jpg",
      "titulo": "Camisa Chicaco Bulls",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaNets.jpg",
      "titulo": "Camisa Brooklyn Nets",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaOrlando.jpg",
      "titulo": "Camisa Orlando",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaPhiladelphia.jpg",
      "titulo": "Camisa Philadelphia",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaToronto.jpg",
      "titulo": "Camisa Toronto",
      "preco": "R$39,99",
      "link": "https://api.whatsapp.com/send?phone=5521982731542"
    },
    {
      "imagem": "./Imagens/produtos/CamisasBasquete/CamisaWarriors.jpg",
      "titulo": "Camisa Warriors",
      "preco": "R$39,99",
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
      paginationItens += '<a href="camisas-basquete.html?pagina='+pageActive+'" class="linkPaginacao '+active+'">'+pageActive+'</a>';
    }
  
    document.getElementById('pagination').innerHTML = paginationItens;