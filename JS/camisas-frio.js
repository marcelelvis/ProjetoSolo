let cards = [
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaAtletico.jpg",
    "titulo": "Camisa Atletico",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaBarcelona.jpg",
    "titulo": "Camisa Barcelona",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaBlack.jpg",
    "titulo": "Camisa PSG",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaJuventus.jpg",
    "titulo": "Camisa juventus",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaManCity.jpg",
    "titulo": "Camisa Man. City",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaJuventusBlue.jpg",
    "titulo": "Camisa Juventus Azul",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaBarcelonaWhite.jpg",
    "titulo": "Camisa Barcelona W/B",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaPSG.jpg",
    "titulo": "Camisa PSG",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisarRealMadrid.jpg",
    "titulo": "Camisa Real Madrid",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaPSGColorida.jpg",
    "titulo": "Camisa PSG",
    "preco": "R$59,99",
    "link": "https://api.whatsapp.com/send?phone=5521982731542"
  },
  {
    "imagem": "./Imagens/produtos/CamisasMangaG/CamisaPSGWhite.jpg",
    "titulo": "Camisa PSG",
    "preco": "R$59,99",
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
      paginationItens += '<a href="camisas-frio.html?pagina='+pageActive+'" class="linkPaginacao '+active+'">'+pageActive+'</a>';
    }
  
    document.getElementById('pagination').innerHTML = paginationItens;