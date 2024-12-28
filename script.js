// Funzione che gestisce il successo della scansione del QR code
function onScanSuccess(decodedText, decodedResult) {
    // Controlliamo se il QR code è valido
    if (decodedText === "monopattino123") {
        document.getElementById("status").innerText = "Monopattino sbloccato! Buon viaggio!";
        // Simuliamo l'invio di un comando per sbloccare il monopattino
        unlockScooter();
    } else {
        document.getElementById("status").innerText = "QR code non valido! Riprova.";
    }
}

// Funzione per gestire errori
function onScanError(errorMessage) {
    console.warn(errorMessage);
}

// Funzione che simula lo sblocco del monopattino
function unlockScooter() {
    // Qui invieresti un comando per sbloccare il monopattino
    // Può essere una richiesta API a un server o un comando Bluetooth
    console.log("Comando di sblocco inviato al monopattino...");
}

// Inizializzare la scansione del QR code
const html5QrcodeScanner = new Html5QrcodeScanner(
    "preview", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);