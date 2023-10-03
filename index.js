let fome = 100;
        let felicidade = 100;
        let intervalId;

        function atualizarStatus() {
            document.getElementById("fome").textContent = fome;
            document.getElementById("felicidade").textContent = felicidade;
        }

        function encerrarJogo() {
            clearInterval(intervalId);
            document.getElementById("fome").textContent = 0;
            document.getElementById("felicidade").textContent = 0;
            alert("Tamagochi morreu");

            document.querySelector(".button-container").innerHTML = "";
        }

        function verificarStatus() {
            if (fome <= 0 || felicidade <= 0 || fome >= 500 || felicidade >= 500) {
                encerrarJogo();
            }
        }

        function alimentar() {
            if (fome > 0 && felicidade > 0) {
                fome += 10;
                atualizarStatus();
                verificarStatus();
            } else {
                encerrarJogo();
            }
        }

        function brincar() {
            if (fome > 0 && felicidade > 0) {
                felicidade += 10;
                atualizarStatus();
                verificarStatus();
            } else {
                encerrarJogo();
            }
        }

        intervalId = setInterval(function() {
            if (fome > 0 && felicidade > 0) {
                fome -= 5;
                felicidade -= 5;
                atualizarStatus();
                verificarStatus();
            } else {
                encerrarJogo();
            }
        }, 1000);