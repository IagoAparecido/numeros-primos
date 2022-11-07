const botao = document.getElementById("btn");

botao.onclick = () => {
  function primo(i) {
    for (var divisor = 2; divisor < i; divisor++)
      if (i % divisor == 0) return false;
    return true;
  }
  for (var i = 0; i < 100; i++) {
    if (primo(i)) {
      var num = i;
      var td;
      var modoLinha = document.getElementById("linha");

      for (j = 0; j < num; j++) {
        td = document.createElement("td");
        num = document.createTextNode(num);

        td.appendChild(num);
        modoLinha.appendChild(td);
      }
    }
  }
};
