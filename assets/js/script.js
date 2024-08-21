document.getElementById("play").onclick = function(){
    playgame();
}

function playgame() {
    let shoot = parseInt(prompt('¿Cuántas veces te gustaría jugar?:'));

    for (let i = 0; i < shoot; i++) {
        let moveuser = parseInt(prompt('Elige tu movimiento: 0 para Piedra, 1 para Papel, 2 para Tijeras:'), 10);
        while (![0, 1, 2].includes(moveuser)) {
            moveuser = parseInt(prompt('Opción inválida. Elige entre 0 para Piedra, 1 para Papel, 2 para Tijeras:'), 10);
        }

        const movemachine = gamemachine();
        const result = winner(moveuser, movemachine);

        const motion = ['Piedra', 'Papel', 'Tijeras'];
        alert(`Tu movimiento: ${motion[moveuser]}\nMovimiento de la máquina: ${motion[movemachine]}\nresult: ${result === 'empate' ? '¡Es un empate!' : result === 'user' ? '¡Felicidades, ganaste!' : 'Lo siento, perdiste.'}`);
    }
}

function gamemachine() {
    const opciones = [0, 1, 2];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function winner(user, machine) {
    if (user === machine) {
        return 'empate';
    }
    if (
        (user === 0 && machine === 2) ||  
        (user === 1 && machine === 0) ||  
        (user === 2 && machine === 1)     
    ) {
        return 'user';
    }
    return 'machine';
}





