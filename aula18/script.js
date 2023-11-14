function escondeFoto() {
    const foto = document.getElementById('foto');
    
    if( foto.style.visibility == 'hidden' ) {
        foto.style.visibility = '';
    } else {
        foto.style.visibility = 'hidden';
    }
}

function formataTexto() {
    const formato = document.getElementById('formato').value;
    const sobre = document.getElementById('sobre');

    sobre.style.textAlign = formato;

}


function alteraCor() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const cor = document.getElementById('cor').value;

    header.style.color = '';
    footer.style.color = '';

    if( cor == 'black' ) {
        header.style.color = 'white';
        footer.style.color = 'white';
    }

    if( cor == 'white' ) {
        header.style.color = 'black';
        footer.style.color = 'black';
    }

    header.style.backgroundColor = cor;
    footer.style.backgroundColor = cor;


}


function alteraFonte() {
    const font = document.getElementById('font').value;
    const sobre = document.getElementById('sobre');

    sobre.style.fontFamily = font;

}


function modo() {
    const conteudo = document.getElementById('conteudo');

    if( conteudo.style.backgroundColor == 'black' ) {
        conteudo.style.backgroundColor = 'white';
        conteudo.style.color = 'black';
    } else {
        conteudo.style.backgroundColor = 'black';
        conteudo.style.color = 'white';
    }
}

