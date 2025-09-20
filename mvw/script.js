document.addEventListener('DOMContentLoaded', function () {
    const product = {
        nome: "Notebook",
        preco: 5000.99
    };

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(product.preco);

    document.getElementById('productName').textContent = product.nome;
    document.getElementById('productPrice').textContent = formattedPrice;
});