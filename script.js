function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    console.log('Peso:', peso, 'Altura:', altura);

    if (peso > 0 && altura > 0) {
        if (altura > 3) {
            altura = altura / 100;
        }
        const imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)}`;
    } 
    else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
    }
}

