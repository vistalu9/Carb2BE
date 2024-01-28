// berechneInsulin.js

function berechneInsulin() {
    // Kohlenhydrate in Gramm
    const carbs = parseFloat(document.getElementById('carbs').value);

    // Insulin-Faktor
    const insulinFaktor = parseFloat(document.getElementById('insulinFactor').value);

    if (isNaN(carbs) || isNaN(insulinFaktor)) {
        alert('Bitte geben Sie gültige Werte ein.');
        return;
    }

    // Berechnung der Broteinheiten (BE)
    const be = carbs / 12; // Annahme: 1 BE entspricht 12g Kohlenhydrate

    // Berechnung der Insulinmenge
    const insulinMenge = be * insulinFaktor;

    // Ergebnis anzeigen
    const ergebnisElement = document.getElementById('ergebnis');
    ergebnisElement.innerHTML = `<p>Kohlenhydrate: ${carbs} g</p>`;
    ergebnisElement.innerHTML += `<p>Broteinheiten (BE): ${be.toFixed(2)}</p>`;
    ergebnisElement.innerHTML += `<p>Insulinmenge: ${insulinMenge.toFixed(2)} Einheiten</p>`;
}