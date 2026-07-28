// Findet den Platzhalter im HTML anhand seiner ID
const placeholder = document.getElementById('datumPlaceholder');

// Holt das aktuelle Datum vom Computer des Besuchers
const heute = new Date();

// Formatiert das Datum auf Deutsch (Tag.Monat.Jahr)
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formatiert = heute.toLocaleDateString('de-DE', options);

// Schreibt das formatierte Datum in den Platzhalter
placeholder.textContent = formatiert;