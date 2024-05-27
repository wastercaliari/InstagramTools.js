function clicarBotaoEContinuar() {
    // Seleciona o elemento <div> que contém o SVG com a classe especificada
    const botoes = document.querySelectorAll('div.x6s0dn4.x78zum5.xdt5ytf.xl56j7k');

    let botaoEncontrado = false;

    botoes.forEach((botao) => {
        const svg = botao.querySelector('svg.x1lliihq.x1n2onr6.xyb1xck');
        if (svg) {
            botao.click();
            console.log('Botão clicado!');
            botaoEncontrado = true;
            return;
        }
    });

    if (!botaoEncontrado) {
        console.log('Nenhum botão encontrado!');
    } else {
        // Rola a página para baixo somente se um botão foi clicado
        window.scrollBy(0, window.innerHeight);
    }

    // Aguarda 2 segundos antes de tentar novamente
    setTimeout(clicarBotaoEContinuar, 2000);
}

// Inicia o processo
clicarBotaoEContinuar();
