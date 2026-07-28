# Lernaufgabe: Hover-Drehung & Fehlerbehebung

Hier ist deine Checkliste, um den Fehler Schritt für Schritt selbst zu finden und zu beheben.

## 1. Syntax-Fehler im HTML finden und beheben
Manchmal blockieren kleine Schreibfehler im HTML das CSS der gesamten Seite.
- [ ] Öffne deine [index.html](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/index.html) und scrolle ganz nach unten zum `<footer>`.
- [ ] Schaue dir die Links (`<a>`-Tags) des zweiten Bildes genauer an:
  - Findest du den Unterschied zwischen den funktionierenden Links und den kaputten Links?
  - *Tipp:* Achte auf die Anführungszeichen (`"`) bei den Attributen `class` und `href`.
- [ ] Korrigiere die Fehler, sodass alle `<a>`-Tags korrekt geschlossen und aufgebaut sind.

## 2. CSS-Startzustand definieren
Manche Webbrowser können ein Element nicht weich drehen (`transition`), wenn sie nicht wissen, bei wie viel Grad die Drehung starten soll.
- [ ] Öffne deine [style.css](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/style.css) und suche nach der Klasse `.lenslaufImg`.
- [ ] Füge dort die Eigenschaft `transform` mit dem Startwert `rotateY(0deg)` hinzu.
- [ ] *(Optional aber empfohlen)*: Füge `display: inline-block;` hinzu, damit sich das Bild stabiler transformieren lässt.

## 3. Cache leeren und testen
Der Browser speichert deine CSS-Dateien im Speicher. Du musst ihn zwingen, die neuen CSS-Dateien zu laden.
- [ ] Lade die Seite neu mit einem Hard-Reload (**Strg + F5** oder **Strg + Shift + R**).
- [ ] Teste, ob sich das Bild dreht, wenn du mit der Maus über das Element fährst!
