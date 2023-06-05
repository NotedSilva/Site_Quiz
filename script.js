function verificarRespostas() {
    let acertos = 0;
    
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    if (q1 === '1') {
      acertos++;
    }
    
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    if (q2 === '1') {
      acertos++;
    }
    
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    if (q3 === '3') {
        acertos++;
    }

    const q4 = document.querySelector('input[name="q4"]:checked').value;
    if (q4 === '3') {
        acertos++;
    }

    const q5 = document.querySelector('input[name="q5"]:checked').value;
    if (q5 === '3') {
        acertos++;
    }

    const q6 = document.querySelector('input[name="q6"]:checked').value;
    if (q6 === '2') {
        acertos++;
    }

    const q7 = document.querySelector('input[name="q7"]:checked').value;
    if (q7 === '4') {
        acertos++;
    }

    const q8 = document.querySelector('input[name="q8"]:checked').value;
    if (q8 === '2') {
        acertos++;
    }

    const q9 = document.querySelector('input[name="q9"]:checked').value;
    if (q9 === '4') {
        acertos++;
    }

    const q10 = document.querySelector('input[name="q10"]:checked').value;
    if (q10 === '4') {
        acertos++;
    }


    if (acertos === 10){
        document.body.innerHTML+='<img id=minions src=minions.gif>'
    }

    if (acertos <= 9) {
        document.body.innerHTML+='<h2 class=cores id=cor1 >Você Acertou '+ acertos + ' de 10 Perguntas!</h2>'
        document.getElementById('cor1').style.color='green'
    } 

    if (acertos <= 6) {
        document.body.innerHTML+='<h2 class=cores id=cor2 >Você Acertou '+ acertos + ' de 10 Perguntas!</h2>'
        document.getElementById('cor2').style.color='orange'
    } 

    if (acertos <= 3) {
        document.body.innerHTML+='<h2 class=cores id=cor3 >Você Acertou '+ acertos + ' de 10 Perguntas!</h2>'
        document.getElementById('cor3').style.color='red'
    } 

  }