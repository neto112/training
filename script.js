var calculateIMC = function () {
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const imc = weight / (((height / 100) * height) / 100);
  
    document.getElementById("imcNumero").innerHTML = "Seu IMC é: " + imc;
  
    if (imc < 18.5) {
      document.getElementById("result").innerHTML =
        name + ", você está muito magro!";
    } else if (imc >= 18.5 && imc <= 25) {
      document.getElementById(
        "result"
      ).innerHTML = `Puxa vida, ${name}! Você está muito gente boa!`;
    } else if (imc > 25 && imc <= 30) {
      document.getElementById("result").innerHTML = "Sobrepeso, cuidado " + name;
    } else {
      document.getElementById("result").innerHTML = name + ", Perigo! Obesidade";
    }
  };
  
  // pegamos o botão calcular do html
  const btnCalcular = document.getElementById("btn-calcular");
  // adicionamos um evento de clique nele
  // quando ele for clicado ele vai fazer alguma coisa
  // no caso ele chama a função de calcular imc
  btnCalcular.addEventListener("click", function () {
    calculateIMC();
  });
  
  // pegamos o input de peso
  const weightInput = document.getElementById("weight");
  // adicionamos um evento de mudança
  // quando ele mudar o valor, faz alguma coisa
  // esse alguma coisa é o que está dentro da function
  weightInput.onchange = function () {
    // pegar a div onde iremos incluir o valor do peso
    // que o usuário está escolhendo
    const weightValue = document.getElementById("weightValue");
    // colocamos o valor lá dentro
    weightValue.innerHTML = this.value;
  };
  
  const heightInput = document.getElementById("height");
  heightInput.onchange = function () {
    console.log("oi neto, o valor é " + this.value);
    const heightValue = document.getElementById("heightValue");
    heightValue.innerHTML = this.value;
  };