function Desafioum() {
    const texto = document.querySelector("h1");
    const X = parseInt(document.getElementById("X").value);
    const Y = parseInt(document.getElementById("Y").value);

    if (X < 0 || Y < 0 || X > 432 || Y > 468) {
        texto.innerHTML = "Fora";
    }
    else {
        texto.innerHTML = "Dentro";
    }
}
function Desafiodois() {

    const texto = document.querySelector("h1");
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);

    if (a >= b && a <= c || a >= c && a <= b) {
        texto.innerHTML = "A pessoa que venceu teve " + a + " pontos";
    }

    else if (b >= a && b <= c || b >= c && b <= a) {
        texto.innerHTML = "A pessoa que venceu foi " + b + " pontos";
    }

    else if (c >= b && c <= a || c >= a && c <= b) {
        texto.innerHTML = "A pessoa que venceu foi " + c + " pontos";
    }
}

function Desafiotres() {
    const texto = document.querySelector("h1");
    var a = document.getElementById("alice").value;
    var b = document.getElementById("beto").value;
    var c = document.getElementById("clara").value;

    if ((a != b) && (a != c)) {

        texto.innerHTML = "Alice ganhou o jogo";
    }
    else if ((b != a) && (b != c)) {
        texto.innerHTML = "Beto ganhou o jogo";

    }
    else if ((c != a) && (c != b)) {
        texto.innerHTML = "Clara ganhou o jogo";

    }
    else {
        texto.innerHTML = "Ninguém ganhou o jogo";

    }
}
