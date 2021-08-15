let cards = [
    {
      "imagem": "./Imagens/produtos/CamisasBasquete.jpg",
      "titulo": "Camisas Basquete",
      "preco": "",
      "link": "camisas-basquete.html"
    },
    {
      "imagem": "./Imagens/produtos/Camisas59/CamisaRealBlackPink.jpg",
      "titulo": "Camisas Futebol",
      "preco": "",
      "link": "camisas-time.html"
    },
    {
        "imagem": "./Imagens/produtos/CamisasMangaG/CamisaPSGColorida.jpg",
        "titulo": "Camisas de Frio Futebol",
        "preco": "",
        "link": "camisas-frio.html"
      },
  ];
  
  
  
  
  
  
  
  
 /*  function pagination (page, total, limit) {
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
    } */
  
    /* function getUrlVars(){
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
    let paginationResults = pagination(page, total, limit)*/
  
let cardHtml = '';
  
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let html = 
      '<div class="card">'+
        '<a href="'+card.link+'">'+'<img src="'+card.imagem+'" alt="produto">'+
        '<div class="precos-paragrafo">'+
          '<p>'+card.titulo+'</p>'+
          '<p>'+card.preco+'</p>'+
        '</div>'+'</a>'+
      '</div>';
  cardHtml += html;
}
  
  document.getElementById('cards').innerHTML = cardHtml;
  
   
  
    /* let paginationItens = '';
  
    for (let i = 0; i < paginationResults.pages; i++) {
      let pageActive = i+1;
      let active = page == pageActive?'active':'';
      paginationItens += '<a href="camisas.html?pagina='+pageActive+'" class="linkPaginacao '+active+'">'+pageActive+'</a>';
    }
  
    document.getElementById('pagination').innerHTML = paginationItens; */