function calcularSalida() {
    debugger
    let horaEntrada = parseInt(document.getElementById("horaEntrada").value);
    let minutosEntrada = parseInt(document.getElementById("minutosEntrada").value);
    console.log('Entrada H/m',horaEntrada,'/',minutosEntrada);

    let horaSalida = parseInt(document.getElementById("horaSalida").value);
    let minutosSalida = parseInt(document.getElementById("minutosSalida").value);
    console.log('Salida H/m',horaSalida,'/',minutosSalida);


    let tiempoComida =60- parseInt(document.getElementById("tiempoComida").value);
    console.log('Comida',tiempoComida);

    if (!isNaN(horaEntrada) && !isNaN(minutosEntrada) && !isNaN(tiempoComida)) {
        let salidaPrevista = new Date();
        salidaPrevista.setHours(horaSalida);
        salidaPrevista.setMinutes(minutosSalida - tiempoComida);

        let salidaFinal = salidaPrevista.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        console.log('salida',salidaFinal);
        document.getElementById("resultado").innerText = "Hora final de salida: " + salidaFinal;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa todos los datos correctamente.";
    }
}
calcularSalida();