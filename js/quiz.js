function calcular() {
    
    var pontos = 0

    var pontosGrafico = []

    // Resposta 1
    const resposta1 = document.querySelector('input[name="1"]:checked');    
    if (resposta1 && resposta1.value === "16") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);

    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 2
    const resposta2 = document.querySelector('input[name="2"]:checked');    
    if (resposta2 && resposta2.value === "roxa") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 3
    const resposta3 = document.querySelector('input[name="3"]:checked');    
    if (resposta3 && resposta3.value === "braco") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 4
    const resposta4 = document.querySelector('input[name="4"]:checked');    
    if (resposta4 && resposta4.value === "sair") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 5
    const resposta5 = document.querySelector('input[name="5"]:checked');    
    if (resposta5 && resposta5.value === "joelho") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 6
    const resposta6 = document.querySelector('input[name="6"]:checked');    
    if (resposta6 && resposta6.value === "costas") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 7
    const resposta7 = document.querySelector('input[name="7"]:checked');    
    if (resposta7 && resposta7.value === "finalizacao_braco") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 8
    const resposta8 = document.querySelector('input[name="8"]:checked');    
    if (resposta8 && resposta8.value === "jiu_jitsu") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 9
    const resposta9 = document.querySelector('input[name="9"]:checked');    
    if (resposta9 && resposta9.value === "luta_agarramento") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }

    // Resposta 10
    const resposta10 = document.querySelector('input[name="10"]:checked');    
    if (resposta10 && resposta10.value === "azul") {
        console.log('Acertou');
        pontos++;
        pontosGrafico.push(pontos);
    } else {
        console.log('Errou');
        pontosGrafico.push(pontos);
    }
    localStorage.setItem("pontuacaoQuiz", pontos);
    localStorage.setItem('graficoQuiz', JSON.stringify(pontosGrafico));

    window.location.href = "../html/telaResultado.html"; // Caminho relativo correto
  
    
}
