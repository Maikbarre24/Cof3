// Funzione che gestisce il successo della scansione del QR code
function onScanSuccess(decodedText, decodedResult) {
    console.log(`Codice QR scansionato: ${decodedText}`);

    // Controlliamo se il QR code è valido
    if (decodedText === "monopattino123") {
        document.getElementById("status").innerText = "Monopattino sbloccato! Buon viaggio!";
        unlockScooter();
    } else {
        document.getElementById("status").innerText = "QR code non valido! Riprova.";
    }
}

// Funzione per gestire errori durante la scansione
function onScanError(errorMessage) {
    console.warn(`Errore nella scansione: ${errorMessage}`);
}

// Funzione che simula lo sblocco del monopattino
function unlockScooter() {
    console.log("Comando di sblocco inviato al monopattino...");
    // Qui puoi aggiungere una chiamata API o altra logica per comunicare con il monopattino
}

// Inizializzare la scansione del QR code
const html5QrcodeScanner = new Html5QrcodeScanner(
    "preview-container", { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess, onScanError);
