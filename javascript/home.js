

const botaomenu = window.document.getElementById('btn-menu')

botaomenu.addEventListener('click', function menubar(){
    const menu = window.document.getElementById('menu');
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display ='none'
    }
})


const botaocarrinho = window.document.getElementById('btn-carrinho')

botaocarrinho.addEventListener('click', function carrinho(){
    location.href = 'carrinho-compras.html'
})
