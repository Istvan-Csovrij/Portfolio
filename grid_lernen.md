# Lernaufgabe: CSS Grid im Header verwenden

Hier lernst du, wie du den Header von Flexbox auf **CSS Grid** umstellst.

## Was ist CSS Grid?
Im Gegensatz zu Flexbox (das meistens eindimensional arbeitet, also entweder als Zeile oder Spalte) ist **CSS Grid** ein zweidimensionales Layout-System (Spalten und Zeilen). Es eignet sich hervorragend, um feste Strukturen aufzubauen.

In deinem Header hast du zwei direkte Kinder:
1. Das `div` mit dem Titel `<h1>Bewerbung Istvan</h1>`.
2. Das `div` mit der Klasse `.workspace` (deine Buttons).

---

## Möglichkeit 1: Spalten definieren mit `grid-template-columns`
Dies ist die einfachste Art, ein Grid zu erstellen. Du sagst dem Header einfach, wie viele Spalten er haben soll und wie breit diese sind.

- [ ] Öffne deine [style.css](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/style.css).
- [ ] Ersetze den Code von `header` durch folgenden Grid-Code:

```css
header {
    color: white;
    border-bottom: 2px solid gray;
    box-shadow: 0px 7px 5px 0px lightgray;

    display: grid; /* Grid aktivieren */
    grid-template-columns: 1fr auto; /* 1. Spalte nimmt den restlichen Platz (1fr), 2. Spalte passt sich an (auto) */
    align-items: center; /* Vertikal zentrieren */
}
```

---

## Möglichkeit 2: Visuelle Bereiche mit `grid-template-areas` (Grid-Area)
Mit `grid-area` kannst du deinem Layout Namen geben und die Elemente visuell platzieren. Das ist besonders bei komplexen Layouts genial.

### Schritt 1: Dem Header-Container die Bereiche beibringen
- [ ] Ändere den `header` in deiner [style.css](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/style.css) so ab:

```css
header {
    color: white;
    border-bottom: 2px solid gray;
    box-shadow: 0px 7px 5px 0px lightgray;

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "titel navi"; /* Wir benennen die beiden Spalten */
    align-items: center;
}
```

### Schritt 2: Den HTML-Elementen ihre Bereiche zuweisen
Damit der Browser weiß, welches Element in welchen Bereich gehört, weisen wir ihnen die Namen zu:

- [ ] Gib dem `div` um das `<h1>` in deiner [index.html](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/index.html) eine Klasse:
  ```html
  <div class="headerTitel">
      <h1>Bewerbung Istvan </h1>
  </div>
  ```
- [ ] Weise diesem Titel in deiner [style.css](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/style.css) den Bereich zu:
  ```css
  .headerTitel {
      grid-area: titel;
  }
  ```
- [ ] Weise deiner Navigation `.workspace` in deiner [style.css](file:///c:/Users/Student/OneDrive%20-%20GFN%20GmbH%20%28EDU%29/Dokumente/Lebenslauf-Istvan/MyHomePage/style.css) den Bereich zu:
  ```css
  .workspace {
      grid-area: navi;
  }
  ```
