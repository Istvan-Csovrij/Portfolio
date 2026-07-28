/* Steuerung der Projektdarstellung auf der Startseite */

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".projektKarte");
    const welcomeText = document.querySelector(".welcomeProjectText");

    // Funktion, die den Inhalt basierend auf dem aktuellen Link-Hash steuert
    function updateProjectView() {
        const hash = window.location.hash;

        if (hash) {
            // 1. Alle Karten ausblenden
            cards.forEach(card => card.style.display = "none");
            
            // 2. Willkommenstext ausblenden
            if (welcomeText) welcomeText.style.display = "none";

            // 3. Die ausgewählte Karte einblenden
            const targetCard = document.querySelector(hash);
            if (targetCard) {
                targetCard.style.display = "block";
            }
        } else {
            // Wenn kein Hash in der URL steht, zeige den Willkommenstext und verstecke alle Karten
            cards.forEach(card => card.style.display = "none");
            if (welcomeText) welcomeText.style.display = "block";
        }
    }

    // Beim Laden der Seite prüfen, ob bereits ein Hash in der URL steht
    updateProjectView();

    // Auf Änderungen des Hashes (Klicks in der Seitenleiste) reagieren
    window.addEventListener("hashchange", updateProjectView);
});
