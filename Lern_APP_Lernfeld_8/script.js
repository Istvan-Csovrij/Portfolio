const kartenDaten = [
    {
        "title": "Projektstart (Initiierung)",
        "textVertical": "Geburtsphase eines Projekts.",
        "textHorizontal": "In dieser Phase wird entschieden, ob ein Projekt sinnvoll ist und gestartet wird.",
        "ptext": "Der Projektstart, auch Initiierung genannt, ist die erste Phase im Projektmanagement. Hier wird geklärt, warum ein Projekt existiert, welches Problem es lösen soll und ob es wirtschaftlich sowie strategisch sinnvoll ist. Erst wenn der Nutzen bewertet und das Projekt offiziell genehmigt wurde, darf mit der detaillierten Planung begonnen werden."
    },
    {
        "title": "Bedarf- und Nutzenbewertung",
        "textVertical": "Prüfung der Projektidee.",
        "textHorizontal": "Entscheider bewerten Sinn, Nutzen und Wirtschaftlichkeit.",
        "ptext": "Bevor ein Projekt gestartet wird, prüfen Entscheider wie Geschäftsführung oder Abteilungsleiter den Bedarf und Nutzen. Dabei wird analysiert, ob ein reales Problem existiert, welchen Mehrwert das Projekt bringt, ob es wirtschaftlich tragfähig ist und ob es die Unternehmensziele unterstützt. Nur bei positiver Bewertung wird das Projekt initiiert."
    },
    {
        "title": "Projektinitiierung",
        "textVertical": "Offizieller Start eines Projekts.",
        "textHorizontal": "Das Projekt wird genehmigt und grob definiert.",
        "ptext": "In der Initiierungsphase wird das Projekt offiziell gestartet. Der Auftraggeber oder Sponsor entscheidet verbindlich, dass das Projekt durchgeführt wird. Erste grobe Ziele, Rahmenbedingungen und Grenzen werden festgelegt, um eine gemeinsame Basis für alle Beteiligten zu schaffen."
    },
    {
        "title": "Projektleitung benennen",
        "textVertical": "Zentrale Verantwortung festlegen.",
        "textHorizontal": "Der Projektleiter steuert und überwacht das Projekt.",
        "ptext": "Ein Projektleiter wird benannt und trägt die Gesamtverantwortung für das Projekt. Zu seinen Aufgaben gehören die Planung, Steuerung und Überwachung sowie die Kommunikation mit Auftraggebern und Stakeholdern. Ohne eine klar benannte Projektleitung fehlt die eindeutige Zuständigkeit."
    },
    {
        "title": "Projektteam zusammenstellen",
        "textVertical": "Richtige Personen auswählen.",
        "textHorizontal": "Das Team führt das Projekt operativ durch.",
        "ptext": "Der Projektleiter stellt gemeinsam mit den Entscheidern ein Projektteam zusammen. Dieses besteht aus Fachleuten unterschiedlicher Bereiche, wie Entwickler, Designer oder Tester. Das Team ist für die praktische Umsetzung der Projektaufgaben verantwortlich."
    },
    {
        "title": "Projektauftrag",
        "textVertical": "Offizielle Projektfreigabe.",
        "textHorizontal": "Zentrales Dokument des Projektstarts.",
        "ptext": "Der Projektauftrag, auch Project Charter genannt, ist das wichtigste Dokument im Projektstart. Er enthält Ziele, Inhalte, Budget, Zeitrahmen, Verantwortlichkeiten, Risiken sowie Auftraggeber und Projektleiter. Mit der Genehmigung dieses Dokuments startet das Projekt offiziell."
    },
    {
        "title": "Projektziele und Scope",
        "textVertical": "Klare Zieldefinition.",
        "textHorizontal": "Festlegung von Zielen, Anforderungen und Abgrenzungen.",
        "ptext": "Bevor die Planung beginnt, müssen die Projektziele eindeutig definiert werden. Es wird festgelegt, was erreicht werden soll, welche Anforderungen gelten und was ausdrücklich nicht zum Projekt gehört. Gute Projektziele sind SMART: spezifisch, messbar, attraktiv, realistisch und terminiert."
    },
    {
        "title": "Kick-off-Meeting",
        "textVertical": "Offizieller Projektauftakt.",
        "textHorizontal": "Gemeinsamer Start aller Beteiligten.",
        "ptext": "Das Kick-off-Meeting ist das erste offizielle Treffen des Projektteams. Dabei werden Projektziele, Auftrag, Rollen, Kommunikationsregeln und erste Zeitpläne vorgestellt. Ziel ist, dass alle Beteiligten wissen, worum es geht, wer welche Aufgaben hat und wie zusammengearbeitet wird."
    },
    {
        "title": "Projektplanung",
        "textVertical": "Vorbereitung der Umsetzung.",
        "textHorizontal": "Planung von Aufgaben, Zeit, Kosten und Risiken.",
        "ptext": "In der Projektplanung wird festgelegt, wie das Projekt umgesetzt wird. Dazu gehören Aufgabenverteilung, Terminplanung, Ressourcen- und Budgetplanung sowie eine Risikoanalyse. Eine gute Planung bildet die Grundlage für eine erfolgreiche Projektdurchführung."
    },
    {
        "title": "Projektdurchführung",
        "textVertical": "Praktische Umsetzung.",
        "textHorizontal": "Das Team arbeitet an den geplanten Aufgaben.",
        "ptext": "In der Projektdurchführung werden die geplanten Arbeitspakete umgesetzt. Das Projektteam arbeitet aktiv an den Aufgaben, während der Projektleiter für Kommunikation, Koordination und Motivation sorgt. Regelmäßige Meetings helfen, den Fortschritt zu überwachen."
    },
    {
        "title": "Projektkontrolle",
        "textVertical": "Überwachung des Projektverlaufs.",
        "textHorizontal": "Vergleich von Planung und Realität.",
        "ptext": "In der Projektkontrolle wird regelmäßig überprüft, ob Zeitplan, Budget, Qualität und Ziele eingehalten werden. Abweichungen werden frühzeitig erkannt, sodass Gegenmaßnahmen eingeleitet werden können. Planung und Kontrolle laufen während des Projekts parallel."
    },
    {
        "title": "Projektabschluss",
        "textVertical": "Formelles Projektende.",
        "textHorizontal": "Übergabe, Abnahme und Auswertung.",
        "ptext": "Der Projektabschluss beendet das Projekt offiziell. Ergebnisse werden an Kunden oder Anwender übergeben, eine Abnahme erfolgt und die Abschlussdokumentation wird erstellt. In den Lessons Learned reflektiert das Team Erfahrungen, um zukünftige Projekte zu verbessern."
    },
    {
        "title": "UML (Unified Modeling Language)",
        "textVertical": "UML ist eine standardisierte grafische Sprache zur Modellierung, Planung und Dokumentation von Softwaresystemen.",
        "textHorizontal": "UML: grafische Modellierungssprache zur Beschreibung der Struktur und des Verhaltens von Softwaresystemen.",
        "ptext": "UML (Unified Modeling Language) ist eine standardisierte grafische Modellierungssprache, die verwendet wird, um Softwaresysteme zu visualisieren, zu entwerfen und zu dokumentieren. Sie hilft Entwicklern, komplexe Systeme zu verstehen, indem sie deren Struktur und Verhalten in Diagrammen darstellt. UML eignet sich besonders für objektorientierte Softwareentwicklung und verbessert die Kommunikation zwischen Entwicklern, Analysten und Stakeholdern."
    },
    {
        "title": "UML-Notation",
        "textVertical": "UML verwendet standardisierte Symbole zur Darstellung von Klassen, Attributen, Methoden und Beziehungen.",
        "textHorizontal": "Die UML-Notation definiert Symbole für Klassen, Sichtbarkeit und Beziehungen in Diagrammen.",
        "ptext": "Die UML-Notation besteht aus standardisierten grafischen Symbolen, die eine klare und einheitliche Darstellung von Softwaremodellen gewährleisten. Eine Klasse wird als Rechteck dargestellt, das in Name, Attribute und Methoden unterteilt ist. Die Sichtbarkeit wird durch Symbole wie public (+), private (-) und protected (#) angezeigt. Beziehungen wie Assoziation, Vererbung, Aggregation, Komposition und Abhängigkeit beschreiben, wie Klassen miteinander verbunden sind."
    },
    {
        "title": "UML-Diagrammtypen",
        "textVertical": "UML-Diagramme werden in Struktur- und Verhaltensdiagramme unterteilt.",
        "textHorizontal": "Zwei Hauptgruppen: Strukturdiagramme zeigen Architektur, Verhaltensdiagramme zeigen Prozesse.",
        "ptext": "UML definiert verschiedene Diagrammtypen, die in Strukturdiagramme und Verhaltensdiagramme unterteilt sind. Strukturdiagramme beschreiben die statische Architektur eines Systems, während Verhaltensdiagramme sich auf dynamische Prozesse, Interaktionen und Zustandsänderungen konzentrieren. Diese Trennung hilft Entwicklern, sowohl die Konstruktion als auch die Funktionalität von Softwaresystemen zu analysieren."
    },
    {
        "title": "Strukturdiagramme",
        "textVertical": "Strukturdiagramme beschreiben die statische Struktur und Komponenten eines Systems.",
        "textHorizontal": "Zeigen Klassen, Objekte, Komponenten und ihre Beziehungen.",
        "ptext": "Strukturdiagramme veranschaulichen, wie ein Softwaresystem aufgebaut ist. Sie repräsentieren Klassen, Objekte, Komponenten und Deployment-Umgebungen sowie die Beziehungen zwischen ihnen. Wichtige Strukturdiagramme sind Klassendiagramme, Objektdiagramme, Komponentendiagramme und Deployment-Diagramme. Sie sind entscheidend für das Verständnis der Systemarchitektur und des objektorientierten Designs."
    },
    {
        "title": "Klassendiagramm",
        "textVertical": "Klassendiagramme zeigen Klassen, Attribute, Methoden und Beziehungen.",
        "textHorizontal": "Wichtigstes UML-Diagramm für objektorientierte Programmierung.",
        "ptext": "Das Klassendiagramm ist das wichtigste UML-Diagramm in der objektorientierten Softwareentwicklung. Es beschreibt Klassen mit ihren Attributen und Methoden und zeigt Beziehungen wie Vererbung, Assoziation, Aggregation und Komposition. Klassendiagramme dienen als Vorlage für die Implementierung von Softwaresystemen und sind besonders prüfungsrelevant."
    },
    {
        "title": "Objektdiagramm",
        "textVertical": "Objektdiagramme zeigen konkrete Instanzen von Klassen zu einem bestimmten Zeitpunkt.",
        "textHorizontal": "Momentaufnahme realer Objekte anstelle von Klassenvorlagen.",
        "ptext": "Ein Objektdiagramm stellt einen Schnappschuss eines Systems zu einem bestimmten Zeitpunkt dar. Es zeigt konkrete Objekte (Instanzen von Klassen) mit ihren Attributwerten. Objektdiagramme helfen, besser zu verstehen, wie Klassendiagramme in der Praxis angewendet werden und wie Objekte zur Laufzeit interagieren."
    },
    {
        "title": "Komponentendiagramm",
        "textVertical": "Komponentendiagramme modellieren Softwarekomponenten und deren Abhängigkeiten.",
        "textHorizontal": "Zeigen Module, Pakete und Schnittstellen eines Systems.",
        "ptext": "Komponentendiagramme beschreiben die hochrangige Organisation eines Softwaresystems. Sie zeigen, wie Softwarekomponenten, Module oder Pakete strukturiert sind und wie sie voneinander abhängen. Dieser Diagrammtyp ist besonders nützlich für große Systeme und geschichtete Architekturen."
    },
    {
        "title": "Deployment-Diagramm",
        "textVertical": "Deployment-Diagramme zeigen Hardware- und Laufzeitumgebungen.",
        "textHorizontal": "Beschreiben, wo und wie Softwarekomponenten bereitgestellt werden.",
        "ptext": "Ein Deployment-Diagramm stellt die physische Verteilung eines Softwaresystems dar. Es zeigt Hardwareknoten wie Server, Clients oder Geräte und wie Softwarekomponenten auf diesen bereitgestellt werden. Deployment-Diagramme sind wichtig, um die Systeminfrastruktur und Client-Server-Architekturen zu verstehen."
    },
    {
        "title": "Verhaltensdiagramme",
        "textVertical": "Verhaltensdiagramme beschreiben dynamische Prozesse und Interaktionen.",
        "textHorizontal": "Zeigen Arbeitsabläufe, Kommunikation und Zustandsänderungen.",
        "ptext": "Verhaltensdiagramme konzentrieren sich darauf, wie ein System während der Ausführung funktioniert. Sie modellieren Arbeitsabläufe, Interaktionen zwischen Objekten und Zustandsänderungen. Diese Diagramme helfen Entwicklern, Systemlogik, Kontrollfluss und Benutzerinteraktionen zu verstehen."
    },
    {
        "title": "Use-Case-Diagramm",
        "textVertical": "Use-Case-Diagramme zeigen Systemfunktionen und Benutzerinteraktionen.",
        "textHorizontal": "Beschreiben, was ein System tut und wer es benutzt.",
        "ptext": "Use-Case-Diagramme stellen die funktionalen Anforderungen eines Systems dar. Sie zeigen Akteure (Benutzer oder externe Systeme) und Anwendungsfälle, die die Systemfunktionalität beschreiben. Use-Case-Diagramme sind entscheidend für die Anforderungsanalyse und die Kommunikation mit nicht-technischen Stakeholdern."
    },
    {
        "title": "Sequenzdiagramm",
        "textVertical": "Sequenzdiagramme zeigen Nachrichtenfluss über die Zeit.",
        "textHorizontal": "Beschreiben Objektinteraktionen in chronologischer Reihenfolge.",
        "ptext": "Sequenzdiagramme veranschaulichen, wie Objekte durch Nachrichtenaustausch in einer bestimmten Reihenfolge interagieren. Die Zeit verläuft von oben nach unten, was die Verständlichkeit von Prozessabläufen und Methodenaufrufen erleichtert. Sie sind besonders nützlich zur Analyse und Gestaltung komplexer Interaktionen."
    },
    {
        "title": "Aktivitätsdiagramm",
        "textVertical": "Aktivitätsdiagramme modellieren Arbeitsabläufe und Prozesslogik.",
        "textHorizontal": "Ähnlich wie Flussdiagramme für Geschäfts- und Systemprozesse.",
        "ptext": "Ein Aktivitätsdiagramm stellt den Ablauf von Aktivitäten innerhalb eines Systems dar. Es ähnelt einem Flussdiagramm und wird oft verwendet, um Geschäftsprozesse, Algorithmen oder Benutzerabläufe zu modellieren. Aktivitätsdiagramme helfen, Entscheidungspunkte, parallele Prozesse und Prozesssequenzen zu identifizieren."
    },
    {
        "title": "Zustandsdiagramm",
        "textVertical": "Zustandsdiagramme zeigen Objektzustände und Übergänge.",
        "textHorizontal": "Modellieren Lebenszyklus und Verhalten basierend auf Zuständen.",
        "ptext": "Zustandsdiagramme, auch Zustandsautomaten genannt, beschreiben die verschiedenen Zustände, in denen sich ein Objekt befinden kann, und die Übergänge zwischen diesen Zuständen. Sie sind besonders nützlich für Systeme mit klar definierten Zuständen, wie z. B. Auftragsbearbeitung, Workflows oder Steuerungssysteme."
    },
    {
        "title": "Paketdiagramm",
        "textVertical": "Paketdiagramme organisieren Modellelemente in Paketen.",
        "textHorizontal": "Zeigen Paketstruktur und Abhängigkeiten.",
        "ptext": "Ein Paketdiagramm gruppiert zusammengehörige UML-Elemente in Paketen und zeigt Abhängigkeiten zwischen ihnen. Es hilft, große Systeme zu strukturieren, indem Klassen, Komponenten oder andere Elemente in logische Einheiten organisiert werden. Paketdiagramme verbessern die Übersichtlichkeit und Wartbarkeit komplexer Softwareprojekte."
    },
    {
        "title": "Kompositstrukturdiagramm",
        "textVertical": "Kompositstrukturdiagramme zeigen die interne Struktur von Klassen oder Komponenten.",
        "textHorizontal": "Beschreiben interne Teile und Zusammenarbeiten.",
        "ptext": "Kompositstrukturdiagramme beschreiben die interne Struktur eines Klassifizierers wie einer Klasse oder Komponente. Sie zeigen Teile, Ports und deren Beziehungen, wobei der Fokus auf interner Zusammenarbeit liegt. Dieses Diagramm ist nützlich, um komplexe interne Strukturen von Klassen und Komponenten zu modellieren."
    },
    {
        "title": "Interaktionsübersichtsdiagramm",
        "textVertical": "Interaktionsübersichtsdiagramme kombinieren Aktivitäts- und Interaktionsdiagramme.",
        "textHorizontal": "Zeigen Kontrollfluss zwischen Interaktionen.",
        "ptext": "Ein Interaktionsübersichtsdiagramm bietet eine hochrangige Ansicht von Interaktionen, indem es Elemente von Aktivitäts- und Interaktionsdiagrammen kombiniert. Es zeigt, wie verschiedene Interaktionen zusammenhängen und in welcher Reihenfolge sie auftreten, was für komplexe Arbeitsabläufe nützlich ist."
    },
    {
        "title": "Timing-Diagramm",
        "textVertical": "Timing-Diagramme zeigen Zustandsänderungen über die Zeit.",
        "textHorizontal": "Fokussieren auf Zeitbeschränkungen und Zustandsdauer.",
        "ptext": "Timing-Diagramme veranschaulichen, wie Zustände oder Werte von Objekten sich über die Zeit ändern. Sie sind besonders nützlich in Echtzeit- und eingebetteten Systemen, in denen Zeitbeschränkungen kritisch sind. Dieses Diagramm betont das zeitliche Verhalten von Systemkomponenten."
    },
    {
        "title": "Kommunikationsdiagramm",
        "textVertical": "Kommunikationsdiagramme zeigen Objektinteraktionen und Nachrichtenverbindungen.",
        "textHorizontal": "Fokus auf Objektbeziehungen und Nachrichtenaustausch.",
        "ptext": "Kommunikationsdiagramme beschreiben Interaktionen zwischen Objekten, wobei die Beziehungen und der Nachrichtenaustausch betont werden. Im Gegensatz zu Sequenzdiagrammen liegt der Fokus weniger auf der zeitlichen Abfolge und mehr auf der Kommunikationsstruktur zwischen Objekten."
    },
    {
        "title": "Interaktionsdiagramme",
        "textVertical": "Interaktionsdiagramme beschreiben die Kommunikation zwischen Objekten.",
        "textHorizontal": "Beinhaltet Sequenz-, Kommunikations-, Timing- und Interaktionsübersichtsdiagramme.",
        "ptext": "Interaktionsdiagramme sind eine Untergruppe der UML-Verhaltensdiagramme, die die Kommunikation zwischen Objekten modellieren. Sie umfassen Sequenzdiagramme, Kommunikationsdiagramme, Timing-Diagramme und Interaktionsübersichtsdiagramme. Diese Diagramme werden verwendet, um Nachrichtenflüsse und Interaktionen in einem System zu analysieren."
    },
    {
        "title": "Generalisierung",
        "textVertical": "Generalisierung stellt Vererbung zwischen Klassen dar.",
        "textHorizontal": "Is-a-Beziehung: Unterklassen erben von einer Oberklasse.",
        "ptext": "Generalisierung in UML beschreibt eine Vererbungsbeziehung, bei der eine spezialisierte Klasse (Unterklasse) Attribute und Methoden einer allgemeineren Klasse (Oberklasse) erbt. Sie stellt eine 'Is-a'-Beziehung dar und wird durch eine durchgezogene Linie mit einem hohlen Dreieck gezeigt, das auf die Oberklasse zeigt. Generalisierung ist ein Kernkonzept des objektorientierten Designs und entspricht direkt der Vererbung in Programmiersprachen wie Java."
    },
    {
        "title": "Include-Beziehung",
        "textVertical": "Include stellt die verpflichtende Wiederverwendung eines Use Cases dar.",
        "textHorizontal": "Eingeschlossene Use Cases werden immer ausgeführt.",
        "ptext": "Die «include»-Beziehung wird in Use-Case-Diagrammen verwendet, um zu zeigen, dass ein Use Case immer das Verhalten eines anderen Use Cases einschließt. Der eingeschlossene Use Case ist obligatorisch und wird jedes Mal ausgeführt, wenn der Basis-Use Case läuft. Diese Beziehung hilft, Wiederholungen zu vermeiden und die Wiederverwendbarkeit gemeinsamer Funktionalität zu verbessern."
    },
    {
        "title": "Extend-Beziehung",
        "textVertical": "Extend stellt optionales Verhalten in Use-Case-Diagrammen dar.",
        "textHorizontal": "Erweiterte Use Cases werden nur unter bestimmten Bedingungen ausgeführt.",
        "ptext": "Die «extend»-Beziehung wird in Use-Case-Diagrammen verwendet, um optionales oder bedingtes Verhalten zu modellieren. Ein erweiternder Use Case fügt einem Basis-Use Case zusätzliche Funktionalität nur hinzu, wenn bestimmte Bedingungen erfüllt sind. Dies ermöglicht eine flexible und modulare Modellierung des Systemverhaltens."
    },
    {
        "title": "Zugriffsmodifikator protected",
        "textVertical": "Schutzebene zwischen private und public.",
        "textHorizontal": "Protected erlaubt Zugriff innerhalb der Klasse und durch Unterklassen, aber nicht von außen.",
        "ptext": "In Java steuert der Zugriffsmodifikator 'protected', welche Teile einer Klasse für andere Klassen zugänglich sind. Er erlaubt den Zugriff innerhalb derselben Klasse, in Unterklassen und innerhalb desselben Pakets, während der Zugriff von außen verhindert wird. In einer App mit ArrayLists von Ferienhäusern und Reservierungen kann 'protected' beispielsweise genutzt werden, um Attribute wie 'buchbar' in der Klasse Ferienhaus für Unterklassen zugänglich zu machen, ohne sie vollständig öffentlich zu machen. So kann eine Unterklasse wie PremiumFerienhaus besondere Regeln implementieren, während der Rest der App nicht direkt auf die Attribute zugreift."
    },
    {
        "title": "Aggregation",
        "textVertical": "Teil-Ganzes-Beziehung zwischen Objekten.",
        "textHorizontal": "Ein Objekt enthält ein anderes, aber das enthaltene Objekt kann unabhängig existieren.",
        "ptext": "Aggregation beschreibt in der UML eine 'Teil-Ganzes'-Beziehung zwischen zwei Klassen. Dabei besitzt ein Objekt (z. B. ein Ferienhaus) Referenzen auf andere Objekte (z. B. mehrere Zimmer), aber die enthaltenen Objekte können auch unabhängig existieren. In einer App mit ArrayLists könnte ein Ferienhaus-Objekt eine Liste von Zimmer-Objekten aggregieren. Wird das Ferienhaus gelöscht, können die Zimmer weiterhin bestehen oder von anderen Häusern verwendet werden, im Gegensatz zur Komposition, bei der die Lebenszeit der Teile strikt an das Ganze gebunden ist."
    },
    {
        "title": "Komposition",
        "textVertical": "Starke Teil-Ganzes-Beziehung zwischen Objekten.",
        "textHorizontal": "Ein Objekt enthält ein anderes, das ohne das Ganze nicht existieren kann.",
        "ptext": "Komposition beschreibt in der UML eine besonders enge „Teil-Ganzes“-Beziehung zwischen zwei Klassen. Das enthaltene Objekt (z. B. ein Zimmer) kann nicht unabhängig vom übergeordneten Objekt (z. B. Ferienhaus) existieren. Wird das ganze Objekt gelöscht, werden auch alle enthaltenen Objekte gelöscht. In einer App mit ArrayLists könnte ein Ferienhaus-Objekt eine Liste von Zimmer-Objekten enthalten. Wenn das Ferienhaus gelöscht wird, werden die Zimmer automatisch mitgelöscht. Komposition wird in UML durch eine ausgefüllte Raute an der Beziehung zum Ganzen dargestellt."
    },
    {
        "title": "Interface",
        "textVertical": "Definiert Methoden, die eine Klasse implementieren muss.",
        "textHorizontal": "Interface legt einen Vertrag fest, den Klassen erfüllen müssen.",
        "ptext": "Ein Interface in der UML und in Programmiersprachen wie Java beschreibt eine Sammlung von Methoden ohne Implementierung, die von einer Klasse übernommen werden müssen. Es dient als Vertrag, um sicherzustellen, dass bestimmte Funktionen bereitgestellt werden. Interfaces ermöglichen Mehrfachvererbung von Fähigkeiten und fördern lose Kopplung und Modularität. In einer App mit ArrayLists könnten verschiedene Klassen dasselbe Interface implementieren, z. B. ein Interface `Reservierbar`, das Methoden wie `reservieren()` und `stornieren()` vorgibt."
    },
    {
        "title": "Interface",
        "textVertical": "Schnittstelle für Klassen.",
        "textHorizontal": "Definiert Methoden, die implementierende Klassen bereitstellen müssen.",
        "ptext": "Ein Interface legt nur die Signaturen von Methoden fest, ohne deren Implementierung. Klassen, die das Interface implementieren, müssen alle Methoden definieren. Interfaces ermöglichen lose Kopplung und flexible Erweiterungen, z. B. kann ein `ZahlungsService`-Interface von verschiedenen Klassen wie `PayPal` oder `Kreditkarte` implementiert werden."
    },
    {
        "title": "Klassendiagramm",
        "textVertical": "Zeigt Klassen, Attribute, Methoden und Beziehungen.",
        "textHorizontal": "Statische Struktur eines Systems wird dargestellt.",
        "ptext": "Ein Klassendiagramm in UML visualisiert die Struktur eines Systems durch Klassen, deren Attribute und Methoden sowie die Beziehungen zwischen ihnen, wie Vererbung, Aggregation oder Komposition. In einer App könnten z. B. `Kunde`, `Ferienhaus` und `Reservierungsauftrag` mit ihren Verbindungen dargestellt werden."
    },
    {
        title: "Array",
        textVertical: "An array stores multiple elements of the same type in a single data structure.",
        textHorizontal: "Ordered collection of elements accessed by index.",
        ptext: "An array is a data structure that holds a fixed number of elements of the same type, stored in contiguous memory locations. Each element can be accessed directly via its index, starting at 0. Arrays are widely used for efficient storage, iteration, and manipulation of data. Example operations include initializing, reading, writing, and looping through the array elements."
    },
    {
        "title": "Inhaltsplanung (Scope / Leistungsumfang)",
        "textVertical": "Abgrenzung des Projektumfangs.",
        "textHorizontal": "Festlegen, was zum Projekt gehört und was nicht.",
        "ptext": "Die Inhaltsplanung, auch Scope-Planung genannt, definiert den Leistungsumfang eines Projekts. Es wird festgelegt, welche Aufgaben, Ergebnisse und Anforderungen Teil des Projekts sind und welche ausdrücklich ausgeschlossen werden. Ziel ist es, Missverständnisse und unkontrollierte Erweiterungen (Scope Creep) zu vermeiden. Ein zentrales Werkzeug ist der Projektstrukturplan (PSP), der das Projekt in überschaubare Teilaufgaben zerlegt."
    },
    {
        "title": "Zeitplanung (Terminplanung)",
        "textVertical": "Planung von Dauer und Reihenfolge.",
        "textHorizontal": "Festlegen, wann welche Aufgaben erledigt werden.",
        "ptext": "In der Zeitplanung wird bestimmt, wie lange Aufgaben dauern, in welcher Reihenfolge sie ablaufen und welche Abhängigkeiten bestehen. Zusätzlich werden Meilensteine definiert, um wichtige Zwischenziele zu kontrollieren. Typische Werkzeuge sind Gantt-Diagramme, Netzpläne und Meilensteinpläne."
    },
    {
        "title": "Budgetplanung (Kostenplanung)",
        "textVertical": "Finanzielle Planung des Projekts.",
        "textHorizontal": "Kalkulation aller entstehenden Kosten.",
        "ptext": "Die Budgetplanung ermittelt die voraussichtlichen Gesamtkosten des Projekts. Dazu zählen Personalkosten, Sachkosten wie Lizenzen oder Hardware, Reisekosten sowie finanzielle Reserven für Risiken. Ziel ist es sicherzustellen, dass das Projekt wirtschaftlich durchführbar ist und das genehmigte Budget eingehalten werden kann."
    },
    {
        "title": "Ressourcenplanung",
        "textVertical": "Planung aller benötigten Mittel.",
        "textHorizontal": "Festlegen, wer und was im Projekt eingesetzt wird.",
        "ptext": "Die Ressourcenplanung bestimmt, welche Personen, Materialien, Geräte und externen Dienstleister für das Projekt benötigt werden. Sie stellt sicher, dass zur richtigen Zeit die passenden Ressourcen verfügbar sind. Eine schlechte Ressourcenplanung kann zu Verzögerungen oder Überlastung führen."
    },
    {
        "title": "Qualitätsplanung",
        "textVertical": "Festlegung von Qualitätsanforderungen.",
        "textHorizontal": "Definition von Standards, Prüfungen und Abnahmekriterien.",
        "ptext": "In der Qualitätsplanung wird festgelegt, welche Qualitätsstandards die Projektergebnisse erfüllen müssen. Es wird definiert, wie Qualität geprüft wird, welche Tests durchgeführt werden und welche Kriterien für die Abnahme gelten. Ziel ist es, ein Ergebnis zu liefern, das den Erwartungen der Auftraggeber entspricht."
    },
    {
        "title": "Kommunikationsplanung",
        "textVertical": "Strukturierte Projektkommunikation.",
        "textHorizontal": "Regeln, wer wann wie informiert wird.",
        "ptext": "Die Kommunikationsplanung legt fest, welche Informationen an welche Personen weitergegeben werden, in welcher Form und in welcher Häufigkeit. Sie sorgt für Transparenz und verhindert Informationsverluste. Häufig wird dafür eine Kommunikationsmatrix verwendet."
    },
    {
        "title": "Risikoplanung",
        "textVertical": "Umgang mit möglichen Gefahren.",
        "textHorizontal": "Erkennen, bewerten und behandeln von Risiken.",
        "ptext": "In der Risikoplanung werden potenzielle Risiken identifiziert, bewertet und Maßnahmen zu ihrer Vermeidung oder Minderung festgelegt. Dabei wird eingeschätzt, wie wahrscheinlich ein Risiko ist und welche Auswirkungen es hätte. Ein typisches Werkzeug ist die Risikomatrix."
    },
    {
        "title": "Stakeholder-Planung",
        "textVertical": "Analyse aller Beteiligten.",
        "textHorizontal": "Umgang mit Interessen und Erwartungen.",
        "ptext": "Die Stakeholder-Planung identifiziert alle Personen und Gruppen, die vom Projekt betroffen sind oder Einfluss darauf haben. Es wird analysiert, welche Interessen sie verfolgen und wie sie informiert oder eingebunden werden müssen. Ziel ist es, Konflikte zu vermeiden und Unterstützung zu sichern."
    },
    {
        "title": "Teilprojektplanung",
        "textVertical": "Aufteilung großer Projekte.",
        "textHorizontal": "Separate Planung einzelner Projektbereiche.",
        "ptext": "Bei großen Projekten werden Teilprojekte gebildet, um die Komplexität zu reduzieren. Für jedes Teilprojekt werden Umfang, Termine, Ressourcen und Verantwortlichkeiten separat geplant. Dadurch wird das Gesamtprojekt übersichtlicher und besser steuerbar."
    },
    {
        "title": "Merksatz Projektplanung",
        "textVertical": "Zentrale Prüfungszusammenfassung.",
        "textHorizontal": "Projektplanung beantwortet alle Kernfragen.",
        "ptext": "Die Projektplanung beantwortet die wichtigsten Fragen eines Projekts: Was wird gemacht (Inhalt)? Wann (Zeit)? Wie teuer (Budget)? Womit (Ressourcen)? Wie gut (Qualität)? Mit wem wird kommuniziert (Kommunikation)? Welche Risiken bestehen? Wer ist beteiligt (Stakeholder)? Wie wird die Arbeit organisiert (Teilprojekte)?"
    },
    {
        "title": "Projektkontrolle (Monitoring & Controlling)",
        "textVertical": "Überwachung des Projektverlaufs.",
        "textHorizontal": "Sicherstellen, dass das Projekt nach Plan läuft und Abweichungen korrigiert werden.",
        "ptext": "Die Projektkontrolle läuft parallel zur Projektdurchführung. Sie prüft regelmäßig, ob Zeitpläne, Budget, Qualität, Risiken und Ressourcen eingehalten werden. Bei Abweichungen werden Maßnahmen eingeleitet, um das Projekt wieder auf Kurs zu bringen."
    },
    {
        "title": "Termincontrolling (Zeitkontrolle)",
        "textVertical": "Überwachung des Zeitplans.",
        "textHorizontal": "Fertigstellung der Aufgaben im Zeitrahmen prüfen.",
        "ptext": "Das Termincontrolling überprüft, ob Aufgaben termingerecht abgeschlossen werden. Werkzeuge wie Gantt-Diagramme oder die Meilensteintrendanalyse helfen, Verzögerungen früh zu erkennen, um den Projektablauf rechtzeitig anzupassen."
    },
    {
        "title": "Kostencontrolling (Budgetkontrolle)",
        "textVertical": "Überwachung der Projektkosten.",
        "textHorizontal": "Prüfen, ob das Budget eingehalten wird.",
        "ptext": "Im Kostencontrolling wird überprüft, ob die tatsächlichen Kosten mit dem geplanten Budget übereinstimmen. Tools wie Soll-Ist-Vergleich, Kostenstatusberichte oder die Earned-Value-Analyse helfen, Überschreitungen frühzeitig zu erkennen und bei Bedarf Maßnahmen einzuleiten."
    },
    {
        "title": "Qualitätscontrolling",
        "textVertical": "Sicherstellen der Ergebnisqualität.",
        "textHorizontal": "Prüfen, ob die Ergebnisse den Anforderungen entsprechen.",
        "ptext": "Das Qualitätscontrolling kontrolliert, ob die Projektergebnisse die festgelegten Qualitätsstandards erfüllen. Tests, Abnahmen, Reviews und Audits helfen, Fehler zu erkennen und die Qualität kontinuierlich zu sichern."
    },
    {
        "title": "Risiko- und Chancen-Controlling",
        "textVertical": "Überwachung von Risiken und Chancen.",
        "textHorizontal": "Neue Risiken erkennen und Maßnahmen einleiten.",
        "ptext": "Dieses Controlling überwacht bestehende Risiken, erkennt neue Gefahren oder Chancen und bewertet deren Auswirkungen. Ein Risikoregister und regelmäßige Risikoanalysen helfen, Probleme frühzeitig zu erkennen und Gegenmaßnahmen zu ergreifen."
    },
    {
        "title": "Ressourcencontrolling",
        "textVertical": "Überprüfung der Mittel und Kapazitäten.",
        "textHorizontal": "Prüfen, ob genügend Personal, Geräte und Materialien vorhanden sind.",
        "ptext": "Beim Ressourcencontrolling wird überprüft, ob das Team ausreichend besetzt ist, Hardware, Lizenzen oder Maschinen zur Verfügung stehen und ob die Mitarbeiter nicht überlastet sind. Ziel ist, Engpässe zu vermeiden und den Projektfortschritt zu sichern."
    },
    {
        "title": "Leistungs- und Fortschrittskontrolle",
        "textVertical": "Überwachung der erledigten Arbeitspakete.",
        "textHorizontal": "Prüfen, wie viel Arbeit bereits erledigt ist und ob Ergebnisse den Plänen entsprechen.",
        "ptext": "Die Leistungs- und Fortschrittskontrolle prüft, wie viel Arbeit bereits abgeschlossen wurde und ob die Ergebnisse mit den geplanten Zielen übereinstimmen. Werkzeuge wie Soll-Ist-Vergleiche helfen, Prioritäten neu zu setzen und Aufgaben bei Bedarf umzuleiten."
    },
    {
        "title": "Kommunikations- und Stakeholderkontrolle",
        "textVertical": "Sicherstellen der Kommunikation im Projekt.",
        "textHorizontal": "Prüfen, ob alle Stakeholder informiert sind und Konflikte vermieden werden.",
        "ptext": "Diese Kontrolle überprüft, ob die Kommunikationsplanung eingehalten wird, ob Stakeholder regelmäßig informiert werden und ob Konflikte frühzeitig erkannt und gelöst werden. Ziel ist eine transparente Kommunikation für einen reibungslosen Projektverlauf."
    },
    {
        "title": "Merksatz Projektkontrolle",
        "textVertical": "Prüfungsrelevante Zusammenfassung.",
        "textHorizontal": "Projektkontrolle überwacht Zeit, Kosten, Qualität, Risiken und Fortschritt.",
        "ptext": "Die Projektkontrolle sorgt dafür, dass das Projekt nach Plan läuft. Bei Abweichungen werden Maßnahmen ergriffen: Zeitpläne anpassen, Ressourcen umverteilen, Prioritäten ändern, Kosten regulieren, Risiken behandeln. So bleibt das Projekt auf Kurs."
    },
    {
        "title": "Projektabschluss",
        "textVertical": "Letzte Phase im Projektmanagement.",
        "textHorizontal": "Projekt offiziell beenden, übergeben und bewerten.",
        "ptext": "Der Projektabschluss beendet ein Projekt formal. Alle Ergebnisse werden an den Auftraggeber übergeben, Abnahmen durchgeführt, Abschlussdokumentation erstellt, Lessons Learned besprochen und das Projektteam aufgelöst. Ziel ist, das Projekt sauber abzuschließen und Erfahrungen für zukünftige Projekte zu sichern."
    },
    {
        "title": "Fertigstellung und Übergabe",
        "textVertical": "Endprodukt dem Auftraggeber bereitstellen.",
        "textHorizontal": "Software, Dokumentation, Hardware, Schulungen übergeben.",
        "ptext": "In diesem Schritt werden alle Projektergebnisse dem Auftraggeber übergeben, sodass er sie direkt nutzen kann. Dazu gehören Software, Dokumentationen, Installationsdateien, Bedienungsanleitungen, Hardware und ggf. Schulungen für Anwender."
    },
    {
        "title": "Abnahme durch den Auftraggeber",
        "textVertical": "Offizielle Bestätigung der Zielerreichung.",
        "textHorizontal": "Prüfen, ob Ergebnisse Qualität und Anforderungen erfüllen.",
        "ptext": "Der Auftraggeber prüft, ob das Projektziel erreicht wurde, ob Qualität und Funktionen stimmen und alles dem Projektauftrag entspricht. Bei Zustimmung wird das Abnahmeprotokoll unterschrieben, was die offizielle Bestätigung darstellt."
    },
    {
        "title": "Abschlussdokumentation",
        "textVertical": "Alles Wichtige schriftlich festhalten.",
        "textHorizontal": "Ziele, Ergebnisse, Änderungen, Kosten und Zeit dokumentieren.",
        "ptext": "Die Abschlussdokumentation enthält eine Übersicht über erledigte Aufgaben, erreichte Ziele, aufgetretene Probleme, Änderungen, Kosten- und Zeitübersicht sowie die Endergebnisse und wichtige Dokumente. Sie dient als Referenz für zukünftige Projekte."
    },
    {
        "title": "Lessons Learned / Retrospektive",
        "textVertical": "Erfahrungen auswerten.",
        "textHorizontal": "Analysieren, was gut lief, was nicht und Verbesserungen festlegen.",
        "ptext": "Im Schritt 'Lessons Learned' analysiert das Team gemeinsam, welche Prozesse und Vorgehensweisen gut funktioniert haben und welche Probleme aufgetreten sind. Ziel ist es, Erkenntnisse für zukünftige Projekte zu gewinnen und die Zusammenarbeit zu verbessern. Dieses Meeting wird auch Retrospektive genannt."
    },
    {
        "title": "Teamauflösung",
        "textVertical": "Projektteam auflösen.",
        "textHorizontal": "Mitarbeiter zurück in Abteilungen, externe Kräfte freigeben.",
        "ptext": "Nach Projektabschluss werden alle Teammitglieder offiziell freigegeben. Mitarbeiter gehen zurück in ihre Abteilungen, externe Ressourcen werden nicht weiter gebucht, und der Projektleiter übergibt Verantwortlichkeiten. Ziel ist die effiziente Freigabe von Ressourcen."
    },
    {
        "title": "Administrative Aufgaben im Projektabschluss",
        "textVertical": "Alle organisatorischen Abschlussaufgaben erledigen.",
        "textHorizontal": "Verträge schließen, Rechnungen bezahlen, Lizenzen kündigen, Dokumente archivieren.",
        "ptext": "Dazu gehören das Schließen offener Verträge, das Bezahlen von Rechnungen, Kündigen oder Übertragen von Lizenzen, Archivieren von Projektunterlagen, Zurückgeben von Materialien und das abschließende Ordnen des Projektordners. Ziel ist ein sauberer organisatorischer Abschluss."
    },
    {
        "title": "Retrospektive – Ablauf",
        "textVertical": "Strukturierte Reflexion des Projekts.",
        "textHorizontal": "Fünf Phasen: Einstieg, Daten sammeln, Erkenntnisse gewinnen, Maßnahmen festlegen, Abschluss.",
        "ptext": "Die Retrospektive analysiert das Projekt oder einen Projektabschnitt, um kontinuierlich zu lernen. Sie besteht aus fünf Phasen: 1) Set the Stage – Team einstimmen, 2) Gather Data – Daten sammeln, 3) Generate Insights – Ursachen und Muster analysieren, 4) Decide What to Do – konkrete Verbesserungsmaßnahmen festlegen, 5) Close the Retrospective – Meeting abschließen und Feedback geben."
    },
    {
        "title": "Merksatz Projektabschluss",
        "textVertical": "Prüfungsrelevante Zusammenfassung.",
        "textHorizontal": "Projektabschluss = Ergebnisse übergeben, Abnahme, Dokumentation, Lessons Learned, Team auflösen, administrative Aufgaben.",
        "ptext": "Der Projektabschluss umfasst die Übergabe der Ergebnisse, die Abnahme durch den Auftraggeber, Erstellung der Abschlussdokumentation, Auswertung der Erfahrungen in einer Retrospektive, Auflösung des Teams sowie Erledigung aller administrativen Aufgaben. Ziel ist ein sauberer Abschluss und Verbesserung zukünftiger Projekte."
    },
    {
        "title": "Projekt Charter (Projektauftrag)",
        "textVertical": "Offizielles Dokument zum Projektstart.",
        "textHorizontal": "Legt Ziele, Umfang, Team, Stakeholder, Budget, Zeitplan und Risiken fest.",
        "ptext": "Der Projekt Charter ist die offizielle Genehmigung eines Projekts. Er definiert die Projektziele, den Umfang, Verantwortlichkeiten, Stakeholder, Ressourcen, Budget, Zeitplan und Risiken. Ohne Projekt Charter darf kein professionelles Projekt starten und er bildet die Grundlage für die weitere Projektplanung und Kommunikation."
    },
    {
        "title": "Scope-Definition (Projektumfang)",
        "textVertical": "Festlegen, was zum Projekt gehört.",
        "textHorizontal": "Unterscheidung zwischen In Scope und Out of Scope.",
        "ptext": "Die Scope-Definition beschreibt den genauen Leistungsumfang eines Projekts. 'In Scope' umfasst alle Aufgaben und Ergebnisse, die umgesetzt werden müssen, z. B. Software-Funktionen, Tests oder Dokumentation. 'Out of Scope' enthält alles, was bewusst nicht zum Projekt gehört, z. B. Marketingmaßnahmen oder Logo-Redesign. Dies verhindert Missverständnisse und Scope Creep."
    },
    {
        "title": "Projektziele (Goals)",
        "textVertical": "Definition der Projektziele.",
        "textHorizontal": "SMART formulierte Ziele geben klare Orientierung.",
        "ptext": "Projektziele beschreiben, was das Projekt erreichen soll. Gute Ziele sind SMART: spezifisch, messbar, attraktiv, realistisch und terminiert. Beispiel: 'Das Webportal soll bis 30.09. vollständig mobil nutzbar sein und die Ladezeit um 40 % reduzieren.' Ziele bilden die Grundlage für Planung, Durchführung und Erfolgskontrolle."
    },
    {
        "title": "DMAIC-Zyklus (Six Sigma)",
        "textVertical": "Strukturiertes Verbesserungsverfahren.",
        "textHorizontal": "Fünf Schritte: Define, Measure, Analyze, Improve, Control.",
        "ptext": "DMAIC ist ein strukturierter Zyklus zur Prozessverbesserung: Define – Problem und Projekt definieren, Measure – Ist-Zustand messen, Analyze – Ursachen analysieren, Improve – Lösungen entwickeln und umsetzen, Control – Verbesserungen überwachen und sichern. Dieser Zyklus hilft, systematisch Probleme zu lösen und Ergebnisse dauerhaft zu verbessern."
    },
    {
        "title": "Merksatz Projekt Charter & Scope",
        "textVertical": "Prüfungsrelevante Zusammenfassung.",
        "textHorizontal": "Projektstart, Umfang, Ziele und DMAIC im Überblick.",
        "ptext": "Projekt Charter = offizieller Projektauftrag mit allen Eckdaten (Ziele, Umfang, Team, Stakeholder, Budget, Zeitplan, Risiken). Scope: In Scope = gehört zum Projekt, Out of Scope = gehört bewusst nicht dazu. Goals = SMART definierte Ziele. DMAIC = Define, Measure, Analyze, Improve, Control."
    },
    {
        "title": "Stakeholder Management",
        "textVertical": "Alle Projektbeteiligten identifizieren und einbinden.",
        "textHorizontal": "Ziel: Unterstützung sichern, Konflikte vermeiden, Projekt erfolgreich machen.",
        "ptext": "Stakeholder Management beschäftigt sich damit, alle Personen oder Gruppen zu identifizieren, die vom Projekt betroffen sind oder Einfluss darauf haben. Danach werden Analyse, Strategie, Kommunikation und Monitoring durchgeführt, um die Stakeholder einzubinden, Konflikte zu vermeiden und das Projekt erfolgreich umzusetzen."
    },
    {
        "title": "Stakeholder-Identifikation",
        "textVertical": "Alle relevanten Stakeholder erfassen.",
        "textHorizontal": "Intern (Team, Abteilungsleiter, Geschäftsführung) und extern (Kunden, Lieferanten, Partner).",
        "ptext": "Zuerst werden alle Stakeholder identifiziert – sowohl direkt als auch indirekt betroffene Personen. Dies ist die Grundlage für Analyse, Kommunikation und Strategieplanung."
    },
    {
        "title": "Stakeholder-Analyse",
        "textVertical": "Einfluss und Interesse prüfen.",
        "textHorizontal": "Einordnung in Stakeholder-Matrix (Einfluss vs. Interesse).",
        "ptext": "Die Analyse bewertet, wie stark Stakeholder das Projekt beeinflussen können und wie groß ihr Interesse ist. In der Stakeholder-Matrix werden Schlüssel-Stakeholder eng eingebunden, andere informiert oder kontrolliert. Dies erleichtert gezielte Kommunikation und Priorisierung."
    },
    {
        "title": "Stakeholder-Strategie / Planung",
        "textVertical": "Kommunikation und Einbindung planen.",
        "textHorizontal": "Wer informiert wen, wie und wann?",
        "ptext": "Nach Analyse wird festgelegt, wie jeder Stakeholder einbezogen wird: Welche Kommunikationskanäle genutzt werden, wie oft informiert wird und wer die Verantwortung trägt. Schlüssel-Stakeholder erhalten z. B. regelmäßige Meetings, andere ggf. E-Mail-Updates."
    },
    {
        "title": "Stakeholder-Kommunikation",
        "textVertical": "Regelmäßige Information und Feedback.",
        "textHorizontal": "Ziel: Stakeholder verstehen das Projekt und unterstützen es.",
        "ptext": "Stakeholder werden kontinuierlich informiert, Feedback wird eingeholt und Erwartungen gesteuert. Ziel ist es, Missverständnisse zu vermeiden, Unterstützung zu sichern und Konflikte frühzeitig zu erkennen."
    },
    {
        "title": "Stakeholder-Monitoring / Anpassung",
        "textVertical": "Kontinuierliche Überwachung der Interessen.",
        "textHorizontal": "Stakeholder-Strategien bei Bedarf anpassen.",
        "ptext": "Stakeholder-Interessen können sich ändern. Deshalb werden Strategien, Kommunikation und Einbindung regelmäßig überprüft und angepasst. Neue Stakeholder werden identifiziert, und bestehende Beziehungen gepflegt, um den Projekterfolg zu sichern."
    },
    {
        "title": "Elevator Speech",
        "textVertical": "Kurze, prägnante Vorstellung.",
        "textHorizontal": "Idee, Projekt oder Person in 30–60 Sekunden vorstellen.",
        "ptext": "Eine Elevator Speech ist ein kurzes Statement, um Aufmerksamkeit zu gewinnen und Interesse zu wecken. Sie stellt klar dar, worum es geht, welchen Nutzen es gibt und lädt zu weiterem Austausch ein. Dauer: ca. 30–60 Sekunden – wie eine Fahrstuhlfahrt."
    },
    {
        "title": "Aufbau einer Elevator Speech",
        "textVertical": "Struktur für maximale Wirkung.",
        "textHorizontal": "Begrüßung, Problem, Lösung, Nutzen, Abschluss.",
        "ptext": "Eine Elevator Speech besteht aus fünf Elementen: 1) Begrüßung/Einstieg, 2) Problem/Bedarf, 3) Lösung/Idee, 4) Nutzen/Vorteil, 5) Abschluss/Call-to-Action. Sie vermittelt in kurzer Zeit den Kern der Idee und motiviert zu weiterem Austausch."
    },
    {
        "title": "Tipps für Elevator Speech",
        "textVertical": "Effektiv und verständlich präsentieren.",
        "textHorizontal": "Kurz, klar, Nutzen hervorheben, positiv auftreten.",
        "ptext": "Eine gute Elevator Speech ist kurz, prägnant und verständlich. Fachbegriffe sollten vermieden werden, der Fokus liegt auf dem Mehrwert für das Gegenüber. Selbstbewusst, freundlich und positiv auftreten, damit Interesse geweckt wird."
    },
    {
        "title": "Klassische Vorgehensmodelle",
        "textVertical": "Linearer Ablauf in festen Phasen.",
        "textHorizontal": "Jede Phase wird abgeschlossen, bevor die nächste beginnt (Wasserfallmodell).",
        "ptext": "Klassische Vorgehensmodelle folgen einem sequenziellen Ablauf: Anforderungsanalyse, System-/Software-Design, Implementierung, Test/Integration, Rollout, Wartung. Vorteile: klare Struktur, einfache Planung, Dokumentation. Nachteile: Änderungen teuer, Feedback oft spät, wenig Flexibilität."
    },
    {
        "title": "Agile Vorgehensmodelle",
        "textVertical": "Iterativ und inkrementell.",
        "textHorizontal": "Projekt in kurzen Iterationen / Sprints, ständiges Feedback vom Kunden.",
        "ptext": "Agile Modelle wie Scrum, Kanban oder XP setzen auf kurze Iterationen, regelmäßiges Kundenfeedback und Anpassungsfähigkeit. Vorteile: hohe Flexibilität, frühes Feedback, kontinuierliche Verbesserung. Nachteile: hohe Abstimmungsaufwände, weniger formale Dokumentation, schwieriger bei großen Teams."
    },
    {
        "title": "Typische agile Methoden",
        "textVertical": "Beliebte Frameworks im agilen Projektmanagement.",
        "textHorizontal": "Scrum, Kanban, Extreme Programming (XP).",
        "ptext": "Scrum arbeitet mit festen Sprints, tägliche Stand-ups und einem Product Owner. Kanban visualisiert Aufgaben in einem kontinuierlichen Fluss mit Limits. Extreme Programming (XP) legt Fokus auf Softwarequalität, Pair Programming und Test-Driven Development."
    },
    {
        "title": "Vergleich Klassisch vs. Agil",
        "textVertical": "Merkmale gegenübergestellt.",
        "textHorizontal": "Linear vs. iterativ, Flexibilität, Feedback, Dokumentation, Risiken, Änderungen.",
        "ptext": "Klassisch: linear, geringe Flexibilität, spätes Feedback, umfangreiche Dokumentation, Risiken spät erkannt, Änderungen teuer. Agil: iterativ, hohe Flexibilität, frühzeitiges Feedback, minimale Dokumentation, Risiken früh erkannt, Änderungen einfach umsetzbar."
    },
    {
        "title": "Merksatz Vorgehensmodelle",
        "textVertical": "Prüfungsrelevante Kurzform.",
        "textHorizontal": "Klassisch vs. Agil kurz zusammengefasst.",
        "ptext": "Klassisch = Planen → Machen → Prüfen → Fertig. Agil = Kleine Schritte → Testen → Feedback → Anpassen → Wiederholen."
    },
    {
        "title": "Product Backlog",
        "textVertical": "Geordnete Liste aller Anforderungen.",
        "textHorizontal": "Enthält Aufgaben, Funktionen, Verbesserungen, Fehler; vom Product Owner erstellt und priorisiert.",
        "ptext": "Das Product Backlog ist eine priorisierte Liste aller Anforderungen an das Produkt. Es wird vom Product Owner erstellt, enthält Aufgaben, Funktionen, Verbesserungen und Fehler und ist ein lebendes Dokument, das sich im Verlauf des Projekts laufend ändert."
    },
    {
        "title": "Entwickler-Team wählt Aufgaben aus",
        "textVertical": "Selbstorganisation im Team.",
        "textHorizontal": "Das Team entscheidet, welche Backlog-Einträge im nächsten Sprint umgesetzt werden.",
        "ptext": "Das Entwicklerteam plant selbstständig, welche Aufgaben des Product Backlogs im nächsten Sprint umgesetzt werden, basierend auf Priorität, Teamkapazität und technischer Machbarkeit. Das Team organisiert die Umsetzung eigenständig."
    },
    {
        "title": "Sprint",
        "textVertical": "Fester Zeitraum für Entwicklung.",
        "textHorizontal": "Ziel: fertiges, funktionsfähiges Produktinkrement.",
        "ptext": "Ein Sprint ist ein Zeitraum von 1–4 Wochen, in dem ein fertiges Produktinkrement erstellt wird. Während des Sprints wird nicht umgeplant. Er besteht aus Sprint Planning, Daily Scrums, Entwicklung, Sprint Review und Sprint Retrospektive."
    },
    {
        "title": "Daily Scrum",
        "textVertical": "Tägliches kurzes Meeting.",
        "textHorizontal": "Dauer max. 15 Minuten; Team stimmt Stand ab, erkennt Hindernisse, plant den Tag.",
        "ptext": "Das Daily Scrum ist ein tägliches, kurzes Meeting des Entwicklerteams, um den aktuellen Stand zu besprechen, Probleme früh zu erkennen und die Tagesplanung anzupassen. Es dient ausschließlich dem Team, nicht dem Product Owner."
    },
    {
        "title": "Sprint Review",
        "textVertical": "Abnahme des Produktinkrements.",
        "textHorizontal": "Am Ende des Sprints präsentiert das Team fertige Ergebnisse, Product Owner prüft, Stakeholder geben Feedback.",
        "ptext": "Im Sprint Review zeigt das Team die fertiggestellten Produktinkremente. Der Product Owner überprüft, ob die Anforderungen erfüllt sind, und Stakeholder geben Feedback. Nur funktionierende Ergebnisse zählen."
    },
    {
        "title": "Kurz-Merksatz Scrum",
        "textVertical": "Scrum in wenigen Worten.",
        "textHorizontal": "Product Backlog = WAS, Entwicklungsteam = WIE, Sprint = WANN, Daily = Abstimmung, Sprint Review = Abnahme",
        "ptext": "Merksatz für Scrum: Product Backlog = Was umgesetzt wird, Entwicklungsteam = Wie die Umsetzung erfolgt, Sprint = Wann es passiert, Daily Scrum = Abstimmung im Team, Sprint Review = Abnahme des fertigen Produktinkrements."
    },
    {
        "title": "Product Backlog",
        "textVertical": "Geordnete Liste aller Anforderungen.",
        "textHorizontal": "Enthält Aufgaben, Funktionen, Verbesserungen, Fehler; vom Product Owner erstellt und priorisiert.",
        "ptext": "Das Product Backlog ist eine priorisierte Liste aller Anforderungen an das Produkt. Es wird vom Product Owner erstellt, enthält Aufgaben, Funktionen, Verbesserungen und Fehler und ist ein lebendes Dokument, das sich im Verlauf des Projekts laufend ändert."
    },
    {
        "title": "Entwickler-Team wählt Aufgaben aus",
        "textVertical": "Selbstorganisation im Team.",
        "textHorizontal": "Das Team entscheidet, welche Backlog-Einträge im nächsten Sprint umgesetzt werden.",
        "ptext": "Das Entwicklerteam plant selbstständig, welche Aufgaben des Product Backlogs im nächsten Sprint umgesetzt werden, basierend auf Priorität, Teamkapazität und technischer Machbarkeit. Das Team organisiert die Umsetzung eigenständig."
    },
    {
        "title": "Sprint",
        "textVertical": "Fester Zeitraum für Entwicklung.",
        "textHorizontal": "Ziel: fertiges, funktionsfähiges Produktinkrement.",
        "ptext": "Ein Sprint ist ein Zeitraum von 1–4 Wochen, in dem ein fertiges Produktinkrement erstellt wird. Während des Sprints wird nicht umgeplant. Er besteht aus Sprint Planning, Daily Scrums, Entwicklung, Sprint Review und Sprint Retrospektive."
    },
    {
        "title": "Daily Scrum",
        "textVertical": "Tägliches kurzes Meeting.",
        "textHorizontal": "Dauer max. 15 Minuten; Team stimmt Stand ab, erkennt Hindernisse, plant den Tag.",
        "ptext": "Das Daily Scrum ist ein tägliches, kurzes Meeting des Entwicklerteams, um den aktuellen Stand zu besprechen, Probleme früh zu erkennen und die Tagesplanung anzupassen. Es dient ausschließlich dem Team, nicht dem Product Owner."
    },
    {
        "title": "Sprint Review",
        "textVertical": "Abnahme des Produktinkrements.",
        "textHorizontal": "Am Ende des Sprints präsentiert das Team fertige Ergebnisse, Product Owner prüft, Stakeholder geben Feedback.",
        "ptext": "Im Sprint Review zeigt das Team die fertiggestellten Produktinkremente. Der Product Owner überprüft, ob die Anforderungen erfüllt sind, und Stakeholder geben Feedback. Nur funktionierende Ergebnisse zählen."
    },
    {
        "title": "Kurz-Merksatz Scrum",
        "textVertical": "Scrum in wenigen Worten.",
        "textHorizontal": "Product Backlog = WAS, Entwicklungsteam = WIE, Sprint = WANN, Daily = Abstimmung, Sprint Review = Abnahme",
        "ptext": "Merksatz für Scrum: Product Backlog = Was umgesetzt wird, Entwicklungsteam = Wie die Umsetzung erfolgt, Sprint = Wann es passiert, Daily Scrum = Abstimmung im Team, Sprint Review = Abnahme des fertigen Produktinkrements."
    },
    {
        "title": "Kanban",
        "textVertical": "Agile Methode zur Visualisierung von Aufgaben.",
        "textHorizontal": "Aufgaben wandern von To Do → In Progress → Done; Work-in-Progress-Limits verhindern Überlastung.",
        "ptext": "Kanban ist eine agile Methode, die den Arbeitsfluss sichtbar macht. Aufgaben werden auf einem Kanban-Board dargestellt und wandern von 'To Do' über 'In Progress' nach 'Done'. Work-in-Progress (WIP) Limits verhindern Überlastung. Vorteile: volle Transparenz, kontinuierlicher Fortschritt, flexible Anpassung, Verbesserungspotential wird sichtbar."
    },
    {
        "title": "Kanban Vorteile & Nachteile",
        "textVertical": "Flexibel, transparent, fördert Teamarbeit.",
        "textHorizontal": "Vorteile: Transparenz, Fokus, Engpässe sichtbar, kontinuierliche Verbesserung. Nachteile: kein fester Zeitrahmen, Disziplin nötig, Übersicht geht bei fehlenden WIP-Limits verloren.",
        "ptext": "Kanban bietet viele Vorteile: volle Transparenz über Aufgaben, flexible Anpassung, Fokus auf laufende Arbeit durch WIP-Limits, frühzeitige Engpass-Erkennung, kontinuierliche Workflow-Optimierung und bessere Teamkommunikation. Nachteile: Kein fester Zeitrahmen, geringere Planungssicherheit bei großen Projekten, Abhängigkeit von Disziplin und WIP-Limits, nicht ideal für komplexe Projekte ohne klaren Workflow."
    },
    {
        "title": "Scrum vs. Kanban",
        "textVertical": "Vergleich der beiden agilen Methoden.",
        "textHorizontal": "Scrum = feste Sprints, Rollen, Meetings, Burndown-Chart. Kanban = kontinuierlicher Workflow, flexibel, Kanban-Board, keine festen Rollen.",
        "ptext": "Scrum arbeitet iterativ in festen Sprints mit klar definierten Rollen (Product Owner, Scrum Master, Entwicklerteam) und Meetings (Daily Scrum, Sprint Review, Retrospektive). Fortschritt wird z. B. über Burndown-Charts gemessen. Kanban verfolgt einen kontinuierlichen Workflow, Aufgaben werden flexibel aus dem Kanban-Board gezogen, Meetings und Rollen sind optional. Scrum fokussiert fertige Produktinkremente am Ende jedes Sprints, Kanban zeigt ständigen Arbeitsfluss und Transparenz."
    },
    {
        "title": "Agile / Scrum Begriffe",
        "textVertical": "Wichtige Begriffe für Scrum und agile Projekte.",
        "textHorizontal": "Release Plan = wann, Iteration/Sprint Plan = was, Acceptance Test = abnehmen, Stand-up = täglich abstimmen, Pair Programming = gemeinsam programmieren, Unit Test = Qualität prüfen, Code = fertige Umsetzung.",
        "ptext": "Release Plan plant, wann welche Produktversion veröffentlicht wird, inklusive Funktionalitäten und Meilensteinen. Iteration Plan (Sprint Plan) legt fest, welche Aufgaben im Sprint erledigt werden und wer sie übernimmt. Acceptance Tests prüfen, ob Funktionen wie erwartet umgesetzt wurden. Stand-up Meetings (Daily Scrum) dienen der täglichen Abstimmung. Pair Programming bedeutet, dass zwei Entwickler gemeinsam am Code arbeiten, Unit Tests sichern die Code-Qualität, und Code ist das fertige Ergebnis der Entwicklungsarbeit."
    },
    {
        "title": "Review (Sprint Review)",
        "textVertical": "Meeting zur Überprüfung des Sprint-Ergebnisses.",
        "textHorizontal": "Team zeigt Produktinkrement, Product Owner und Stakeholder prüfen Abnahme, Feedback für nächste Schritte.",
        "ptext": "Ein Review ist ein Meeting am Ende eines Sprints, bei dem das Team das fertige Produktinkrement präsentiert. Der Product Owner prüft, ob die Sprint-Ziele erreicht wurden, Stakeholder geben Feedback, und neue Anforderungen oder Anpassungen werden erkannt. Typischer Ablauf: Präsentation, Abnahme, Diskussion von Verbesserungen, Anpassung der Aufgaben für die nächsten Sprints. Dauer: 1–2 Stunden je nach Team und Sprintlänge."
    },
    {
        "title": "Kundenaufträge in Softwareprojekten",
        "textVertical": "Bearbeitung von Kundenprojekten – Vor- und Nachteile.",
        "textHorizontal": "Vorteile: klare Anforderungen, Finanzierung, direktes Feedback, Nutzen, Motivation, Planbarkeit. Nachteile: geänderte Anforderungen, Zeitdruck, Abhängigkeit, eingeschränkte Flexibilität, hoher Kommunikationsaufwand, hohe Erwartungen.",
        "ptext": "Kundenaufträge bieten klare Anforderungen und Budgetvorgaben, direktes Feedback, konkrete Nutzen für den Kunden, motivieren das Team und erleichtern die Planung. Nachteile sind mögliche Änderungswünsche des Kunden, hoher Zeitdruck, Abhängigkeit von Entscheidungen und Freigaben, eingeschränkte Flexibilität und hoher Kommunikationsaufwand, sowie die Erwartung perfekter Qualität."
    },
    {
        "title": "Projektzyklen & UX Design",
        "textVertical": "Vergleich von Scrum, Kanban, Wasserfall und Grundlagen UX Design.",
        "textHorizontal": "Scrum = feste Sprints, Kanban = kontinuierlicher Flow, Wasserfall = lineare Phasen. UX Design = Nutzerfreundlichkeit, Effizienz, Emotionen, Klarheit.",
        "ptext": "Scrum arbeitet in festen Iterationen (Sprints) mit Review und Retrospektive, Ziel ist ein fertiges Produktinkrement. Kanban fließt kontinuierlich, neue Aufgaben werden nach Bedarf aufgenommen, Fokus auf Flow, WIP-Limits und kontinuierliche Verbesserung. Wasserfall ist linear, jede Phase wird einmal abgeschlossen, Änderungen sind später aufwändig. UX Design beschäftigt sich mit dem Nutzererlebnis, Usability, Effizienz, Emotionen, Zugänglichkeit und klarer Navigation. Typische Aufgaben: Personas, User Journeys, Prototypen, Usability-Tests. Ziel: Produkte, die verständlich, effizient und angenehm zu nutzen sind."
    },
    {
        "title": "Homogene Datenquellen",
        "textVertical": "Datenquellen mit gleicher Struktur, Format und Technologie.",
        "textHorizontal": "Homogen = gleiche Struktur, gleiche Formate, einfache Integration, gleiche Technologie.",
        "ptext": "Homogene Datenquellen sind gleichartig und kompatibel. Sie lassen sich leicht verarbeiten und integrieren, z. B. zwei MySQL-Datenbanken, mehrere Excel-Dateien mit gleicher Struktur oder Sensoren desselben Typs."
    },
    {
        "title": "Heterogene Datenquellen",
        "textVertical": "Datenquellen mit unterschiedlichen Strukturen, Formaten oder Systemen.",
        "textHorizontal": "Heterogen = unterschiedliche Strukturen, verschiedene Formate, schwierige Integration, verschiedene Technologien.",
        "ptext": "Heterogene Datenquellen unterscheiden sich in Struktur, Format, System oder Datenmodell und müssen vor der Integration vereinheitlicht werden. Beispiele: Excel-Datei + SQL-Datenbank, SAP + Salesforce, Sensordaten CSV + Kundendaten JSON."
    },
    {
        "title": "Hauptunterschied: Homogen vs. Heterogen",
        "textVertical": "Vergleich der Datenquellen-Arten",
        "textHorizontal": "Homogen = gleichartig, einfache Integration. Heterogen = unterschiedlich, Integration aufwendig.",
        "ptext": "Homogene Datenquellen: gleiche Struktur, Formate, Technologie → einfache Integration. Heterogene Datenquellen: unterschiedliche Strukturen, Formate, Systeme → zusätzliche Schritte zur Integration nötig."
    },
    {
        "title": "Definition Daten nach ISO/IEC 2382-1",
        "textVertical": "Was sind Daten?",
        "textHorizontal": "Daten = formalisiert, wieder interpretierbar, für Kommunikation, Interpretation und Verarbeitung geeignet.",
        "ptext": "Daten sind eine wieder interpretierbare Darstellung von Informationen in einer formalisierten Form, sodass sie gespeichert, übertragen, interpretiert und verarbeitet werden können. Beispiele: Zahlen, Text (ASCII/UTF-8), Bilder (PNG/JPG), Dateien (JSON/XML)."
    },
    {
        "title": "Daten vs. Information",
        "textVertical": "Unterschied zwischen Daten und Information",
        "textHorizontal": "Information = Bedeutung, Daten = Darstellung",
        "ptext": "Informationen sind bedeutungsvoll, Daten sind die strukturierte Form der Information. Beispiel: Info = 'Es ist warm.'; Daten = '25°C'."
    },
    {
        "title": "Alltagsbeispiel Daten",
        "textVertical": "Daten im praktischen Einsatz",
        "textHorizontal": "Information: Termin um 16:00 Uhr, Daten: 2025-12-10T16:00:00",
        "ptext": "Mit formalisierten Daten können Computerprogramme arbeiten: Ein Kalenderprogramm kann Termine speichern und synchronisieren, Erinnerungen senden und die Daten über das Internet verarbeiten."
    },
    {
        "title": "Ausgangssituation moderner Unternehmen",
        "textVertical": "Unternehmen stehen vor großen Datenmengen und vielfältigen Quellen.",
        "textHorizontal": "Big Data, heterogene Quellen, interne & externe Daten, ERP/CRM, Maschinen-/Sensordaten, zentrale Plattform, hohe Datenqualität.",
        "ptext": "Moderne Unternehmen erzeugen große Datenmengen aus unterschiedlichen Quellen und Systemen. Um diese effektiv zu nutzen, braucht es zentrale Plattformen und definierte Qualitätskriterien."
    },
    {
        "title": "Big Data",
        "textVertical": "Immer größere Datenmengen in Unternehmen",
        "textHorizontal": "Zahlen, Texte, Bilder, Protokolle, Logfiles, Messwerte, Kundendaten, Produktionsdaten",
        "ptext": "Unternehmen sammeln stetig wachsende Datenmengen in unterschiedlichsten Formaten. Die Menge wächst oft schneller als die Fähigkeit, sie auszuwerten."
    },
    {
        "title": "Unterschiedliche Datenquellen",
        "textVertical": "Vielfalt an Systemen und Formaten",
        "textHorizontal": "Struktur unterschiedlich, Formate unterschiedlich, Qualität unterschiedlich",
        "ptext": "Daten stammen aus vielen internen und externen Quellen und sind oft unterschiedlich strukturiert oder formatiert. Das erschwert die einheitliche Verarbeitung."
    },
    {
        "title": "Interne & externe Datenquellen",
        "textVertical": "Woher die Daten kommen",
        "textHorizontal": "Intern: ERP, CRM, Finanzbuchhaltung, Produktionssysteme; Extern: Lieferanten, Marktdaten, Web-APIs, Wetter, Social Media",
        "ptext": "Interne Daten kommen aus den Systemen des Unternehmens, externe Daten von Partnern, Lieferanten, APIs oder der Öffentlichkeit. Beide müssen integriert werden."
    },
    {
        "title": "ERP- und CRM-Systeme",
        "textVertical": "Wichtige Unternehmenssysteme",
        "textHorizontal": "ERP = Ressourcen & Prozesse; CRM = Kundenbeziehungen",
        "ptext": "ERP-Systeme verwalten Einkauf, Produktion, Lager, Buchhaltung. CRM-Systeme verwalten Kundendaten, Verkauf, Marketing. Beide speichern wichtige Daten, oft in unterschiedlichen Formaten."
    },
    {
        "title": "Maschinen- und Sensordaten",
        "textVertical": "Industrie 4.0 Daten",
        "textHorizontal": "Temperatur, Druck, Feuchtigkeit, Geschwindigkeit, Laufzeiten, Fehlermeldungen",
        "ptext": "Maschinen und Sensoren erzeugen in der Industrie große Mengen an Echtzeitdaten, die für Analysen, Wartung und Optimierung genutzt werden können."
    },
    {
        "title": "Zentraler Zugriffspunkt (Single Point of Truth)",
        "textVertical": "Alle Daten an einem Ort",
        "textHorizontal": "Data Warehouse, Data Lake, zentrale Datenplattform, Cloud-Plattform (Azure, AWS, Google Cloud)",
        "ptext": "Ein zentraler Zugriffspunkt erleichtert Analyse, Berichte, Business Intelligence, KI-Anwendungen und Entscheidungen. Alle relevanten Daten werden zusammengeführt."
    },
    {
        "title": "Datenqualität",
        "textVertical": "Qualitätskriterien für nutzbare Daten",
        "textHorizontal": "Vollständigkeit, Richtigkeit, Aktualität, Eindeutigkeit, Konsistenz, Zuverlässigkeit",
        "ptext": "Damit Daten sinnvoll genutzt werden können, müssen sie vollständig, korrekt, aktuell, eindeutig, konsistent und zuverlässig sein. Schlechte Daten führen zu falschen Analysen, schlechten Entscheidungen und hohen Kosten."
    },
    {
        "title": "Qualitätsmerkmale von Daten",
        "textVertical": "Daten müssen bestimmte Kriterien erfüllen, um nutzbar zu sein.",
        "textHorizontal": "Relevance, Timeliness, Accessibility, Completeness, Clarity, Accuracy",
        "ptext": "Datenqualität beschreibt, inwieweit Daten für die beabsichtigte Nutzung geeignet sind. Die wichtigsten Merkmale sind Relevanz, Aktualität, Zugänglichkeit, Vollständigkeit, Klarheit und Genauigkeit."
    },
    {
        "title": "Relevance (Relevanz)",
        "textVertical": "Daten müssen für den Zweck nützlich sein.",
        "textHorizontal": "Nur relevante Daten helfen bei Entscheidungen.",
        "ptext": "Beispiel: Für eine Rabattaktion sind Kaufgewohnheiten der Kunden relevant, nicht deren Schuhgröße."
    },
    {
        "title": "Timeliness (Aktualität / Zeitnähe)",
        "textVertical": "Daten müssen rechtzeitig verfügbar sein.",
        "textHorizontal": "Daten müssen den aktuellen Zustand widerspiegeln.",
        "ptext": "Beispiel: Lagerbestände müssen immer aktuell sein, sonst drohen Überbestellungen oder Engpässe."
    },
    {
        "title": "Accessibility (Zugänglichkeit)",
        "textVertical": "Daten müssen leicht erreichbar sein.",
        "textHorizontal": "Jeder, der sie braucht, sollte sie abrufen können.",
        "ptext": "Beispiel: Wenn ein Mitarbeiter Kundendaten nicht abrufen kann, nutzt das vorhandene Datenmaterial niemandem."
    },
    {
        "title": "Completeness (Vollständigkeit)",
        "textVertical": "Alle benötigten Informationen müssen vorhanden sein.",
        "textHorizontal": "Unvollständige Daten machen Analysen unzuverlässig.",
        "ptext": "Beispiel: Ein Kundenprofil ohne E-Mail-Adresse ist unvollständig für Newsletterversand."
    },
    {
        "title": "Clarity (Klarheit / Verständlichkeit)",
        "textVertical": "Daten müssen eindeutig und verständlich dargestellt sein.",
        "textHorizontal": "Keine verwirrenden Abkürzungen oder unklare Strukturen.",
        "ptext": "Beispiel: Tabellen mit unverständlichen Abkürzungen haben niedrige Klarheit."
    },
    {
        "title": "Accuracy (Genauigkeit / Korrektheit)",
        "textVertical": "Daten müssen korrekt und fehlerfrei sein.",
        "textHorizontal": "Falsche Daten führen direkt zu falschen Entscheidungen.",
        "ptext": "Beispiel: Ein Mitarbeiter steht im System als „aktiv“, obwohl er gekündigt hat → ungenaue Daten."
    },
    {
        "title": "Datenqualität – Definition",
        "textVertical": "Datenqualität beschreibt, wie gut Daten sinnvoll genutzt werden können.",
        "textHorizontal": "Je höher die Datenqualität, desto zuverlässiger sind Auswertungen, Entscheidungen, Prozesse und Analysen.",
        "ptext": "Datenqualität ist ein Maß dafür, wie geeignet Daten für Verarbeitung, Analyse und Interpretation sind."
    },
    {
        "title": "Beispiele für schlechte Datenqualität",
        "textVertical": "Typische Probleme bei mangelhafter Datenqualität.",
        "textHorizontal": "Unvollständig, veraltet, inkonsistent, ungenau, doppelte Datensätze, nicht zugänglich",
        "ptext": "Beispiele: Adresse ohne Postleitzahl, Lagerbestand nicht aktualisiert, doppelte Kunden, Zahlendreher, Daten nur lokal gespeichert."
    },
    {
        "title": "Relevance (Relevanz)",
        "textVertical": "Daten müssen für den Zweck geeignet sein.",
        "textHorizontal": "Nur nützliche Daten helfen bei Entscheidungen.",
        "ptext": "Beispiel: Für eine Marketingaktion sind Kaufhistorien relevant – nicht die Schuhgröße."
    },
    {
        "title": "Timeliness (Aktualität)",
        "textVertical": "Daten müssen auf aktuellem Stand sein.",
        "textHorizontal": "Nicht-aktuelle Daten führen zu falschen Entscheidungen.",
        "ptext": "Beispiel: Lagerbestand wird täglich aktualisiert, um Überbestellungen zu vermeiden."
    },
    {
        "title": "Accessibility (Zugänglichkeit)",
        "textVertical": "Daten müssen leicht auffindbar und zugänglich sein.",
        "textHorizontal": "Alle, die sie benötigen, sollen darauf zugreifen können.",
        "ptext": "Beispiel: Zentraler Zugriff über ein Data Warehouse erleichtert Nutzung und Analyse."
    },
    {
        "title": "Completeness (Vollständigkeit)",
        "textVertical": "Alle benötigten Informationen müssen vorhanden sein.",
        "textHorizontal": "Fehlende Werte machen Analysen unzuverlässig.",
        "ptext": "Beispiel: Kundenstammdaten enthalten Name, Adresse, E-Mail und Telefonnummer."
    },
    {
        "title": "Clarity (Klarheit / Verständlichkeit)",
        "textVertical": "Daten müssen eindeutig und übersichtlich dargestellt sein.",
        "textHorizontal": "Keine verwirrenden Abkürzungen oder kryptischen Spaltennamen.",
        "ptext": "Beispiel: Spaltenname „Preis_brutto“ statt „P1“."
    },
    {
        "title": "Accuracy (Genauigkeit / Korrektheit)",
        "textVertical": "Daten müssen fehlerfrei und korrekt sein.",
        "textHorizontal": "Falsche Daten führen direkt zu falschen Entscheidungen.",
        "ptext": "Beispiel: Messwerte ohne Zahlendreher, z. B. 120 statt 210."
    },
    {
        "title": "Kurz-Zusammenfassung",
        "textVertical": "Wichtige Punkte zur Datenqualität für Prüfungen.",
        "textHorizontal": "Kriterien: Relevanz, Aktualität, Zugänglichkeit, Vollständigkeit, Klarheit, Genauigkeit",
        "ptext": "Mangelhafte Datenqualität zeigt sich durch fehlende Werte, veraltete Informationen, doppelte Datensätze, Inkonsistenzen oder ungenaue Messwerte."
    },
    {
        "title": "Daten bewerten – Zweck",
        "textVertical": "Daten müssen vor Nutzung bewertet werden.",
        "textHorizontal": "Bewertung anhand von Qualitätskriterien: Korrektheit, Aktualität, Genauigkeit, Konsistenz, Redundanzfreiheit, Relevanz, Einheitlichkeit, Zuverlässigkeit.",
        "ptext": "Nur bewertete Daten können sinnvoll zusammengeführt und verarbeitet werden."
    },
    {
        "title": "Korrektheit",
        "textVertical": "Daten müssen richtig und wahrheitsgemäß sein.",
        "textHorizontal": "Beispiel: Kunde „Hans Meier“ darf nicht als „Meir“ gespeichert sein.",
        "ptext": "Korrekte Daten verhindern Fehler in Analysen und Prozessen."
    },
    {
        "title": "Aktualität",
        "textVertical": "Daten müssen auf dem neuesten Stand sein.",
        "textHorizontal": "Beispiel: Telefonnummer aktuell, Adressen korrekt.",
        "ptext": "Nur aktuelle Daten führen zu verlässlichen Entscheidungen."
    },
    {
        "title": "Genauigkeit (Accuracy)",
        "textVertical": "Daten müssen präzise sein.",
        "textHorizontal": "Beispiel: Temperatur = 22,4°C statt ungefähr 22°C.",
        "ptext": "Genauigkeit verhindert Rundungs- und Schätzfehler."
    },
    {
        "title": "Konsistenz",
        "textVertical": "Daten dürfen sich nicht widersprechen.",
        "textHorizontal": "Beispiel: „Müller“ in allen Systemen gleich geschrieben.",
        "ptext": "Widerspruchsfreie Daten gewährleisten Vertrauen und Vergleichbarkeit."
    },
    {
        "title": "Redundanzfreiheit",
        "textVertical": "Keine doppelten Datensätze.",
        "textHorizontal": "Beispiel: Kunde nur einmal in der Datenbank.",
        "ptext": "Doppelte Daten führen zu Verwirrung und fehlerhaften Analysen."
    },
    {
        "title": "Relevanz",
        "textVertical": "Daten müssen zweckbezogen sein.",
        "textHorizontal": "Beispiel: Umsatzdaten für Analyse, Geburtsdaten für Umsatzanalyse irrelevant.",
        "ptext": "Nur relevante Daten helfen bei Entscheidungen."
    },
    {
        "title": "Einheitlichkeit",
        "textVertical": "Daten müssen in gleichen Formaten und Schreibweisen vorliegen.",
        "textHorizontal": "Beispiel: Datumsformat YYYY-MM-DD, Gewicht in kg.",
        "ptext": "Einheitliche Daten erleichtern Zusammenführung und Verarbeitung."
    },
    {
        "title": "Zuverlässigkeit",
        "textVertical": "Daten müssen aus vertrauenswürdigen Quellen stammen.",
        "textHorizontal": "Beispiel: ERP-System-Daten sind stabiler als alte Excel-Liste.",
        "ptext": "Zuverlässige Daten verhindern Fehlentscheidungen."
    },
    {
        "title": "Verständlichkeit (Clarity)",
        "textVertical": "Daten müssen klar, eindeutig und nachvollziehbar sein.",
        "textHorizontal": "Beispiel: Spaltennamen „Preis_brutto“ statt „P1“.",
        "ptext": "Klare Daten erleichtern Nutzung, Analyse und Interpretation."
    },
    {
        "title": "Vollständigkeit",
        "textVertical": "Keine fehlenden Werte.",
        "textHorizontal": "Beispiel: Kundenprofil enthält Name, Adresse, Kontakt.",
        "ptext": "Unvollständige Daten machen Analysen unzuverlässig."
    },
    {
        "title": "Verfügbarkeit",
        "textVertical": "Daten müssen jederzeit zugänglich sein.",
        "textHorizontal": "Beispiel: zentraler Server liefert Daten rund um die Uhr.",
        "ptext": "Fehlende Verfügbarkeit verhindert effiziente Nutzung."
    },
    {
        "title": "Zugänglichkeit (Accessibility)",
        "textVertical": "Daten müssen leicht abrufbar sein für berechtigte Personen.",
        "textHorizontal": "Beispiel: Cloud-System oder Datenbank mit Rollen- und Rechteverwaltung.",
        "ptext": "Gute Accessibility ermöglicht schnelle und effektive Nutzung."
    },
    {
        "title": "Daten zusammenführen (Data Integration) – Schritte",
        "textVertical": "Schritte zur Integration mehrerer Datenquellen.",
        "textHorizontal": "1. Daten sammeln 2. Vereinheitlichen 3. Dubletten entfernen 4. Daten bereinigen 5. In Zielsystem integrieren",
        "ptext": "Beispiel Zielsysteme: Data Warehouse, zentrale Datenbank, Cloud-Plattform."
    },
    {
        "title": "Auswahlkriterien für Daten",
        "textVertical": "Welche Daten genutzt werden, hängt von Qualitätskriterien ab.",
        "textHorizontal": "Kriterien: Korrektheit, Aktualität, Genauigkeit, Konsistenz, Redundanzfreiheit, Relevanz, Einheitlichkeit, Zuverlässigkeit, Verständlichkeit, Vollständigkeit, Verfügbarkeit/Zugänglichkeit.",
        "ptext": "Nur Daten, die diese Kriterien erfüllen oder bereinigt werden können, werden ausgewählt."
    },
    {
        "title": "Daten bewerten",
        "textVertical": "Prüfen, ob Daten für Analyse oder Integration geeignet sind.",
        "textHorizontal": "Schritte: 1. Analyse nach Qualitätskriterien 2. Kennzahlen/Metriken erstellen 3. Ergebnisse dokumentieren",
        "ptext": "Beispiel Kennzahlen: % vollständige Datensätze, % korrekte Einträge, Anzahl Dubletten."
    },
    {
        "title": "Daten zusammenführen",
        "textVertical": "Daten aus unterschiedlichen Quellen vereinheitlichen und zentral bereitstellen.",
        "textHorizontal": "Schritte: 1. Sammeln 2. Standardisieren 3. Dubletten entfernen 4. Fehler bereinigen 5. Integration ins Zielsystem 6. Validierung",
        "ptext": "Zielsysteme: Data Warehouse, Data Lake, zentrale Datenbank."
    },
    {
        "title": "Datenqualität verbessern & dauerhaft sichern",
        "textVertical": "Regelmäßige Maßnahmen, um Daten langfristig nutzbar zu halten.",
        "textHorizontal": "a) Analyse/Profiling b) Bereinigung/Data Cleansing c) Monitoring/Laufende Kontrolle",
        "ptext": "Ziel: Daten bleiben korrekt, vollständig, aktuell und nutzbar."
    },
    {
        "title": "Konsistenz von Daten",
        "textVertical": "Daten müssen überall übereinstimmen und widerspruchsfrei sein.",
        "textHorizontal": "Beispiel: Kundenname „Müller“ in ERP, CRM, Lagerverwaltung identisch. Artikelnummer „A123“ beschreibt überall dasselbe Produkt.",
        "ptext": "Konsistente Daten verhindern Fehler, ermöglichen korrekte Analysen und reibungslose Systemintegration."
    },
    {
        "title": "Beispiele für inkonsistente Daten",
        "textVertical": "Was passiert bei fehlender Konsistenz?",
        "textHorizontal": "Beispiele: In System A „Müller“, in System B „Mueller“; Artikel „A123“ unterschiedliche Preise in ERP & Online-Shop; CRM aktualisiert, ERP veraltet.",
        "ptext": "Fehlerhafte Daten führen zu falschen Entscheidungen und Problemen bei Integration."
    },
    {
        "title": "Konsistenz sicherstellen",
        "textVertical": "Methoden, um widerspruchsfreie Daten zu gewährleisten.",
        "textHorizontal": "Regeln & Standards: Einheitliche Schreibweisen, Formate, Codes. Automatische Prüfungen. Datenbereinigung. Zentrale Datenverwaltung (Data Warehouse, MDM).",
        "ptext": "Damit werden Daten in allen Systemen identisch und verlässlich."
    },
    {
        "title": "Kurz-Merksatz Konsistenz",
        "textVertical": "Prüfungsrelevant & kompakt",
        "textHorizontal": "Konsistenz = Daten widerspruchsfrei & in allen Systemen identisch → Grundlage für korrekte Analysen und verlässliche Entscheidungen.",
        "ptext": ""
    },
    {
        "title": "Datenquellen abrufen",
        "textVertical": "Daten kommen aus unterschiedlichen Quellen, primär oder sekundär.",
        "textHorizontal": "Primär: direkt aus der Originalquelle, erstmalige Erfassung. Sekundär: aus bereits vorhandenen Datenbeständen, weiterverwendet.",
        "ptext": ""
    },
    {
        "title": "Primäre Datenquelle",
        "textVertical": "Daten werden direkt am Entstehungsort erfasst.",
        "textHorizontal": "Beispiele: Eingabedaten (Formulare, Umfragen), Maschinendaten, Sensordaten, Web-Recherche, E-Mails, Beobachtung, Interviews.",
        "ptext": "Merkmal: Daten stammen direkt aus der Quelle und werden erstmalig erhoben."
    },
    {
        "title": "Sekundäre Datenquelle",
        "textVertical": "Daten werden aus bereits vorhandenen Quellen übernommen.",
        "textHorizontal": "Beispiele: Cloud-Daten, Datenbanken/Data Warehouse, Berichte/Analysen, externe Datenbanken.",
        "ptext": "Merkmal: Daten werden nicht erstmals erfasst, sondern zur Weiterverarbeitung oder Analyse genutzt."
    },
    {
        "title": "Kurz-Merksatz Datenquellen",
        "textVertical": "Einprägsam für Prüfung oder Notizen",
        "textHorizontal": "Primärdaten: direkt aus der Quelle (Eingaben, Sensoren, Interviews, Beobachtung). Sekundärdaten: aus bestehenden Datenbeständen (Cloud, Datenbanken, Reports).",
        "ptext": ""
    },
    {
        "title": "Open Data",
        "textVertical": "Frei zugängliche Daten für alle, oft maschinenlesbar und kostenlos.",
        "textHorizontal": "Eigenschaften: Jeder kann zugreifen, meist gut strukturiert (CSV, JSON, XML), oft kostenlos, Nutzung/Weitergabe erlaubt (offene Lizenz).",
        "ptext": "Beispiele: Wetterdaten, Verkehrs- oder Geodaten, Statistiken von Ämtern, Open-Access-Forschungsergebnisse."
    },
    {
        "title": "Closed Data",
        "textVertical": "Nicht frei zugängliche Daten, Nutzung eingeschränkt oder kostenpflichtig.",
        "textHorizontal": "Eigenschaften: Zugriff nur für Berechtigte, teilweise unstrukturiert oder proprietär, Nutzung kostenpflichtig oder intern, urheberrechtlich geschützt.",
        "ptext": "Beispiele: Unternehmensinterne Kundendaten (CRM), Finanzdaten, Produktionsdaten, geschützte Forschungsergebnisse."
    },
    {
        "title": "Open vs. Closed Data – Merksatz",
        "textVertical": "Kurzvergleich für Prüfung und Notizen",
        "textHorizontal": "Open Data: frei zugänglich, strukturiert, kostenlos, offene Lizenz. Closed Data: eingeschränkt, oft proprietär, kostenpflichtig, urheberrechtlich geschützt.",
        "ptext": ""
    },
    {
        "title": "CSV – Comma Separated Values",
        "textVertical": "Einfaches Textformat für tabellarische Daten",
        "textHorizontal": "Eigenschaften: flach/tabellarisch, universell lesbar, maschinenverarbeitbar, keine Hierarchien.",
        "ptext": "Beispiele: Kundenlisten (Name,Email,Telefon), Produktkataloge (Artikelnummer,Bezeichnung,Preis)."
    },
    {
        "title": "XML – Extensible Markup Language",
        "textVertical": "Hierarchisches, textbasiertes Format",
        "textHorizontal": "Eigenschaften: verschachtelte Daten, maschinen- und menschenlesbar, geeignet für komplexe Strukturen.",
        "ptext": "Beispiele: <kunde><name>Hans Müller</name></kunde>, ERP-Datenaustausch, SOAP-Webservices."
    },
    {
        "title": "JSON – JavaScript Object Notation",
        "textVertical": "Leichtgewichtiges, hierarchisches Format für Web/Apps",
        "textHorizontal": "Eigenschaften: kompakt, maschinen- und menschenlesbar, Key-Value-Paare, Arrays, verschachtelbar, Parser nötig.",
        "ptext": "Beispiele: {\"name\": \"Hans Müller\", \"email\": \"h.mueller@example.com\"}, REST-APIs, Konfigurationsdaten."
    },
    {
        "title": "Datenprotokolle – FTP",
        "textVertical": "File Transfer Protocol",
        "textHorizontal": "Dateiübertragung zwischen Computern, Client-Server, standardmäßig unverschlüsselt (SFTP/FTPS sicher).",
        "ptext": "Beispiel: Upload von Entwicklungsdateien auf zentralen Server."
    },
    {
        "title": "Datenprotokolle – HTTPS",
        "textVertical": "HyperText Transfer Protocol Secure",
        "textHorizontal": "Verschlüsselte Datenübertragung im Web, Standardprotokoll für Webseiten und APIs.",
        "ptext": "Beispiel: Abruf von Daten über REST-API."
    },
    {
        "title": "Datenprotokolle – NFS",
        "textVertical": "Network File System",
        "textHorizontal": "Gemeinsamer Zugriff auf Dateien über Netzwerk, Linux/Unix-Systeme, Zugriff wie lokal.",
        "ptext": "Beispiel: Gemeinsame Projektordner auf Linux-Server."
    },
    {
        "title": "Datenprotokolle – SMB",
        "textVertical": "Server Message Block",
        "textHorizontal": "Netzwerk-Dateizugriff auf Windows, Dateien/Drucker teilen, Lesen/Schreiben/Teilen möglich.",
        "ptext": "Beispiel: Zugriff auf freigegebene Ordner im Unternehmensnetzwerk."
    },
    {
        "title": "SOAP – Simple Object Access Protocol",
        "textVertical": "Standardisiertes Webservice-Protokoll",
        "textHorizontal": "Eigenschaften: XML-basiert, formell, Transaktionen & Sicherheit, komplexe Operationen.",
        "ptext": "Beispiel: Banksoftware, ERP-Systeme, XML-Transaktionen."
    },
    {
        "title": "REST – Representational State Transfer",
        "textVertical": "Moderne Webservice-Architektur",
        "textHorizontal": "HTTP-Methoden (GET, POST, PUT, DELETE), Daten meist in JSON/XML, einfach, schlank, weit verbreitet.",
        "ptext": "Beispiel: Abruf von Kundendaten über REST-API, Cloud-Dienste."
    },
    {
        "title": "Kurzvergleich – Formate & Protokolle",
        "textVertical": "Überblick",
        "textHorizontal": "CSV: einfach/tabellarisch, XML: hierarchisch, JSON: leichtgewichtig/Web, FTP: Dateiübertragung, HTTPS: verschlüsselte Webübertragung, NFS/SMB: Netzwerkdateien, SOAP: XML, komplex, REST: HTTP, JSON/XML, schlank.",
        "ptext": "Merksatz: CSV = Tabellen, XML = komplex, JSON = leicht & Web, REST = moderne Schnittstelle, SOAP = formal & sicher."
    },
    {
        "title": "Heterogene Datenquellen",
        "textVertical": "Ausgangssituation",
        "textHorizontal": "Daten unterscheiden sich in Format (CSV, JSON, XML, Excel), Struktur (flach/hierarchisch) und Systemen (ERP, CRM, Sensoren, Web-APIs).",
        "ptext": "Ziel: Daten zusammenführen, bereinigen und nutzbar machen."
    },
    {
        "title": "Datenquellen – Primär vs. Sekundär",
        "textVertical": "Definition",
        "textHorizontal": "Primärdaten: direkt an Entstehungsort erfasst (Formulare, Sensoren, Interviews). Sekundärdaten: bereits vorhandene Bestände (Cloud, Datenbanken, Reports).",
        "ptext": "Primärdaten = Originalquelle, Sekundärdaten = Nutzung vorhandener Daten."
    },
    {
        "title": "Open Data vs. Closed Data",
        "textVertical": "Zugänglichkeit & Lizenz",
        "textHorizontal": "Open Data: frei, maschinenlesbar, oft kostenlos, offene Lizenz. Closed Data: eingeschränkt, proprietär, kostenpflichtig, urheberrechtlich geschützt.",
        "ptext": "Beispiele Open: Wetterdaten, Verkehrsdaten. Beispiele Closed: CRM-Kundendaten, interne Produktionsdaten."
    },
    {
        "title": "Datenformate – CSV, XML, JSON",
        "textVertical": "Struktur & Einsatz",
        "textHorizontal": "CSV: flach/tabellarisch, einfach, universell. XML: hierarchisch, flexibel, maschinenlesbar, komplex. JSON: leichtgewichtig, hierarchisch, kompakt, Web & APIs.",
        "ptext": "Merksatz: CSV = einfache Tabellen, XML = komplex & verschachtelt, JSON = kompakt & Web/API-freundlich."
    },
    {
        "title": "JSON Merkmale",
        "textVertical": "Eigenschaften",
        "textHorizontal": "Schlüssel-Werte-Paare in {}, Arrays in [], beliebig verschachtelbar, maschinen- & menschenlesbar.",
        "ptext": "Parser erforderlich, z.B. JSON.parse() / JSON.stringify() in JavaScript."
    },
    {
        "title": "Datenzugriff – Protokolle",
        "textVertical": "Datei- & Webzugriff",
        "textHorizontal": "FTP: Dateiübertragung, unverschlüsselt (SFTP sicher). HTTPS: verschlüsselte Webübertragung, Standard für APIs. NFS: Netzwerkdateizugriff Unix/Linux. SMB: Netzwerkdateien Windows.",
        "ptext": "Beispiele: Upload von Reports (FTP), REST-API Abruf (HTTPS), gemeinsame Projektordner (NFS/SMB)."
    },
    {
        "title": "Webservice-Formate – SOAP & REST",
        "textVertical": "Vergleich",
        "textHorizontal": "SOAP: XML, formell, komplex, sicher. REST: HTTP-Methoden (GET, POST, PUT, DELETE), JSON/XML, einfach, schlank, weit verbreitet.",
        "ptext": "Beispiele: SOAP für Banksoftware, REST für Web-APIs & Cloud-Dienste."
    },
    {
        "title": "Strategien zum Zusammenführen",
        "textVertical": "Top-down / Bottom-up / Hybrid",
        "textHorizontal": "Top-down: zentrale DWH-Struktur definieren, Quellen anpassen. Bottom-up: Quellen bereinigen, dann integrieren. Hybrid: Kombination beider Ansätze.",
        "ptext": "Ziel: saubere, konsistente Daten für Analyse & Reporting."
    },
    {
        "title": "Datenanalyse",
        "textVertical": "Qualität & Verständnis",
        "textHorizontal": "Profiling: fehlende Werte, Inkonsistenzen, Dubletten. Statistische Analyse: Trends, Ausreißer, Verteilungen. Korrelationen zwischen Quellen prüfen.",
        "ptext": "Ziel: Datenqualität prüfen, Inhalte verstehen, Schwächen erkennen."
    },
    {
        "title": "OLAP & Data Mining",
        "textVertical": "Analyse-Techniken",
        "textHorizontal": "OLAP: mehrdimensionale Würfel, schnelle Abfragen, Trends erkennen. Data Mining: Muster in großen Datenmengen, Klassifikation, Clustering, Assoziationsanalyse.",
        "ptext": "Beispiele: Umsatz nach Region/Produkt/Zeitraum (OLAP), Kundensegmente oder Warenkorbanalyse (Data Mining)."
    },
    {
        "title": "Data Warehouse & ETL",
        "textVertical": "Integration",
        "textHorizontal": "DWH: zentrale, bereinigte, historische Datenbank für Analyse. ETL: Extract (Daten abrufen), Transform (bereinigen, vereinheitlichen), Load (ins DWH laden).",
        "ptext": "Typische Quellen: ERP, CRM, Sensoren/IoT, Web-APIs, Excel/CSV, Cloud/DB."
    },
    {
        "title": "Prüfungs-Merksatz – Datenintegration",
        "textVertical": "Schritte",
        "textHorizontal": "1. Strategie wählen (Top-down, Bottom-up, Hybrid). 2. Datenanalyse (Profiling, Statistik, Korrelationen). 3. OLAP / Data Mining. 4. ETL-Prozess.",
        "ptext": "Ziel: saubere, konsistente, analysierbare Daten im DWH."
    },
    {
        "title": "Business Intelligence (BI) Architektur",
        "textVertical": "Definition & Ziel",
        "textHorizontal": "BI-Architektur beschreibt, wie Unternehmen Daten sammeln, speichern, verarbeiten und analysieren, um Entscheidungen abzuleiten.",
        "ptext": "Bestandteile: Datenquellen, Datenintegration, Datenlagerung, Analyse, Reporting."
    },
    {
        "title": "Heterogene Datenquellen für BI",
        "textVertical": "Systeme & Nutzung",
        "textHorizontal": "OLTP-Systeme: transaktionsorientiert, viele Schreib-/Leseoperationen, Detaildaten für Tagesgeschäft. CRM-Systeme: Kundendaten, Interaktionen, Leads für Marketing/Vertrieb. ERP-Systeme: Geschäftsprozesse, Einkauf, Lager, Produktion, Finanzen.",
        "ptext": "Heterogen = unterschiedliche Formate, Strukturen und Systeme; Herausforderung für BI-Integration."
    },
    {
        "title": "ETL – Datenintegration für BI",
        "textVertical": "Extract, Transform, Load",
        "textHorizontal": "Extract: Daten aus OLTP, CRM, ERP abholen. Transform: Daten bereinigen, vereinheitlichen, ggf. neue Felder berechnen. Load: Daten ins Data Warehouse übertragen.",
        "ptext": "Beispiel: Kundendaten aus CRM + Verkaufszahlen aus ERP → vereinheitlichtes Kundenreporting."
    },
    {
        "title": "DWH – Data Warehouse",
        "textVertical": "Zentraler Speicher",
        "textHorizontal": "Speichert historische, bereinigte Daten aus unterschiedlichen Quellen. Optimiert für Abfragen & Analysen, nicht für Transaktionen.",
        "ptext": "Struktur: Star Schema oder Snowflake Schema. Vorteil: alle Daten zentral verfügbar, sauber integriert, analysierbar."
    },
    {
        "title": "OLAP – Online Analytical Processing",
        "textVertical": "Analyse-Technologie",
        "textHorizontal": "Ermöglicht schnelle, multidimensionale Analysen großer Datenmengen. Arbeitet auf DWH-Daten.",
        "ptext": "Beispiel: Umsätze nach Region, Produkt, Quartal. Unterstützt Slice & Dice Analysen."
    },
    {
        "title": "ODS – Operational Data Store",
        "textVertical": "Zwischenspeicher",
        "textHorizontal": "Speichert aktuelle, konsolidierte Daten aus OLTP-Systemen. Kürzerer Zeithorizont als DWH, meist nur aktuelle Daten.",
        "ptext": "Einsatz: Tagesaktuelle Reports. Unterschied DWH vs. ODS: DWH = historisch & analytisch, ODS = aktuell & operativ."
    },
    {
        "title": "KPI – Key Performance Indicators",
        "textVertical": "Messgrößen",
        "textHorizontal": "KPIs überwachen den Erfolg eines Unternehmens. Beispiele: Umsatz, Gewinnmarge, Kundenzufriedenheit.",
        "ptext": "Werden aus DWH/OLAP-Daten berechnet und dienen als Grundlage für BI-Reports und Managemententscheidungen."
    },
    {
        "title": "BI Prozessfluss",
        "textVertical": "Vom System zur Entscheidung",
        "textHorizontal": "1. Daten entstehen in OLTP-, CRM- oder ERP-Systemen. 2. ETL überträgt sie in ODS und DWH. 3. OLAP ermöglicht schnelle Analysen.",
        "ptext": "4. KPIs werden berechnet → Grundlage für BI-Reports & Managemententscheidungen."
    },
    {
        "title": "Technische Heterogenität",
        "textVertical": "Unterschiedliche Systeme & Plattformen",
        "textHorizontal": "Daten liegen auf verschiedenen Systemen, z. B. SQL vs. NoSQL, CSV vs. XML. Zugriff & Verbindung unterschiedlich.",
        "ptext": "Lösung: ETL-Prozesse, Adapter oder APIs zum Datenabruf."
    },
    {
        "title": "Syntaktische Heterogenität",
        "textVertical": "Unterschiedliche Datenformate",
        "textHorizontal": "Beispiele: Datumsangaben YYYY-MM-DD vs. DD.MM.YYYY, Dezimalzahlen 1234.56 vs. 1.234,56. Ohne Umwandlung keine korrekte Zusammenführung.",
        "ptext": "Lösung: Transformation der Daten via ETL in ein einheitliches Format."
    },
    {
        "title": "Heterogenität der Datenmodelle",
        "textVertical": "Unterschiedliche Tabellenstrukturen",
        "textHorizontal": "Beispiele: Tabelle A = Vorname/Nachname, Tabelle B = Name/Geschlecht. Relationen zwischen Tabellen unterschiedlich modelliert.",
        "ptext": "Lösung: Mapping der Felder & Anpassung der Modelle im Data Warehouse."
    },
    {
        "title": "Strukturelle Heterogenität",
        "textVertical": "Unterschiedliche interne Organisation",
        "textHorizontal": "Beispiel: CRM A speichert Telefonnummer als +49123456789, CRM B trennt Vorwahl und Nummer in mehreren Spalten.",
        "ptext": "Lösung: Transformation der Daten, z. B. Spalten splitten oder zusammenführen."
    },
    {
        "title": "Semantische Heterogenität",
        "textVertical": "Unterschiedliche Bedeutung von Daten",
        "textHorizontal": "Beispiele: Status '1' = aktiv vs. in Bearbeitung, Begriff 'Kunde' = Privatkunde vs. Geschäftskunde.",
        "ptext": "Lösung: Harmonisierung & Standardisierung der Semantik über Metadaten, Dictionaries oder Data Governance."
    },
    {
        "title": "Ziel beim Zusammenführen heterogener Daten",
        "textVertical": "Einheitliche, analysierbare Daten",
        "textHorizontal": "Erforderlich: Technische Unterschiede überwinden, Formate vereinheitlichen, Datenmodelle & Strukturen anpassen, semantische Unterschiede klären.",
        "ptext": "Ziel: Korrekte, konsistente und nutzbare Daten für BI & Reporting."
    },
    {
        "title": "Physische / Materialisierte Integration",
        "textVertical": "Daten kopieren ins zentrale System",
        "textHorizontal": "Daten liegen zentral im DWH, historische Analysen möglich, schnelle Abfragen, hoher Speicherbedarf, ETL notwendig.",
        "ptext": "Beispiel: ETL-Prozess lädt Verkaufsdaten aus OLTP, CRM und ERP in ein Data Warehouse."
    },
    {
        "title": "Virtuelle Integration",
        "textVertical": "Daten bleiben in den Quellsystemen",
        "textHorizontal": "Daten werden in Echtzeit abgefragt, keine doppelte Speicherung, aktuelle Daten, Performance abhängig von Quellsystemen.",
        "ptext": "Beispiel: BI-Tool erstellt Bericht direkt aus ERP- und CRM-System ohne DWH."
    },
    {
        "title": "Logische Integration",
        "textVertical": "Daten werden logisch zusammengeführt",
        "textHorizontal": "Integration erfolgt über Views, Mapping oder Abfragen, flexibel, keine redundante Speicherung, Performance hängt von Quellen ab.",
        "ptext": "Beispiel: Virtuelle Sicht auf Kunden- und Verkaufsdaten aus unterschiedlichen Systemen."
    },
    {
        "title": "Hybrid-Integration",
        "textVertical": "Kombination physisch & virtuell",
        "textHorizontal": "Historische Daten physisch im DWH, aktuelle Tagesdaten aus ODS oder Echtzeitquellen virtuell abgefragt, flexibel und umfassend.",
        "ptext": "Beispiel: Trendanalyse mit DWH + Echtzeit-Reporting aus ODS."
    },
    {
        "title": "Vorteile der Datenintegration",
        "textVertical": "Nutzen für Unternehmen",
        "textHorizontal": "Zentrale Sicht: alle Daten an einem Ort, Konsistenz: einheitliche Formate, Bessere Entscheidungen durch vollständige KPIs, Effizienz durch automatisierte Zusammenführung, historische Analysen möglich.",
        "ptext": "Ermöglicht schnelle, konsistente Analysen und fundierte Geschäftsentscheidungen."
    },
    {
        "title": "Herausforderungen der Datenintegration",
        "textVertical": "Probleme & Risiken",
        "textHorizontal": "Aufwendig: ETL planen & warten, Kosten: Software/Hardware/Personal, Datenaktualität: Verzögerungen bei physischer Integration, Komplexität: heterogene Quellen/Strukturen, Qualitätsprobleme: fehlerhafte Transformation.",
        "ptext": "Datenintegration erfordert sorgfältige Planung, um korrekte und aktuelle Analysen sicherzustellen."
    },
    {
        "title": "Data Warehouse (DWH)",
        "textVertical": "Zentrales Analyse-Speichersystem",
        "textHorizontal": "Konsolidiert Daten aus verschiedenen Quellen (OLTP, CRM, ERP), speichert historische Daten, optimiert für Analysen, Strukturen: Star-/Snowflake-Schema.",
        "ptext": "Zweck: Grundlage für OLAP-Analysen, Reports und KPI-Berechnungen."
    },
    {
        "title": "Data Mart",
        "textVertical": "Themenspezifischer Ausschnitt des DWH",
        "textHorizontal": "Fokus auf Fachbereich (Marketing, Vertrieb, Finanzen), schneller Zugriff, geringere Datenmengen, kann aus DWH gespeist werden.",
        "ptext": "Vorteil: Schnellere Abfragen und einfacher zu handhaben für Fachbereiche."
    },
    {
        "title": "OLAP – Online Analytical Processing",
        "textVertical": "Mehrdimensionale Analysen großer Datenmengen",
        "textHorizontal": "Funktionen: Slice & Dice, Drill-Down/Up, Pivot; schnelle Aggregationen; Analyse nach Dimensionen wie Zeit, Produkt, Region.",
        "ptext": "Beispiel: Umsatz nach Region → Drill-Down auf Städte → Slice nach Produktgruppe."
    },
    {
        "title": "Business Intelligence (BI)",
        "textVertical": "Übergeordneter Prozess für entscheidungsrelevante Informationen",
        "textHorizontal": "Nutzen von DWH, Data Marts, OLAP, Data Mining/Web Mining; Ziel: fundierte, datenbasierte Entscheidungen, Trends erkennen.",
        "ptext": "Bestandteile: Datenintegration, Analyse, Reporting; unterstützt strategische & operative Entscheidungen."
    },
    {
        "title": "BI-System",
        "textVertical": "Technische Umsetzung von BI",
        "textHorizontal": "Besteht aus Software, Datenbanken, Werkzeugen für Analyse & Reporting; beinhaltet ETL, OLAP, Data Mining, Dashboards.",
        "ptext": "Benutzerschnittstellen für Fachanwender ermöglichen direkte Nutzung der Analyseergebnisse."
    },
    {
        "title": "Reports & Dashboards",
        "textVertical": "Informationsbereitstellung",
        "textHorizontal": "Reports: standardisierte KPIs, automatisch verteilt; Dashboards: grafische Visualisierung, Echtzeit- oder periodische Aktualisierung.",
        "ptext": "Beispiel: Monatsbericht über Verkäufe und Gewinn; Vorteil: schneller Überblick über Geschäftssituation."
    },
    {
        "title": "Data Mining & Web Mining",
        "textVertical": "Entdeckung von Mustern und Trends",
        "textHorizontal": "Data Mining: Analyse großer Datenmengen, Muster/Trends, Cross-Selling; Web Mining: Analyse von Internet- und Web-Daten (Logfiles, Klickverhalten).",
        "ptext": "Ziel: Erkenntnisse gewinnen, die in einfachen Reports nicht sichtbar sind."
    },
    {
        "title": "Datenanalyse",
        "textVertical": "Methoden zur Informationsgewinnung",
        "textHorizontal": "Statistische Analysen, OLAP-Abfragen, Data Mining/Web Mining, Visualisierung über Dashboards; Ziel: fundierte Entscheidungen treffen.",
        "ptext": "Ermöglicht Chancen erkennen und Risiken minimieren."
    },
    {
        "title": "OLAP-Cube",
        "textVertical": "Mehrdimensionales Datenmodell",
        "textHorizontal": "Organisiert Daten nicht flach, sondern in Dimensionen (z. B. Zeit, Produkt, Region) und Fakten (Umsatz, Gewinn), Aggregationen vorab berechnet.",
        "ptext": "Unterstützt schnelle Analysen über Slice & Dice, Drill-Down, Pivot."
    },
    {
        "title": "MOLAP – Multidimensional OLAP",
        "textVertical": "Cube-basierte OLAP-Technologie",
        "textHorizontal": "Daten werden in voraggregierten multidimensionalen Cubes gespeichert, Kreuzprodukt aller Wertebereiche der Dimensionen wird erstellt.",
        "ptext": "Vorteile: sehr schnelle Abfragen, kompakte Speicherung; Nachteile: hoher Speicherbedarf, eingeschränkte Flexibilität bei Änderungen."
    },
    {
        "title": "Klasse",
        "textVertical": "Bauplan für Objekte.",
        "textHorizontal": "Eine Klasse definiert Daten und Methoden, beschreibt also, wie ein Objekt aussehen kann und was es tun kann.",
        "ptext": "Eine Klasse ist in Java eine Schablone oder ein Bauplan. Sie legt fest, welche Variablen (Daten) und Methoden (Aktionen) ein Objekt haben kann. Beispiel: class Auto { String farbe; int geschwindigkeit; void fahren() { System.out.println(\"Das Auto fährt.\"); } }"
    },
    {
        "title": "Objekt",
        "textVertical": "Exemplar einer Klasse.",
        "textHorizontal": "Ein Objekt ist ein konkretes Exemplar einer Klasse, das im Programm existiert.",
        "ptext": "Ein Objekt wird aus einer Klasse erstellt und existiert im Programm als konkrete Instanz. Beispiel: Auto meinAuto = new Auto(); Jetzt existiert ein echtes Auto in deinem Programm."
    },
    {
        "title": "main-Methode",
        "textVertical": "Startpunkt eines Java-Programms.",
        "textHorizontal": "Die main-Methode ist erforderlich, damit Java ein Programm ausführen kann.",
        "ptext": "public static void main(String[] args) { ... } ist der Einstiegspunkt für Java-Programme. public = sichtbar, static = gehört zur Klasse, void = gibt nichts zurück, String[] args = Eingaben über Kommandozeile."
    },
    {
        "title": "Datentyp int",
        "textVertical": "Ganzzahlen speichern.",
        "textHorizontal": "int speichert ganze Zahlen ohne Nachkommastellen.",
        "ptext": "int ist ein Datentyp für ganze Zahlen, z.B. int alter = 30;. Bereich: ca. −2 Milliarden bis +2 Milliarden."
    },
    {
        "title": "Datentyp double",
        "textVertical": "Dezimalzahlen speichern.",
        "textHorizontal": "double speichert Zahlen mit Nachkommastellen.",
        "ptext": "double ist ein Datentyp für Fließkommazahlen, z.B. double pi = 3.1415;. Es wird für mathematische Berechnungen mit Nachkommastellen verwendet."
    },
    {
        "title": "Datentyp float",
        "textVertical": "Dezimalzahlen mit weniger Genauigkeit.",
        "textHorizontal": "float speichert Zahlen mit Nachkommastellen, ist weniger genau als double.",
        "ptext": "float ist ein Fließkomma-Datentyp. Beispiel: float pi = 3.14f;. Man muss das f anhängen. In der Praxis wird meist double verwendet."
    },
    {
        "title": "Datentyp char",
        "textVertical": "Einzelnes Zeichen speichern.",
        "textHorizontal": "char speichert genau ein Zeichen in einfachen Anführungszeichen.",
        "ptext": "Beispiel: char initial = 'I'; char buchstabe = 'A'; Char eignet sich für einzelne Buchstaben oder Symbole."
    },
    {
        "title": "final",
        "textVertical": "Konstante Werte.",
        "textHorizontal": "final macht Variablen unveränderbar.",
        "ptext": "Mit final kann eine Variable nicht mehr verändert werden. Beispiel: final double PI = 3.1415;. Wird fast immer in Großbuchstaben geschrieben."
    },
    {
        "title": "Dateien und Klassen in Java",
        "textVertical": "Regeln für Klassen und Dateien.",
        "textHorizontal": "Pro Datei darf nur eine öffentliche Klasse existieren, die Dateiname = Klassenname.",
        "ptext": "In einer Java-Datei darf nur eine public class stehen. Der Dateiname muss gleich dem Klassennamen sein. Andere Klassen in derselben Datei dürfen nicht public sein."
    },
    {
        "title": "Modulo-Operator %",
        "textVertical": "Rest einer Division.",
        "textHorizontal": "Mit % kann man den Rest einer Division berechnen.",
        "ptext": "Beispiel: int rest = 10 % 3; → Ergebnis 1. Nützlich für gerade/ungerade Zahlen, Zeitberechnungen oder Schleifen."
    },
    {
        "title": "printf-Formatierung",
        "textVertical": "Zahlen und Strings formatieren.",
        "textHorizontal": "%.2f für Dezimalzahlen, %s für Strings, %n für Zeilenumbruch.",
        "ptext": "Beispiel: System.out.printf(\"Wert: %.2f%n\", 3.141592); → Ausgabe: Wert: 3.14. %s = String einsetzen, %d = int, %f = float/double, %c = char, %n = neue Zeile."
    },
    {
        "title": "Escape-Zeichen",
        "textVertical": "Sonderzeichen in Strings.",
        "textHorizontal": "Mit \\ kann man Zeichen wie Tabulator oder Anführungszeichen darstellen.",
        "ptext": "Wichtige Escape-Zeichen: \\n = neue Zeile, \\t = Tabulator, \\\" = Anführungszeichen, \\\' = Apostroph, \\\\ = Backslash. Beispiel: System.out.println(\"Name:\\tIstvan\");"
    },
    {
        "title": "Scanner",
        "textVertical": "Eingaben vom Benutzer lesen.",
        "textHorizontal": "Mit Scanner kannst du Texte, Zahlen und Kommazahlen von der Konsole einlesen.",
        "ptext": "Zuerst importieren: import java.util.Scanner;. Dann Scanner erstellen: Scanner sc = new Scanner(System.in);. Beispiel für Eingaben: String name = sc.nextLine(); int alter = sc.nextInt(); double preis = sc.nextDouble(); sc.close();"
    },
    {
        "title": "Boolean / Wahrheitswerte",
        "textVertical": "true oder false speichern.",
        "textHorizontal": "Boolean speichert nur die Werte true oder false.",
        "ptext": "Beispiel: boolean istWahr = scanner.hasNextBoolean();. Boolean ist nützlich für Prüfungen und Bedingungen."
    },
    {
        "title": "Wrapper-Klassen",
        "textVertical": "Primitive in Objekte umwandeln.",
        "textHorizontal": "Wrapper-Klassen erlauben Objekthandhabung von primitiven Datentypen.",
        "ptext": "int → Integer, double → Double, boolean → Boolean. Beispiele: Integer wrapper = Integer.valueOf(42); int unboxed = wrapper; Autoboxing: automatisch von int zu Integer; Unboxing: automatisch von Integer zu int."
    },
    {
        "title": "Casting / Typkonvertierung",
        "textVertical": "Datentypen umwandeln.",
        "textHorizontal": "Widening = automatisch, Narrowing = explizit mit möglichem Datenverlust.",
        "ptext": "Beispiel Widening: int basisZahl = 100; double widened = basisZahl;. Beispiel Narrowing: double kommazahl = 9.78; int narrowed = (int) kommazahl;."
    },
    {
        "title": "Parsing",
        "textVertical": "Strings in Zahlen oder Booleans umwandeln.",
        "textHorizontal": "Mit parse-Funktionen kannst du Texte in int, double oder boolean umwandeln.",
        "ptext": "Beispiel: String text = \"123\"; int zahl = Integer.parseInt(text); String textDouble = \"3.14\"; double d = Double.parseDouble(textDouble); String textBool = \"true\"; boolean b = Boolean.parseBoolean(textBool);"
    },
    {
        "title": "Switch (klassisch)",
        "textVertical": "Mehrfach-Auswahl basierend auf Werten.",
        "textHorizontal": "Switch führt unterschiedliche Codeabschnitte aus je nach Wert einer Variable.",
        "ptext": "Beispiel klassisch: switch (zahl) { case 1: System.out.println(\"Eins\"); break; case 2: System.out.println(\"Zwei\"); break; default: System.out.println(\"Ungültig\"); } Break nötig, sonst fall-through."
    },
    {
        "title": "Switch Expression (Java 14+)",
        "textVertical": "Switch kann einen Wert zurückgeben.",
        "textHorizontal": "Neuer Switch mit -> gibt direkt Werte zurück, kein break nötig.",
        "ptext": "Beispiel: int resultat = switch (zahl) { case 1 -> 10; case 2 -> 20; default -> 0; }; Jeder Case muss einen Wert liefern, mehrere Werte pro Case erlaubt: case 0,1,2 -> ..."
    },
    {
        "title": "Ternärer Operator",
        "textVertical": "Kurze if-else-Abfrage.",
        "textHorizontal": "Bedingung ? Wert_wenn_true : Wert_wenn_false",
        "ptext": "Beispiel: int zahl = 10; String ergebnis = (zahl > 5) ? \"größer als 5\" : \"nicht größer als 5\";. Gut für kurze Bedingungen, Zuweisungen und Ausgaben. Auch mit Boolean: boolean istOnline = true; String status = istOnline ? \"Online\" : \"Offline\";"
    },
    {
        "title": "Vergleichsoperatoren",
        "textVertical": "Werte vergleichen.",
        "textHorizontal": "Mit ==, !=, >, >=, <, <= kannst du Zahlen oder Variablen vergleichen.",
        "ptext": "Beispiel: a == b prüft, ob a gleich b ist. a != b prüft auf Ungleichheit. >, >=, <, <= prüfen größer/kleiner bzw. größer/kleiner oder gleich. Ergebnis ist immer ein boolean (true/false)."
    },
    {
        "title": "If / else / else if",
        "textVertical": "Bedingungen prüfen.",
        "textHorizontal": "Code wird nur ausgeführt, wenn bestimmte Bedingungen erfüllt sind.",
        "ptext": "Beispiel: if (alter >= 18) { System.out.println(\"Volljährig\"); } else { System.out.println(\"Nicht volljährig\"); }. Mit else if können mehrere Fälle geprüft werden."
    },
    {
        "title": "Logische Operatoren",
        "textVertical": "Bedingungen kombinieren.",
        "textHorizontal": "UND (&&), ODER (||), NICHT (!) kombinieren oder negieren Bedingungen.",
        "ptext": "Beispiel: if (hatFuehrerschein && besitztFahrzeug) {...} prüft, ob beides true ist. if (!hatFuehrerschein) {...} negiert die Bedingung. Mehrere Operatoren lassen sich beliebig kombinieren."
    },
    {
        "title": "Input mit Scanner",
        "textVertical": "Benutzereingaben lesen.",
        "textHorizontal": "Scanner kann Text, Zahlen, Zeichen und Booleans einlesen.",
        "ptext": "Beispiel: Scanner sc = new Scanner(System.in); String name = sc.next(); int zahl = sc.nextInt(); double kommazahl = sc.nextDouble(); boolean b = sc.nextBoolean(); sc.close();"
    },
    {
        "title": "Ausgabe auf Konsole",
        "textVertical": "Text oder Werte anzeigen.",
        "textHorizontal": "System.out.println, print, printf für unterschiedlich formatierte Ausgaben.",
        "ptext": "println() springt in neue Zeile, print() nicht, printf() erlaubt Formatierungen wie %s, %d, %f, %c, %n. String.format erzeugt formatierte Strings, z.B. String meldung = String.format(\"%s: %.1f°C\", \"Klima\", temperatur);"
    },
    {
        "title": "Variablen & Datentypen",
        "textVertical": "Daten speichern.",
        "textHorizontal": "Jede Variable hat einen Typ, der bestimmt, welche Daten gespeichert werden können.",
        "ptext": "Ganzzahlen: byte, short, int, long; Gleitkommazahlen: float, double; Boolean: true/false; Zeichen: char; Text: String. Variablen in camelCase, Konstanten in Großbuchstaben. Deklaration vs. Initialisierung: int a; a=5; int b=7;"
    },
    {
        "title": "Arithmetische Operatoren",
        "textVertical": "Rechenoperationen durchführen.",
        "textHorizontal": "+, -, *, /, %, ++, -- und Kurzschreibweisen wie +=",
        "ptext": "Addition: x+y, Subtraktion: x-y, Multiplikation: x*y, Division: x/y, Modulo: x%y. Inkrement/Postinkrement: z++ oder ++z, Dekrement: z-- oder --z. Kurzschreibweise: z += 1. Operatorenpräzedenz beachten."
    },
    {
        "title": "Rechnen mit double und char",
        "textVertical": "Mathematik mit Gleitkommazahlen und Zeichen.",
        "textHorizontal": "double für Kommazahlen, char kann arithmetisch genutzt werden.",
        "ptext": "Beispiel: double da = 7.5; double db = 5.0; da/db → 1.5, da%db → 2.5. char a='A'; a+1 → 'B'; letter++ erhöht Buchstabe um eins."
    },
    {
        "title": "Strings",
        "textVertical": "Text speichern und bearbeiten.",
        "textHorizontal": "Strings sind Textketten; Methoden wie length(), charAt(), equals() sind nützlich.",
        "ptext": "Strings speichern Texte. Mit length() kann man die Länge ermitteln, charAt(i) liefert das Zeichen an Position i, equals() vergleicht Inhalte korrekt (nicht ==). equalsIgnoreCase() ignoriert Groß-/Kleinschreibung."
    },
    {
        "title": "Arrays (1D)",
        "textVertical": "Mehrere Werte speichern.",
        "textHorizontal": "Ein Array speichert Werte gleichen Typs in fester Reihenfolge.",
        "ptext": "Syntax: int[] zahlen = {10,20,30}; Zugriff über Index (beginnend bei 0). Länge über zahlen.length. Arrays sind nützlich, um viele Werte organisiert zu speichern."
    },
    {
        "title": "Mehrdimensionale Arrays (2D)",
        "textVertical": "Tabellenartige Daten speichern.",
        "textHorizontal": "2D-Arrays bestehen aus Zeilen und Spalten und werden mit verschachtelten Schleifen durchlaufen.",
        "ptext": "Beispiel: int[][] matrix = new int[3][3]; Zugriff: matrix[0][1]. Ausgabe meist über zwei verschachtelte for-Schleifen oder Arrays.deepToString()."
    },
    {
        "title": "For-Schleife",
        "textVertical": "Wiederholung mit fester Anzahl.",
        "textHorizontal": "Führt Code aus, solange eine bekannte Anzahl an Durchläufen läuft.",
        "ptext": "Aufbau: for(Start; Bedingung; Iteration){...}. Beispiel: for(int i=1; i<=5; i++) { System.out.println(i); }."
    },
    {
        "title": "For-Each-Schleife",
        "textVertical": "Einfach über Arrays iterieren.",
        "textHorizontal": "Vereinfachte Schleife für Arrays ohne Index.",
        "ptext": "Beispiel: for(String name : namen) { System.out.println(name); }. Besonders praktisch, wenn nur die Werte benötigt werden."
    },
    {
        "title": "While-Schleife",
        "textVertical": "Bedingte Wiederholung.",
        "textHorizontal": "Führt Code solange aus, wie die Bedingung true ist.",
        "ptext": "Aufbau: while(Bedingung){...}. Beispiel: while(counter <= 3){ counter++; } Kann auch 0 Mal laufen, wenn Bedingung sofort false ist."
    },
    {
        "title": "Do-While-Schleife",
        "textVertical": "Mindestens einmal wiederholen.",
        "textHorizontal": "Führt Code mindestens einmal aus, bevor Bedingung geprüft wird.",
        "ptext": "Aufbau: do{...} while(Bedingung);. Beispiel: do{ zahl = scanner.nextInt(); } while(zahl != 0);."
    },
    {
        "title": "Break & Continue",
        "textVertical": "Schleifen steuern.",
        "textHorizontal": "break beendet eine Schleife sofort, continue überspringt den aktuellen Durchlauf.",
        "ptext": "Beispiel: if(i==5) continue; if(i==8) break;. Hilfreich, um Schleifen flexibel zu kontrollieren."
    },
    {
        "title": "Arrays-Hilfsmethoden",
        "textVertical": "Nützliche Funktionen für Arrays.",
        "textHorizontal": "Arrays.toString(), Arrays.sort(), Arrays.copyOf() erleichtern Arbeit mit Arrays.",
        "ptext": "toString() gibt Inhalte aus, sort() sortiert die Werte, copyOf() erzeugt eine Kopie oder erweitert das Array."
    },
    {
        "title": "ArrayList",
        "textVertical": "Dynamische Listen speichern.",
        "textHorizontal": "ArrayList kann beliebig viele Elemente speichern, automatisch wachsen oder schrumpfen.",
        "ptext": "ArrayList gehört zu java.util. Syntax: ArrayList<Integer> liste = new ArrayList<>();. Elemente werden mit add() hinzugefügt, mit get() gelesen, mit remove() entfernt. Größe abfragen: size(). Kann nur Objekte speichern, keine primitiven Typen – dafür Wrapper-Klassen verwenden."
    },
    {
        "title": "Wrapper-Klassen",
        "textVertical": "Primitive als Objekte verwenden.",
        "textHorizontal": "Wrapper-Klassen wie Integer, Double, Boolean ‚verpacken‘ primitive Typen, damit sie z.B. in Collections gespeichert werden können.",
        "ptext": "Beispiel: int → Integer, double → Double, boolean → Boolean. Autoboxing wandelt automatisch von int zu Integer, Unboxing umgekehrt. Wrapper-Objekte können null sein, primitive Typen nicht. Für Vergleiche immer .equals() verwenden, nicht ==."
    },
    {
        "title": "Methoden",
        "textVertical": "Wiederverwendbarer Codeblock.",
        "textHorizontal": "Methoden fassen Code zusammen, können Parameter entgegennehmen und Werte zurückgeben.",
        "ptext": "Beispiel: static void hallo() { System.out.println(\"Hallo\"); }. Methoden können static sein (direkter Aufruf ohne Objekt) oder Objektmethoden. Methodenüberladung erlaubt gleichen Namen mit unterschiedlicher Parameterliste. Rückgabewerte mit return zurückgeben."
    },
    {
        "title": "Methoden mit Parametern und Rückgabewert",
        "textVertical": "Code wiederverwenden und Werte zurückgeben.",
        "textHorizontal": "Methoden können Werte entgegennehmen (Parameter) und berechnete Ergebnisse zurückgeben (Rückgabewert).",
        "ptext": "Beispiel: static int addiere(int a, int b){ return a+b; }. Rückgabewert kann in Variablen gespeichert oder direkt in Bedingungen genutzt werden: if(addiere(2,3)==5){...}."
    },
    {
        "title": "Methodenüberladung",
        "textVertical": "Mehrere Methoden mit gleichem Namen.",
        "textHorizontal": "Gleicher Methodenname, aber unterschiedliche Parameterlisten oder Datentypen.",
        "ptext": "Beispiel: static int quadrieren(int zahl), static double quadrieren(double zahl). Java entscheidet automatisch, welche Version passend ist."
    },
    {
        "title": "Bankautomat-Beispiel",
        "textVertical": "Scanner, Methoden & Rückgabe praktisch anwenden.",
        "textHorizontal": "Beispielprogramm für Kontostand, Einzahlung und Auszahlung.",
        "ptext": "main-Methode steuert Menü, Scanner liest Eingaben. showBalance() zeigt Kontostand an, deposit() rechnet Einzahlung, withdraw() rechnet Auszahlung. Rückgabewerte der Methoden werden in der main-Methode gespeichert, Schleifen kontrollieren das Menü. Saubere Struktur durch Methoden und Rückgabewerte."
    },
    {
        "title": "Exceptions in Java",
        "textVertical": "Fehler während der Programmausführung.",
        "textHorizontal": "Exceptions sind Ausnahmen, die auftreten können; es gibt Checked und Unchecked Exceptions.",
        "ptext": "Unchecked Exceptions (Runtime) treten zur Laufzeit auf, z. B. Division durch 0, ArrayIndexOutOfBoundsException, NullPointerException. Checked Exceptions müssen behandelt werden, z. B. IOException. try-catch fängt Fehler ab, finally wird immer ausgeführt. Mehrfach-Catch (Java 7+) spart Code bei gleicher Behandlung."
    },
    {
        "title": "try-catch-finally",
        "textVertical": "Fehler abfangen und behandeln.",
        "textHorizontal": "try enthält risikobehafteten Code, catch fängt Exceptions, finally wird immer ausgeführt.",
        "ptext": "Beispiel: try { int c = a/b; } catch(ArithmeticException e) { System.out.println(e); } finally { System.out.println(\"Aufräumen\"); }. Schützt vor Programmabstürzen, erlaubt gezielte Fehlerbehandlung, Ressourcen können immer freigegeben werden."
    },
    {
        "title": "Dateien lesen und schreiben",
        "textVertical": "Arbeiten mit Dateien in Java.",
        "textHorizontal": "Mit File, FileReader, FileWriter kann man Dateien erstellen, lesen, schreiben, anhängen und löschen.",
        "ptext": "File repräsentiert Datei/Verzeichnis. FileWriter schreibt Text, FileReader liest Text. FileWriter mit true hängt an bestehende Datei an. createNewFile() erstellt, delete() löscht Dateien. try-with-resources (Java 7+) schließt Streams automatisch."
    },
    {
        "title": "Checked Exceptions bei Dateioperationen",
        "textVertical": "Fehler zwingend behandeln.",
        "textHorizontal": "IOException muss behandelt oder weitergegeben werden, sonst Fehler beim Kompilieren.",
        "ptext": "Beispiel: static void writeHelloToFile(File file) throws IOException. Aufruf: try { writeHelloToFile(datei); } catch(IOException e) { System.out.println(e); }. Guter Programmierstil schützt vor Abstürzen und speichert Ressourcen korrekt."
    },
    {
        "title": "Programmierparadigmen",
        "textVertical": "Denkweise & Struktur von Programmen.",
        "textHorizontal": "Programmierparadigmen beschreiben, wie man Programme aufbaut und Probleme löst.",
        "ptext": "Ein Paradigma ist wie ein Bauplan oder eine Philosophie für Software. Es hilft, Code verständlich, wartbar, testbar und erweiterbar zu schreiben. Unterschiedliche Probleme erfordern unterschiedliche Paradigmen."
    },
    {
        "title": "Imperatives Programmierparadigma",
        "textVertical": "Schritt-für-Schritt Anweisungen.",
        "textHorizontal": "Der Programmierer gibt genau vor, WIE das Programm arbeitet.",
        "ptext": "Merkmale: Reihenfolge wichtig, Variablen ändern sich, Schleifen und Bedingungen. Beispiel: int summe=0; for(int i=1;i<=5;i++){summe+=i;}. Typische Sprachen: C, Java, Python, JavaScript."
    },
    {
        "title": "Prozedurales Programmierparadigma",
        "textVertical": "Programme in Funktionen aufteilen.",
        "textHorizontal": "Imperatives Paradigma mit klaren Funktionen/Prozeduren zur Strukturierung.",
        "ptext": "Merkmale: Wiederverwendbarer Code, klare Aufgaben pro Funktion. Beispiel: static int addiere(int a,int b){return a+b;}. Typische Sprachen: C, Pascal, Python, Java."
    },
    {
        "title": "Funktionales Programmierparadigma",
        "textVertical": "Programme aus Funktionen.",
        "textHorizontal": "Zustände vermeiden, Funktionen liefern immer das gleiche Ergebnis.",
        "ptext": "Merkmale: wenige/veränderliche Variablen, keine Seiteneffekte. Beispiel (Java): zahlen.stream().map(x->x*2).forEach(System.out::println); Typische Sprachen: Haskell, Scala, Java, JavaScript."
    },
    {
        "title": "Deklaratives Programmierparadigma",
        "textVertical": "Beschreibe das Ergebnis, nicht den Ablauf.",
        "textHorizontal": "Programmierer gibt an WAS erreicht werden soll, nicht WIE.",
        "ptext": "Beispiel SQL: SELECT name FROM kunden WHERE ort='Berlin'; Kein expliziter Ablauf, Fokus auf Ziel. Typische Bereiche: SQL, HTML, CSS."
    },
    {
        "title": "Logisches Programmierparadigma",
        "textVertical": "Regeln & Fakten definieren.",
        "textHorizontal": "System leitet Lösungen selbst logisch ab.",
        "ptext": "Merkmale: keine Ablaufsteuerung durch Programmierer, Regeln + Fakten. Beispiel Prolog: vater(peter,paul). grossvater(X,Y):-vater(X,Z),vater(Z,Y). Typische Sprachen: Prolog, Datalog."
    },
    {
        "title": "Objektorientiertes Programmierparadigma (OOP)",
        "textVertical": "Programme als Objekte modellieren.",
        "textHorizontal": "Software wird als Zusammenspiel von Objekten aufgebaut, die Daten und Verhalten kapseln.",
        "ptext": "Zentrale Konzepte: Klassen & Objekte, Kapselung, Vererbung, Polymorphie. Vorteile: klare Struktur, Wartbarkeit, Erweiterbarkeit, Nähe zur realen Welt. Typische Sprachen: C++, Java, C#, Python. Beispiel: class Auto{void fahren(){}}; Auto a=new Auto(); a.fahren();"
    },
    {
        "title": "Imperativ vs. Deklarativ (Direktvergleich)",
        "textVertical": "Wie vs. Was.",
        "textHorizontal": "Imperativ: Programmierer beschreibt WIE es gemacht wird. Deklarativ: nur das gewünschte Ergebnis.",
        "ptext": "Imperativ: Schritt-für-Schritt, veränderliche Variablen, Schleifen vorhanden, Beispiele: C, C++, Java. Deklarativ: System entscheidet Ablauf, Variablen meist unveränderlich, keine expliziten Schleifen, Beispiele: SQL, HTML, CSS. Merksatz: Imperativ=Wie, Deklarativ=Was."
    },
    {
        "title": "OOP – Abstraktion",
        "textVertical": "Wesentliches hervorheben",
        "textHorizontal": "Man betrachtet ein Objekt nur über die relevanten Eigenschaften und Funktionen, nicht über alle Details.",
        "ptext": "Beispiel Auto: wichtig = fahren(), bremsen(); unwichtig = genaue Motormechanik. C++: class Auto { public: void fahren(); }; Fokus: Was ein Objekt kann, nicht wie es intern funktioniert."
    },
    {
        "title": "OOP – Generalisierung",
        "textVertical": "Gemeinsamkeiten bündeln",
        "textHorizontal": "Mehrere spezielle Klassen werden in einer Oberklasse zusammengefasst.",
        "ptext": "Beispiel: Auto, Motorrad → Fahrzeug. C++: class Fahrzeug { public: void fahren(); }; Generalisierung entsteht oft als Gedankenschritt vor der Vererbung."
    },
    {
        "title": "OOP – Vererbung",
        "textVertical": "Eigenschaften übernehmen",
        "textHorizontal": "Eine Klasse übernimmt Attribute und Methoden einer anderen Klasse.",
        "ptext": "Beispiel: class Auto : public Fahrzeug {}; Auto ist ein Fahrzeug. Vorteile: Wiederverwendbarer Code, Strukturierung durch Ober- und Unterklassen."
    },
    {
        "title": "OOP – Kapselung",
        "textVertical": "Daten schützen",
        "textHorizontal": "Attribute werden meist private, Zugriff erfolgt über Methoden (getter/setter).",
        "ptext": "C++ Beispiel: class Auto { private: int geschwindigkeit; public: void setGeschwindigkeit(int g){geschwindigkeit=g;} }; Schutz vor falscher Benutzung und unerwünschten Änderungen."
    },
    {
        "title": "OOP – Polymorphismus",
        "textVertical": "Gleiche Schnittstelle, anderes Verhalten",
        "textHorizontal": "Ein Methodenaufruf kann je nach Objekt unterschiedlich reagieren.",
        "ptext": "Voraussetzung: Vererbung + virtuelle Methoden. C++ Beispiel: class Fahrzeug { virtual void fahren(); }; class Auto : public Fahrzeug { void fahren() override; }; Fahrzeug* f=new Auto(); f->fahren(); Ergebnis: Auto fährt. Laufzeit entscheidet welche Methode aufgerufen wird."
    },
    {
        "title": "OOP – Zusammenhang der Konzepte",
        "textVertical": "Von Abstraktion zu Polymorphismus",
        "textHorizontal": "Die Konzepte hängen logisch zusammen.",
        "ptext": "1. Abstraktion → Wesentliches erkennen\n2. Generalisierung → Gemeinsamkeiten bündeln\n3. Vererbung → Umsetzung der Generalisierung\n4. Kapselung → Schutz der Daten\n5. Polymorphismus → flexibles Verhalten über gemeinsame Schnittstellen"
    },
    {
        "title": "OOP – Merksatz",
        "textVertical": "Prüfungsrelevant",
        "textHorizontal": "Kurz & bündig für Lernzielkontrolle",
        "ptext": "Abstraktion reduziert Komplexität, Generalisierung fasst Gemeinsamkeiten zusammen, Vererbung ermöglicht Wiederverwendung, Kapselung schützt Daten, Polymorphismus erlaubt unterschiedliches Verhalten bei gleicher Schnittstelle."
    },
    {
        "title": "OOP – Ultra-Kurzfassung",
        "textVertical": "Perfekt zum Auswendiglernen",
        "textHorizontal": "Alle Konzepte auf einen Blick",
        "ptext": "Abstraktion: Wesentliches darstellen\nGeneralisierung: Gemeinsamkeiten bündeln\nVererbung: Eigenschaften weitergeben\nKapselung: Daten schützen\nPolymorphismus: Gleiches Interface, anderes Verhalten"
    },
    {
        "title": "OOP – Generalisierung",
        "textVertical": "Gemeinsamkeiten erkennen",
        "textHorizontal": "Mehrere Objekte werden betrachtet, ihre Gemeinsamkeiten erkannt und in einer allgemeinen Klasse zusammengefasst.",
        "ptext": "Beispiel: Auto A, Auto B → beide haben fahren() und bremsen(). C++: class Auto { public: void fahren(); void bremsen(); }; Auto auto1, auto2; auto1 und auto2 sind Akteure, weil sie Methoden ausführen können."
    },
    {
        "title": "OOP – Klasse",
        "textVertical": "Bauplan für Objekte",
        "textHorizontal": "Eine Klasse beschreibt Attribute (Eigenschaften) und Methoden (Verhalten) für Objekte.",
        "ptext": "Merkmale: Allgemein (noch kein Objekt), Abstrakt (nur Fähigkeiten, keine konkreten Werte), Wiederverwendbar (mehrere Objekte können erstellt werden). C++-Beispiel: class Auto { public: int geschwindigkeit; void fahren() { cout << \"Das Auto fährt\"; } };"
    },
    {
        "title": "OOP – Objekt",
        "textVertical": "Konkrete Instanz",
        "textHorizontal": "Ein Objekt ist eine konkrete Instanz einer Klasse und agiert als Akteur im Programm.",
        "ptext": "Beispiel: Auto meinAuto; meinAuto.geschwindigkeit = 100; meinAuto.fahren(); Objekte besitzen Daten, führen Methoden aus und können mit anderen Objekten interagieren."
    },
    {
        "title": "OOP – Variable / Attribut",
        "textVertical": "Eigenschaft eines Objekts",
        "textHorizontal": "Variablen speichern die Eigenschaften eines Objekts.",
        "ptext": "Beispiel: class Auto { public: int geschwindigkeit; }; Die Variable geschwindigkeit beschreibt den Zustand des Objekts."
    },
    {
        "title": "OOP – Zustand eines Objekts",
        "textVertical": "Aktuelle Werte der Variablen",
        "textHorizontal": "Der Zustand eines Objekts wird durch die Werte seiner Attribute bestimmt.",
        "ptext": "Beispiel: Auto auto1, auto2; auto1.geschwindigkeit = 50; auto2.geschwindigkeit = 120; → gleiche Klasse, unterschiedliche Zustände möglich."
    },
    {
        "title": "OOP – Vererbung",
        "textVertical": "Attribute & Methoden weitergeben",
        "textHorizontal": "Eine Unterklasse übernimmt Eigenschaften und Methoden einer Oberklasse.",
        "ptext": "Beispiel: class Fahrzeug { public: int geschwindigkeit; }; class Auto : public Fahrzeug { public: int anzahlTueren; }; Auto a; a.geschwindigkeit = 80; a.anzahlTueren = 4; Vorteile: Code-Wiederverwendung, klare Struktur, Erweiterbarkeit, Abbildung von Hierarchien."
    },
    {
        "title": "OOP – Merksatz Vererbung",
        "textVertical": "Prüfungsrelevant",
        "textHorizontal": "Unterklasse übernimmt Eigenschaften und Methoden der Oberklasse",
        "ptext": "Vererbung ermöglicht es, Attribute und Methoden einer allgemeinen Klasse an spezialisierte Klassen weiterzugeben. Objekte der Unterklasse haben dabei eigene Zustände."
    },
    {
        "title": "OOP – Kapselung (Encapsulation)",
        "textVertical": "Daten schützen",
        "textHorizontal": "Attribute werden privat oder geschützt, Zugriff erfolgt nur über Methoden.",
        "ptext": "Ziel: Schutz der Daten, Kontrolle über Zustandsänderungen, Fehler vermeiden. Zugriffsmodifikatoren: public, protected, private. C++-Beispiel: class Auto { private: int geschwindigkeit; public: void setGeschwindigkeit(int g) { if(g>=0) geschwindigkeit=g; } int getGeschwindigkeit() { return geschwindigkeit; } };"
    },
    {
        "title": "OOP – Getter und Setter",
        "textVertical": "Kontrollierter Zugriff",
        "textHorizontal": "Getter lesen private Attribute aus, Setter ändern sie kontrolliert.",
        "ptext": "Beispiel Java: public class Auto { private int geschwindigkeit; public int getGeschwindigkeit() { return geschwindigkeit; } public void setGeschwindigkeit(int g) { if(g>=0) geschwindigkeit=g; } } Verwendung: Auto auto = new Auto(); auto.setGeschwindigkeit(100); System.out.println(auto.getGeschwindigkeit());"
    },
    {
        "title": "OOP – Polymorphismus",
        "textVertical": "Viele Formen",
        "textHorizontal": "Objekte reagieren auf gleiche Schnittstellen unterschiedlich, statisch (Overloading) oder dynamisch (Overriding).",
        "ptext": "Beispiele: Methodenüberladen (statisch) → addiere(int,int)/addiere(double,double). Methodenüberschreiben (dynamisch) → Auto::fahren() überschreibt Fahrzeug::fahren(). Dynamische Bindung zur Laufzeit: Fahrzeug* f = new Auto(); f->fahren();"
    },
    {
        "title": "OOP – Konstruktoren",
        "textVertical": "Objekte initialisieren",
        "textHorizontal": "Spezielle Methoden, die automatisch beim Erzeugen eines Objekts aufgerufen werden, um Attribute zu setzen.",
        "ptext": "Arten: Standardkonstruktor (keine Parameter), parametrisiert (Attribute individuell setzen), Kopierkonstruktor (Objekt als Kopie erstellen). Beispiel C++: class Auto { public: int geschwindigkeit; Auto() { geschwindigkeit=0; } Auto(int g){ geschwindigkeit=g; } }; Auto a(100);"
    },
    {
        "title": "OOP – Vererbung (Inheritance)",
        "textVertical": "Eigenschaften weitergeben",
        "textHorizontal": "Eine Unterklasse übernimmt Variablen und Methoden einer Oberklasse.",
        "ptext": "Beispiel Java: class Fahrzeug { int geschwindigkeit; void fahren() { System.out.println(\"Das Fahrzeug fährt\"); } } class Auto extends Fahrzeug { int anzahlTueren; } → Auto erbt geschwindigkeit und fahren(), besitzt zusätzlich eigene Eigenschaften. Regeln: Nur eine Klasse erben, private Elemente nicht direkt sichtbar."
    },
    {
        "title": "OOP – Abstrakte Klassen",
        "textVertical": "Teilweise fertig",
        "textHorizontal": "Eine abstrakte Klasse dient als Vorlage, kann nicht instanziiert werden und enthält abstrakte Methoden, die Unterklassen implementieren müssen.",
        "ptext": "Beispiel: abstract class Tier { abstract void geraeuschMachen(); void schlafen() { System.out.println(\"Tier schläft\"); } } class Hund extends Tier { void geraeuschMachen() { System.out.println(\"Wuff\"); } } → Abstrakte Methoden müssen in Unterklassen implementiert werden."
    },
    {
        "title": "OOP – Interfaces",
        "textVertical": "Fähigkeiten beschreiben",
        "textHorizontal": "Ein Interface beschreibt nur Methoden, die implementiert werden müssen. Es sagt WAS, aber nicht WIE.",
        "ptext": "Beispiel: interface Beweglich { void bewegen(); } class Mensch implements Beweglich { public void bewegen() { System.out.println(\"Der Mensch läuft\"); } } class Roboter implements Beweglich { public void bewegen() { System.out.println(\"Der Roboter fährt\"); } } → Beide implementieren die Fähigkeit unterschiedlich. Regeln: Mehrfach-Implementierung erlaubt, keine Konstruktoren, Attribute public static final."
    },
    {
        "title": "OOP – Subklasse / Kindklasse",
        "textVertical": "Unterklasse einer Oberklasse",
        "textHorizontal": "Eine Subklasse erbt von einer Superklasse und kann Eigenschaften und Methoden nutzen oder überschreiben.",
        "ptext": "Beispiel: class Fahrzeug {} class Auto extends Fahrzeug {} → Auto ist Subklasse, Fahrzeug ist Superklasse. Regeln: Subklasse kann nur eine Superklasse haben, private Elemente nicht direkt sichtbar, abstrakte Methoden müssen implementiert werden."
    },
    {
        "title": "OOP – Implementieren",
        "textVertical": "Vorgaben umsetzen",
        "textHorizontal": "Implementieren bedeutet, Methoden eines Interfaces oder abstrakter Klassen in einer Klasse mit echtem Code zu füllen.",
        "ptext": "Beispiel Interface: interface Beweglich { void bewegen(); } class Mensch implements Beweglich { public void bewegen() { System.out.println(\"läuft\"); } } → Mensch implementiert die Methode. Merksatz: implementieren ≠ erben, erben = Code übernehmen, implementieren = fehlenden Code schreiben."
    },
    {
        "title": "OOP – this",
        "textVertical": "Aktuelles Objekt",
        "textHorizontal": "this verweist auf das aktuelle Objekt, kann Attribute unterscheiden, eigene Methoden aufrufen oder Konstruktoren verketten.",
        "ptext": "Beispiel: class Person { String name; Person(String name) { this.name = name; } } → this.name unterscheidet Attribut vom Parameter. Konstruktorverkettung: this(...) ruft anderen Konstruktor derselben Klasse auf."
    },
    {
        "title": "OOP – super",
        "textVertical": "Elternklasse",
        "textHorizontal": "super verweist auf die Superklasse, kann Attribute, Methoden oder Konstruktoren der Elternklasse aufrufen.",
        "ptext": "Beispiel: class Tier { void geraeusch() { System.out.println(\"Tier macht Geräusch\"); } } class Hund extends Tier { @Override void geraeusch() { super.geraeusch(); System.out.println(\"Wuff\"); } } → Erst Eltern-, dann Kind-Verhalten. Merksatz: this = aktuelles Objekt, super = Elternklasse, this(...) = eigener Konstruktor, super(...) = Konstruktor der Elternklasse."
    },
    {
        "title": "OOP – Polymorphismus (Vererbung & Interfaces)",
        "textVertical": "Gleiche Schnittstelle, unterschiedliches Verhalten",
        "textHorizontal": "Referenzen vom Basistyp können auf Objekte unterschiedlicher Untertypen zeigen, die Methode wird zur Laufzeit ausgeführt.",
        "ptext": "Beispiel: abstract class Tier { abstract void geraeuschMachen(); } class Hund extends Tier { void geraeuschMachen() { System.out.println(\"Wuff\"); } } class Katze extends Tier { void geraeuschMachen() { System.out.println(\"Miau\"); } } Tier t1 = new Hund(); t1.geraeuschMachen(); → Wuff. Polymorphismus erlaubt sauberen, erweiterbaren Code ohne instanceof-Checks. Auch Interfaces: Beweglich b = new Mensch(); b.bewegen();"
    },
    {
        "title": "Softwareergonomie",
        "textVertical": "Benutzerfreundliche Software",
        "textHorizontal": "Softwareergonomie beschäftigt sich mit der Verständlichkeit, Bedienbarkeit und Effizienz von Software für Menschen.",
        "ptext": "Ziele: einfache Bedienung, geringe Fehlerquote, schnelles Erlernen, angenehme Nutzung, Anpassung an den Menschen. Grundsätze: Verständlichkeit (klare Begriffe), Konsistenz (gleiches Verhalten), Fehlertoleranz (Undo, Warnungen), Feedback (Reaktionen sichtbar), Anpassbarkeit (Schriftgröße, Dark Mode). Bezug auf Programmierung: verständliche Klassennamen, saubere Methoden, klare Verantwortung."
    },
    {
        "title": "Kriterien der Softwareergonomie",
        "textVertical": "Usability-Prinzipien",
        "textHorizontal": "Elemente müssen unterscheidbar, kompakt, konsistent, erkennbar, lesbar und verständlich sein.",
        "ptext": "Unterscheidbarkeit: Buttons klar differenzieren (Farben, Icons). Kompaktheit: Informationen platzsparend darstellen. Konsistenz: Gleiche Aktionen = gleiche Darstellung. Erkennbarkeit: Funktionen sofort erkennbar. Lesbarkeit: Gute Schriftart, ausreichender Kontrast. Verständlichkeit: Inhalte klar, einfache Sprache, verständliche Fehlermeldungen."
    },
    {
        "title": "User Experience (UX)",
        "textVertical": "Nutzungserlebnis",
        "textHorizontal": "UX beschreibt das gesamte Nutzungserlebnis eines Benutzers: Bedienung, Eindruck, Gefühl, Zufriedenheit.",
        "ptext": "Die 3 UX-Prinzipien: Firmitas (Stabilität/Zuverlässigkeit, keine Abstürze, gute Performance), Utilitas (Nützlichkeit/Zweckmäßigkeit, Funktionen erfüllen ihren Zweck), Venustas (Ästhetik/Anmut, optisch ansprechend, harmonisches Design). Merksatz: Gute UX = Firmitas + Utilitas + Venustas."
    },
    {
        "title": "Visuelles Design",
        "textVertical": "Aussehen der Software",
        "textHorizontal": "Visuelles Design beschäftigt sich mit Farben, Schriftarten, Abständen, Icons und Layout.",
        "ptext": "Ziel: ansprechende Optik (Venustas), gute Lesbarkeit, Unterstützung der Bedienung. Beispiele: klare Buttons, einheitliches Farbschema, gute Kontraste."
    },
    {
        "title": "Informationsarchitektur",
        "textVertical": "Struktur der Inhalte",
        "textHorizontal": "Wie sind Inhalte organisiert und strukturiert?",
        "ptext": "Schwerpunkt: Navigation, Menüstruktur, Hierarchien, Gruppierung von Informationen. Ziel: Benutzer findet schnell, was er sucht. Beispiel: Hauptmenü → Untermenü → Detailseite, sinnvolle Kategorien."
    },
    {
        "title": "Interaktionsdesign",
        "textVertical": "Benutzerinteraktion",
        "textHorizontal": "Wie interagiert der Benutzer mit der Software?",
        "ptext": "Schwerpunkt: Klicks, Eingaben, Feedback, Abläufe. Ziel: intuitive Bedienung, klare Reaktionen des Systems. Beispiele: Button färbt sich beim Klicken, Ladeanzeige, verständliche Fehlermeldungen."
    },
    {
        "title": "Usability",
        "textVertical": "Gebrauchstauglichkeit",
        "textHorizontal": "Wie einfach und effizient ist die Nutzung?",
        "ptext": "Schwerpunkt: Erlernbarkeit, Effizienz, Fehlerminimierung, Zufriedenheit. Ziel: Aufgaben schnell, korrekt und stressfrei erledigen. Beispiele: wenige Klicks bis zum Ziel, Undo-Funktion, verständliche Beschriftungen."
    },
    {
        "title": "Zugänglichkeit (Accessibility)",
        "textVertical": "Barrierefreiheit",
        "textHorizontal": "Software soll von allen Menschen nutzbar sein, auch bei Einschränkungen.",
        "ptext": "Ziel: Niemand wird ausgeschlossen, Software barrierefrei, gleichberechtigter Zugang. Aspekte: Wahrnehmbarkeit (Farbkontraste, Alternativtexte), Bedienbarkeit (Tastatursteuerung, große Flächen), Verständlichkeit (einfache Sprache, klare Anweisungen), Robustheit (Screenreader, verschiedene Geräte). Zusammenhang: Teil von UX & Usability."
    },
    {
        "title": "Corporate Identity (CI)",
        "textVertical": "Identität eines Unternehmens",
        "textHorizontal": "Gesamtidentität des Unternehmens, einheitliches Auftreten nach innen und außen.",
        "ptext": "Merksatz: Corporate Identity = Persönlichkeit des Unternehmens. Säulen: Corporate Design (CD) → sichtbares Erscheinungsbild: Logo, Farben, Schriftarten, Layout; Corporate Communication (CC) → Kommunikation, Sprache, Werbung, Social Media; Corporate Culture → Werte, Normen, Verhalten, Führungsstil. Alles muss zusammenpassen. Bezug zu Software & UX: Design beeinflusst UI, Kommunikation beeinflusst Texte, Kultur beeinflusst Produktentscheidungen."
    },
    {
        "title": "UX Design",
        "textVertical": "Nutzerzentrierte Gestaltung",
        "textHorizontal": "UX Design sorgt dafür, dass Software nützlich, verständlich, effizient, angenehm und barrierefrei nutzbar ist.",
        "ptext": "Nicht nur Aussehen, sondern auch Nutzungserlebnis: Erreicht der Nutzer sein Ziel, gibt es Freude oder Frust? Bestandteile: Usability, Barrierefreiheit, Informationsarchitektur, Interaktionsdesign, visuelles Design, User Research & Tests. Prinzipien: Firmitas (stabil), Utilitas (nützlich), Venustas (ästhetisch)."
    },
    {
        "title": "Sketch",
        "textVertical": "Erste grobe Idee",
        "textHorizontal": "Schnelle, einfache Zeichnung zur Visualisierung von Ideen.",
        "ptext": "Merkmale: ungenau, schnell erstellt, leicht änderbar. Zweck: Ideen festhalten, Varianten ausprobieren."
    },
    {
        "title": "Wireframe",
        "textVertical": "Struktur & Aufbau",
        "textHorizontal": "Schematische, schwarz-weiße Darstellung der Softwareoberfläche.",
        "ptext": "Platzhalter für Inhalte, Fokus auf Layout, Informationsarchitektur und Benutzerführung. Keine Farben, keine Bilder, nur Funktion & Struktur."
    },
    {
        "title": "Mockup",
        "textVertical": "Visuelles Design",
        "textHorizontal": "Detaillierte, statische Darstellung der Software mit Farben, Schriftarten und Icons.",
        "ptext": "Zeigt, wie die Software aussehen wird. Nicht klickbar, keine Funktion, dient der Abstimmung mit Kunden oder Team."
    },
    {
        "title": "Prototyp",
        "textVertical": "Interaktive Simulation",
        "textHorizontal": "Klickbare Version der Software, die Verhalten simuliert.",
        "ptext": "Zweck: Usability-Tests, Nutzerfeedback, Fehler früh erkennen. Merkmale: teilweise oder vollständig interaktiv, noch keine echte Software. Reihenfolge für Designprozess: Sketch → Wireframe → Mockup → Prototyp."
    },
    {
        "title": "UML (Unified Modeling Language)",
        "textVertical": "Grafische Modellierungssprache",
        "textHorizontal": "UML beschreibt Software-Systeme mit Diagrammen statt Code.",
        "ptext": "UML ist eine standardisierte grafische Sprache zur Modellierung von Software-Systemen. Sie wird zur Planung, Dokumentation und zum Verständnis von Struktur und Verhalten eingesetzt – vor, während und nach der Implementierung. UML ist keine Programmiersprache, sondern ein visuelles Kommunikationsmittel für Entwickler, Tester und Projektleiter."
    },
    {
        "title": "Ziele von UML",
        "textVertical": "Übersicht & Kommunikation",
        "textHorizontal": "UML macht komplexe Software verständlich.",
        "ptext": "UML hilft, große und komplexe Systeme übersichtlich darzustellen. Klassen, Beziehungen, Abläufe und Zustände werden visuell sichtbar. Dadurch verbessert UML die Kommunikation im Team, unterstützt objektorientiertes Denken und erleichtert Wartung sowie Erweiterung von Software."
    },
    {
        "title": "UML-Klassendiagramm",
        "textVertical": "Statische Struktur",
        "textHorizontal": "Zeigt Klassen, Attribute, Methoden und Beziehungen.",
        "ptext": "Das Klassendiagramm ist das wichtigste UML-Diagramm. Es stellt Klassen als Baupläne dar und zeigt deren Attribute, Methoden sowie Beziehungen wie Vererbung, Aggregation oder Komposition. Es bildet die Grundlage für objektorientierte Programmierung."
    },
    {
        "title": "Sichtbarkeiten in UML",
        "textVertical": "Zugriffsrechte",
        "textHorizontal": "Symbole zeigen, wer auf Attribute und Methoden zugreifen darf.",
        "ptext": "UML verwendet Symbole zur Darstellung von Sichtbarkeiten: + public (überall sichtbar), - private (nur innerhalb der Klasse), # protected (Klasse und Unterklassen) und ~ package (innerhalb desselben Pakets). Diese entsprechen direkt den OOP-Konzepten in Java."
    },
    {
        "title": "Generalisierung",
        "textVertical": "Ist-ein-Beziehung",
        "textHorizontal": "Generalisierung beschreibt Vererbung zwischen Klassen.",
        "ptext": "Generalisierung stellt eine Vererbungsbeziehung dar, bei der eine spezialisierte Klasse Attribute und Methoden von einer allgemeineren Klasse übernimmt. Sie wird mit einer Linie und einem leeren Dreieck zur Oberklasse dargestellt und entspricht der Vererbung in objektorientierten Programmiersprachen."
    },
    {
        "title": "Aggregation",
        "textVertical": "Schwache Bindung",
        "textHorizontal": "Teile können unabhängig vom Ganzen existieren.",
        "ptext": "Aggregation beschreibt eine lockere \"hat-ein\"-Beziehung. Die Teilobjekte existieren auch dann weiter, wenn das Ganze gelöscht wird. Sie wird mit einer leeren Raute an der Seite des Ganzen dargestellt."
    },
    {
        "title": "Komposition",
        "textVertical": "Starke Bindung",
        "textHorizontal": "Teile sind existenzabhängig vom Ganzen.",
        "ptext": "Komposition ist eine starke Form der Beziehung. Die Teilobjekte können nicht ohne das Hauptobjekt existieren. Wird das Ganze gelöscht, verschwinden auch alle Teile. Dargestellt wird sie mit einer ausgefüllten Raute."
    },
    {
        "title": "Use-Case-Diagramm",
        "textVertical": "Systemfunktionen",
        "textHorizontal": "Zeigt, was ein System leisten kann und wer es nutzt.",
        "ptext": "Use-Case-Diagramme stellen funktionale Anforderungen dar. Sie zeigen Akteure, Anwendungsfälle und die Systemgrenze. Sie sind besonders wichtig in der Anforderungsanalyse und zur Kommunikation mit fachlichen Stakeholdern."
    },
    {
        "title": "Include-Beziehung",
        "textVertical": "Pflichtfunktion",
        "textHorizontal": "Ein Use Case wird immer ausgeführt.",
        "ptext": "Die «include»-Beziehung zeigt, dass ein Use Case zwingend einen anderen Use Case enthält. Der inkludierte Use Case wird jedes Mal ausgeführt und dient der Wiederverwendung gemeinsamer Funktionalität."
    },
    {
        "title": "Extend-Beziehung",
        "textVertical": "Optionale Erweiterung",
        "textHorizontal": "Zusätzliche Funktion nur bei Bedingungen.",
        "ptext": "Die «extend»-Beziehung beschreibt optionales Verhalten. Ein Use Case erweitert einen anderen nur unter bestimmten Bedingungen. Sie wird genutzt, um flexible und optionale Abläufe zu modellieren."
    },
    {
        "title": "Sequenzdiagramm",
        "textVertical": "Ablauf über Zeit",
        "textHorizontal": "Zeigt Nachrichten zwischen Objekten in zeitlicher Reihenfolge.",
        "ptext": "Sequenzdiagramme visualisieren, wie Objekte miteinander kommunizieren. Die Zeit verläuft von oben nach unten. Sie eignen sich besonders zur Darstellung von Abläufen und Methodenaufrufen."
    },
    {
        "title": "Aktivitätsdiagramm",
        "textVertical": "Prozessabläufe",
        "textHorizontal": "Flussdiagramm für Workflows.",
        "ptext": "Aktivitätsdiagramme zeigen Abläufe, Entscheidungen und parallele Prozesse. Sie bestehen aus Start- und Endpunkten, Aktivitäten, Entscheidungsrouten und Pfeilen zur Ablaufsteuerung. Sie eignen sich ideal für Geschäftsprozesse."
    },
    {
        "title": "Zustandsdiagramm",
        "textVertical": "Objektzustände",
        "textHorizontal": "Zeigt mögliche Zustände und Übergänge.",
        "ptext": "Zustandsdiagramme beschreiben, welche Zustände ein Objekt annehmen kann und durch welche Ereignisse Zustandswechsel ausgelöst werden. Sie sind besonders wichtig für Workflows, Automaten und Lebenszyklen."
    },
    {
        "title": "UML – Pro & Contra",
        "textVertical": "Vorteile & Nachteile",
        "textHorizontal": "UML bietet Übersicht, kostet aber Aufwand.",
        "ptext": "Vorteile: visuelle Übersicht, bessere Kommunikation, gute Dokumentation und frühe Fehlererkennung. Nachteile: hoher Erstellungs- und Pflegeaufwand, Komplexität bei großen Systemen und keine direkte Funktionsgarantie."
    },
    {
        "title": "Accessibility",
        "textVertical": "Accessibility means software can be used independently by everyone.",
        "textHorizontal": "Barrier-free access for all users, including people with disabilities.",
        "ptext": "Accessibility ensures that software, products, and information can be used without external help by all people, including those with visual, auditory, motor, or cognitive impairments. It aims for equal access, no exclusion, and independent use. Accessibility benefits everyone and is a core part of usability and user experience."
    },
    {
        "title": "User Experience Design",
        "textVertical": "UX Design focuses on the overall user experience.",
        "textHorizontal": "Useful, usable, enjoyable, and accessible software.",
        "ptext": "UX Design is the user-centered design of software with the goal of making products useful, understandable, efficient, pleasant, and accessible. It includes usability, accessibility, information architecture, interaction design, visual design, and user research. UX covers the entire user experience, while UI design focuses only on appearance."
    },
    {
        "title": "Design Process: Sketch to Prototype",
        "textVertical": "From idea to interactive test.",
        "textHorizontal": "Sketch → Wireframe → Mockup → Prototype.",
        "ptext": "The design process starts with a sketch for quick ideas, followed by wireframes to define structure, mockups to show visual design, and prototypes to simulate interaction. The correct order is: think first, structure second, design third, and test last."
    },
    {
        "title": "Unified Modeling Language (UML)",
        "textVertical": "Standardized graphical modeling language.",
        "textHorizontal": "Visualizes structure and behavior of software systems.",
        "ptext": "UML is not a programming language but a standardized modeling language used to visualize, design, document, and explain software systems. It helps teams understand structure, behavior, and interactions before, during, and after development and is especially important in object-oriented programming."
    },
    {
        "title": "UML Class Diagram",
        "textVertical": "Shows the static structure of a system.",
        "textHorizontal": "Classes, attributes, methods, and relationships.",
        "ptext": "A UML class diagram represents the static structure of a system by showing classes with their attributes, methods, and relationships such as inheritance, aggregation, and composition. It serves as a blueprint for object-oriented design and implementation."
    },
    {
        "title": "UML Relationships",
        "textVertical": "Defines how classes are connected.",
        "textHorizontal": "Association, inheritance, aggregation, composition, dependency.",
        "ptext": "UML relationships describe how classes interact. Association means 'knows or uses', inheritance represents an 'is-a' relationship, aggregation is a weak 'has-a' relationship, composition is a strong ownership relationship, and dependency shows temporary usage."
    },
    {
        "title": "Generalization",
        "textVertical": "Inheritance relationship in UML.",
        "textHorizontal": "Is-a relationship between classes.",
        "ptext": "Generalization in UML represents inheritance where a subclass inherits attributes and methods from a superclass. It models an 'is-a' relationship and is shown with a solid line and a hollow triangle pointing to the superclass. It directly corresponds to inheritance in languages like Java."
    },
    {
        "title": "Use Case Relationships",
        "textVertical": "Include and extend relationships.",
        "textHorizontal": "Mandatory vs optional behavior.",
        "ptext": "The «include» relationship means a use case always includes another mandatory use case, while «extend» represents optional or conditional behavior. Both are used only in use-case diagrams and are shown with dashed arrows."
    },
    {
        "title": "UML Activity Diagram",
        "textVertical": "Workflow and process modeling.",
        "textHorizontal": "Dynamic process representation.",
        "ptext": "An activity diagram is a UML behavior diagram used to model workflows and processes. It shows activities, decisions, parallel flows, start and end points, and the sequence of actions, similar to a flowchart."
    },
    {
        "title": "UML Access Modifiers",
        "textVertical": "Visibility of attributes and methods.",
        "textHorizontal": "Controls access in class diagrams.",
        "ptext": "UML uses symbols to represent visibility: public (+), private (-), protected (#), and package (~). These define which classes can access attributes or methods and correspond directly to access modifiers in object-oriented programming."
    },
    {
        "title": "Interfaces",
        "textVertical": "Defines a contract for classes.",
        "textHorizontal": "Specifies required methods without implementation.",
        "ptext": "An interface defines methods that implementing classes must provide. It supports loose coupling, modularity, and multiple inheritance of behavior. Interfaces ensure consistency across different classes while allowing flexible implementations."
    },
    {
        "title": "Data, Information, and Knowledge",
        "textVertical": "From symbols to understanding.",
        "textHorizontal": "Hierarchy of meaning in data processing.",
        "ptext": "Signs are basic symbols without meaning. Data is a structured collection of signs. Information arises when data is interpreted in context. Knowledge is created when information is understood and combined with experience, enabling decisions and actions."
    },
    {
        "title": "Database Systems",
        "textVertical": "Efficient data storage and management.",
        "textHorizontal": "Database plus DBMS.",
        "ptext": "A database system consists of a database and a database management system (DBMS). The DBMS manages storage, queries, security, integrity, and concurrent access. Database systems provide centralized, secure, and consistent data handling."
    },
    {
        "title": "Data Models",
        "textVertical": "Defines data structure and relationships.",
        "textHorizontal": "Foundation of database design.",
        "ptext": "A data model describes how data is structured, stored, and related. Choosing the right data model affects performance, consistency, and scalability. Common models include relational, object-oriented, document-oriented, and key-value models."
    },
    {
        "title": "Structured and Unstructured Data",
        "textVertical": "Different levels of organization.",
        "textHorizontal": "Impacts database selection.",
        "ptext": "Structured data follows a fixed schema and fits relational databases. Unstructured data has no predefined structure, such as images or videos. Semi-structured data, like JSON or XML, combines flexibility with structure and is often stored in NoSQL databases."
    },
    {
        "title": "Big Data – The 5 V",
        "textVertical": "Characteristics of large and complex data sets.",
        "textHorizontal": "Volume, Velocity, Variety, Veracity, and Value.",
        "ptext": "Big Data describes extremely large, complex, and fast-growing data sets that cannot be efficiently processed with traditional databases. The concept of Big Data is defined by the five V: Volume refers to the massive amount of data, Velocity describes the speed at which data is generated and processed, Variety represents the different data formats (structured, semi-structured, unstructured), Veracity addresses the reliability and quality of data, and Value focuses on extracting useful insights. Only through proper analysis do Big Data technologies like Hadoop, Spark, and NoSQL databases turn raw data into valuable information and knowledge."
    },
    {
        "title": "ACID Model",
        "textVertical": "Ensures reliability and consistency of database transactions.",
        "textHorizontal": "Atomicity, Consistency, Isolation, Durability.",
        "ptext": "The ACID model defines four fundamental properties that database transactions must fulfill to guarantee data integrity and reliability. Atomicity ensures that a transaction is executed completely or not at all. Consistency guarantees that all database rules and constraints are preserved after a transaction. Isolation ensures that concurrent transactions do not interfere with each other and behave as if executed sequentially. Durability guarantees that once a transaction is committed, its results are permanently stored, even in the event of system failures. ACID is a core concept of relational database systems such as MySQL, PostgreSQL, and Oracle."
    },
    {
        "title": "Database Transaction",
        "textVertical": "Logical unit of work in a database system.",
        "textHorizontal": "Executed completely or rolled back entirely.",
        "ptext": "A transaction is a sequence of database operations such as insert, update, or delete that are executed as a single logical unit. Transactions follow the ACID principles to ensure data consistency and reliability. A typical transaction lifecycle consists of beginning the transaction, executing operations, and either committing the changes to make them permanent or rolling them back if an error occurs. Transactions are essential in systems like banking, online shops, and accounting to prevent data loss and inconsistencies."
    },
    {
        "title": "ACID vs. BASE",
        "textVertical": "Consistency-oriented vs. availability-oriented models.",
        "textHorizontal": "Relational databases vs. NoSQL systems.",
        "ptext": "While ACID focuses on strict consistency and reliability, many NoSQL systems follow the BASE model: Basically Available, Soft state, and Eventual consistency. BASE systems prioritize availability and scalability over immediate consistency. This makes them suitable for Big Data and distributed systems where temporary inconsistencies are acceptable. In contrast, ACID-compliant databases are preferred for applications requiring high data accuracy, such as financial systems."
    },
    {
        "title": "NoSQL Databases",
        "textVertical": "Non-relational and highly scalable databases.",
        "textHorizontal": "Flexible data models for large and distributed systems.",
        "ptext": "NoSQL databases (Not Only SQL) are database systems that do not follow the traditional relational table-based model. They are designed for handling large volumes of distributed and rapidly changing data. NoSQL databases provide flexible data structures, high scalability, and fast performance. Common data models include key-value stores, document-oriented databases, column-based systems, and graph databases. Typical use cases include social media platforms, streaming services, IoT systems, and real-time analytics."
    },
    {
        "title": "BASE Model",
        "textVertical": "Consistency model used in NoSQL systems.",
        "textHorizontal": "Availability and scalability over strict consistency.",
        "ptext": "The BASE model is a consistency concept commonly used by NoSQL databases. BASE stands for Basically Available, Soft state, and Eventually consistent. Systems following BASE prioritize availability and performance, even if data is temporarily inconsistent. Changes are propagated asynchronously, meaning that all nodes will eventually reach a consistent state. This approach is well suited for large distributed systems where high availability is more important than immediate consistency."
    },
    {
        "title": "ACID vs BASE",
        "textVertical": "Strong consistency vs. eventual consistency.",
        "textHorizontal": "Relational databases compared to NoSQL systems.",
        "ptext": "ACID and BASE represent two different approaches to data consistency. ACID ensures strong consistency, reliability, and correctness, making it ideal for transactional systems such as banking or accounting. BASE allows temporary inconsistencies in favor of scalability and availability, which is suitable for systems like social media feeds or streaming platforms. The choice between ACID and BASE depends on application requirements, especially consistency versus scalability."
    },
    {
        "title": "Relational Databases",
        "textVertical": "Table-based and strongly structured databases.",
        "textHorizontal": "ACID-compliant systems for transactional applications.",
        "ptext": "Relational databases store data in tables with fixed schemas and predefined relationships using primary and foreign keys. They follow the ACID model to ensure data integrity and consistency. Relational databases use SQL for querying and are well suited for applications that require reliable transactions, such as business systems, finance, and accounting. Examples include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server."
    },
    {
        "title": "Relational vs NoSQL Databases",
        "textVertical": "Structured consistency vs flexible scalability.",
        "textHorizontal": "Different approaches for different application needs.",
        "ptext": "Relational databases provide strong consistency, clear structure, and powerful SQL-based queries but are less flexible and harder to scale horizontally. NoSQL databases offer flexible schemas, high scalability, and better performance for large distributed systems but often sacrifice immediate consistency. Relational databases are ideal for classic business applications, while NoSQL databases are better suited for Big Data, IoT, and real-time applications."
    },
    {
        "title": "Schema in Relational Databases",
        "textVertical": "Fixed and predefined structure.",
        "textHorizontal": "Strong structure ensures consistency.",
        "ptext": "Relational databases use a fixed schema. Each table has predefined columns with specific data types. Any schema change, such as adding or modifying a column, usually requires adapting existing data and can be time-consuming. This rigid structure ensures high data integrity and consistency, which is essential for transactional systems."
    },
    {
        "title": "Schema in NoSQL Databases",
        "textVertical": "Flexible or schema-less data structures.",
        "textHorizontal": "Adaptable data models for changing requirements.",
        "ptext": "NoSQL databases use flexible or schema-less data models. Each record or document can have different fields, allowing easy changes to the data structure without modifying existing data. This flexibility is ideal for applications with evolving requirements or heterogeneous data, such as web applications and IoT systems."
    },
    {
        "title": "Scalability Strategies",
        "textVertical": "Vertical vs horizontal scaling.",
        "textHorizontal": "Different approaches to handle growing workloads.",
        "ptext": "Relational databases typically scale vertically by upgrading hardware resources such as CPU, RAM, or storage. NoSQL databases are designed to scale horizontally by adding more servers to distribute data and load. Horizontal scaling enables high availability and performance in large distributed systems."
    },
    {
        "title": "ACID and Performance",
        "textVertical": "Consistency-focused vs performance-focused systems.",
        "textHorizontal": "Trade-off between integrity and scalability.",
        "ptext": "Relational databases strictly follow the ACID principles, ensuring strong consistency and reliability. This results in excellent performance for complex queries and transactions but can limit scalability. NoSQL databases often relax ACID guarantees in favor of the BASE model, achieving higher performance and scalability at the cost of temporary inconsistencies."
    },
    {
        "title": "Popular Database Systems",
        "textVertical": "Widely used relational and NoSQL databases.",
        "textHorizontal": "Different tools for different use cases.",
        "ptext": "Popular relational database systems include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server, commonly used in business-critical applications. Popular NoSQL systems include MongoDB for document storage, Cassandra for distributed column storage, Redis for in-memory key-value access, and Neo4j for graph-based data."
    },
    {
        "title": "Use Cases: Relational vs NoSQL",
        "textVertical": "Transactional systems vs scalable data platforms.",
        "textHorizontal": "Choosing the right database for the task.",
        "ptext": "Relational databases are ideal for applications requiring strong consistency, complex queries, and reliable transactions, such as banking systems and ERP solutions. NoSQL databases are better suited for Big Data, real-time analytics, social media platforms, and IoT systems where scalability and flexibility are critical."
    },
    {
        "title": "Relational Database Design Process",
        "textVertical": "Structured approach to database creation.",
        "textHorizontal": "From requirements to stable schema.",
        "ptext": "The design of a relational database starts with an analysis phase. Requirements are gathered, necessary data is identified, entities such as customers or products are defined, and relationships between them are modeled. This structured process ensures a consistent, efficient, and maintainable database design."
    },
    {
        "title": "Konzeptionelle Phase",
        "textVertical": "Logisches Datenmodell erstellen.",
        "textHorizontal": "Entitäten und Beziehungen unabhängig vom DBMS definieren.",
        "ptext": "In der konzeptionellen Phase wird ein Entity-Relationship-Modell (ERM) erstellt. Dabei werden Entitäten, ihre Attribute sowie die Beziehungen zwischen ihnen definiert. Es werden ausschließlich logische Strukturen beschrieben, ohne Rücksicht auf eine konkrete Datenbanksoftware. Das Ergebnis ist ein ER-Diagramm, das die Struktur der Datenbank übersichtlich darstellt."
    },
    {
        "title": "Logische Phase",
        "textVertical": "ERM in Tabellen übersetzen.",
        "textHorizontal": "Struktur für relationale Datenbanken festlegen.",
        "ptext": "In der logischen Phase wird das konzeptionelle Modell in ein relationales Tabellenmodell überführt. Entitäten werden zu Tabellen, Attribute zu Spalten. Primär- und Fremdschlüssel werden festgelegt, Tabellen normalisiert und Integritätsregeln definiert, sodass das Modell direkt in einem RDBMS umgesetzt werden kann."
    },
    {
        "title": "Implementierungsphase",
        "textVertical": "Technische Umsetzung im RDBMS.",
        "textHorizontal": "Tabellen, Constraints und Rechte erstellen.",
        "ptext": "In der Implementierungsphase wird das logische Datenmodell mit Hilfe von SQL in der Datenbanksoftware umgesetzt. Tabellen werden angelegt, Primär- und Fremdschlüssel definiert, Constraints, Indizes und Views erstellt sowie Testdaten eingefügt. Das Ergebnis ist eine funktionsfähige relationale Datenbank."
    },
    {
        "title": "Primärschlüssel (Primary Key)",
        "textVertical": "Eindeutige Identifikation.",
        "textHorizontal": "Jeder Datensatz ist eindeutig bestimmbar.",
        "ptext": "Ein Primärschlüssel ist ein Attribut oder eine Attributkombination, die jeden Datensatz in einer Tabelle eindeutig identifiziert. Er darf nicht NULL sein und kommt pro Tabelle genau einmal vor. Primärschlüssel sind die Grundlage für Entity-Integrität."
    },
    {
        "title": "Fremdschlüssel (Foreign Key)",
        "textVertical": "Verknüpfung zwischen Tabellen.",
        "textHorizontal": "Sichert referentielle Integrität.",
        "ptext": "Ein Fremdschlüssel ist ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist. Er stellt Beziehungen zwischen Tabellen her und sorgt dafür, dass nur gültige, existierende Datensätze referenziert werden."
    },
    {
        "title": "Transformationsregeln",
        "textVertical": "ERM → Relationale Tabellen.",
        "textHorizontal": "Standardregeln für die Umsetzung.",
        "ptext": "Beim Überführen eines ER-Modells in relationale Tabellen gelten feste Transformationsregeln: Entitäten werden zu Tabellen, Attribute zu Spalten. 1:n-Beziehungen werden durch Fremdschlüssel in der n-Tabelle abgebildet, n:m-Beziehungen durch separate Verknüpfungstabellen."
    },
    {
        "title": "Normalisierung",
        "textVertical": "Redundanz reduzieren.",
        "textHorizontal": "Konsistenz und Datenqualität sichern.",
        "ptext": "Normalisierung ist der Prozess zur Strukturierung von Tabellen, um Redundanzen zu vermeiden und Datenkonsistenz zu gewährleisten. Durch die Einhaltung der Normalformen (1NF, 2NF, 3NF) werden Einfüge-, Lösch- und Änderungsanomalien verhindert."
    },
    {
        "title": "Redundanz",
        "textVertical": "Mehrfach gespeicherte Daten.",
        "textHorizontal": "Ursache für Inkonsistenzen.",
        "ptext": "Redundanz entsteht, wenn dieselben Informationen mehrfach in der Datenbank gespeichert werden. Änderungen müssen dann an mehreren Stellen durchgeführt werden, was leicht zu widersprüchlichen Daten führt. Redundanz wird durch Normalisierung gezielt vermieden."
    },
    {
        "title": "Datenintegrität",
        "textVertical": "Korrekte und widerspruchsfreie Daten.",
        "textHorizontal": "Durch Regeln und Schlüssel gesichert.",
        "ptext": "Datenintegrität stellt sicher, dass Daten korrekt, vollständig und konsistent sind. Sie umfasst Entity-Integrität (Primärschlüssel), referentielle Integrität (Fremdschlüssel) und Domänenintegrität (gültige Wertebereiche und Datentypen)."
    },
    {
        "title": "Anomalien",
        "textVertical": "Probleme durch schlechte Struktur.",
        "textHorizontal": "Folge von Redundanz.",
        "ptext": "Anomalien treten auf, wenn Daten nicht sauber strukturiert sind. Einfügeanomalien verhindern das Hinzufügen neuer Daten, Löschanomalien führen zum unbeabsichtigten Datenverlust und Änderungs- bzw. Mutationsanomalien erzeugen Inkonsistenzen bei Updates."
    },
    {
        "title": "Ziel der Normalisierung",
        "textVertical": "Saubere Datenbankstruktur.",
        "textHorizontal": "Jede Information nur einmal speichern.",
        "ptext": "Das Ziel der Normalisierung ist es, Redundanz zu minimieren, Integrität zu sichern und Anomalien zu vermeiden. Jede Information wird genau einmal gespeichert, Beziehungen werden ausschließlich über Primär- und Fremdschlüssel abgebildet."
    },
    {
        "title": "Objektorientierung (OOP)",
        "textVertical": "Modelliert reale Dinge.",
        "textHorizontal": "Objekte mit Eigenschaften und Verhalten.",
        "ptext": "Objektorientierung bedeutet, reale Dinge als Objekte im Code abzubilden. Objekte besitzen Attribute (Eigenschaften) und Methoden (Handlungen). Ziel ist verständlicher, wartbarer und realitätsnaher Code."
    },
    {
        "title": "Klasse",
        "textVertical": "Bauplan für Objekte.",
        "textHorizontal": "Definiert Struktur und Verhalten.",
        "ptext": "Eine Klasse ist ein Bauplan, aus dem Objekte erzeugt werden. Sie legt fest, welche Attribute ein Objekt besitzt und welche Methoden es ausführen kann."
    },
    {
        "title": "Objekt",
        "textVertical": "Konkrete Instanz.",
        "textHorizontal": "Entsteht aus einer Klasse.",
        "ptext": "Ein Objekt ist eine konkrete Ausprägung einer Klasse. Mehrere Objekte können aus derselben Klasse erzeugt werden, besitzen aber eigene Attributwerte."
    },
    {
        "title": "Attribute",
        "textVertical": "Eigenschaften eines Objekts.",
        "textHorizontal": "Beschreiben den Zustand.",
        "ptext": "Attribute speichern die Eigenschaften eines Objekts, z. B. Farbe oder Marke eines Autos. Jedes Objekt hat seine eigenen Attributwerte."
    },
    {
        "title": "Methoden",
        "textVertical": "Funktionen eines Objekts.",
        "textHorizontal": "Beschreiben das Verhalten.",
        "ptext": "Methoden sind Funktionen, die zu einem Objekt gehören. Sie definieren, welche Aktionen ein Objekt ausführen kann, z. B. fahren() oder hupen()."
    },
    {
        "title": "Konstruktor (__init__)",
        "textVertical": "Initialisiert Objekte.",
        "textHorizontal": "Wird beim Erzeugen aufgerufen.",
        "ptext": "Der Konstruktor __init__ wird automatisch aufgerufen, wenn ein neues Objekt erstellt wird. Er dient dazu, Attribute mit Startwerten zu versehen."
    },
    {
        "title": "self",
        "textVertical": "Referenz auf das Objekt.",
        "textHorizontal": "Verbindet Objekt und Methode.",
        "ptext": "self verweist innerhalb einer Klasse immer auf das aktuelle Objekt. Damit kann auf Attribute und andere Methoden desselben Objekts zugegriffen werden."
    },
    {
        "title": "UML",
        "textVertical": "Grafische Modellierung.",
        "textHorizontal": "Plant Softwarestrukturen.",
        "ptext": "UML (Unified Modeling Language) ist eine grafische Sprache zur Planung und Dokumentation von Software. Sie ist unabhängig von Programmiersprachen."
    },
    {
        "title": "UML-Klassendiagramm",
        "textVertical": "Struktur von Klassen.",
        "textHorizontal": "Zeigt Attribute und Methoden.",
        "ptext": "Das UML-Klassendiagramm stellt Klassen mit ihren Attributen, Methoden und Beziehungen dar. Es dient als Bauplan vor der Implementierung im Code."
    },
    {
        "title": "UML & Python",
        "textVertical": "Planung vor Code.",
        "textHorizontal": "Diagramm wird implementiert.",
        "ptext": "In der Praxis werden Klassen zunächst als UML-Diagramm entworfen und anschließend in Python umgesetzt. Das erleichtert Planung, Verständnis und Wartung."
    },
    {
        "title": "Python: Zugriffmodifikatoren",
        "textVertical": "Regeln für Sichtbarkeit von Attributen.",
        "textHorizontal": "Bestimmt, welche Teile einer Klasse von außen zugänglich sind.",
        "ptext": "In Python können Klassenattribute und Methoden durch Zugriffmodifikatoren gesteuert werden: `public` ist standardmäßig für alle sichtbar, `protected` wird durch ein führendes Unterstrich `_` gekennzeichnet und sollte nur innerhalb der Klasse oder Unterklassen verwendet werden, `private` wird durch zwei führende Unterstriche `__` markiert und ist nur innerhalb der Klasse zugänglich. Klassennamen selbst folgen den üblichen Namenskonventionen, üblicherweise mit Großbuchstaben beginnend, und helfen bei der Strukturierung und Lesbarkeit des Codes. Beispiel:\n\nclass Beispiel:\n    def __init__(self):\n        self.public_attr = 'für alle sichtbar'\n        self._protected_attr = 'nur für Klasse und Unterklasse'\n        self.__private_attr = 'nur innerhalb der Klasse'\n\nobj = Beispiel()\nprint(obj.public_attr)        # funktioniert\nprint(obj._protected_attr)    # funktioniert, sollte aber vorsichtig verwendet werden\n# print(obj.__private_attr)   # würde Fehler geben"
    },
    {
        "title": "Python: Getter und Setter",
        "textVertical": "Kontrollierter Zugriff auf Attribute.",
        "textHorizontal": "Erlaubt Lesen und Schreiben von Attributen über Methoden.",
        "ptext": "Getter und Setter sind Methoden in Python, die den Zugriff auf Attribute einer Klasse kontrollieren. Mit einem Getter wird ein Attributwert ausgelesen, mit einem Setter kann ein Attributwert verändert werden, oft mit Validierung oder zusätzlichen Aktionen. In Python wird das oft über die `@property`-Dekoratoren realisiert, um sauberen Zugriff zu ermöglichen, ohne direkt auf private Attribute zuzugreifen. Beispiel:\n\nclass Person:\n    def __init__(self, name):\n        self.__name = name  # privates Attribut\n\n    @property\n    def name(self):\n        return self.__name  # Getter\n\n    @name.setter\n    def name(self, value):\n        if len(value) > 0:\n            self.__name = value  # Setter mit Validierung\n        else:\n            print('Name darf nicht leer sein')\n\np = Person('Istvan')\nprint(p.name)      # ruft Getter auf\np.name = 'Anna'    # ruft Setter auf\nprint(p.name)"
    },
    {
        "title": "Python: Getter und Setter",
        "textVertical": "Kontrollierter Zugriff auf Attribute.",
        "textHorizontal": "Erlaubt Lesen und Schreiben von Attributen über Methoden.",
        "ptext": "Getter und Setter sind Methoden in Python, die den Zugriff auf Attribute einer Klasse kontrollieren. Mit einem Getter wird ein Attributwert ausgelesen, mit einem Setter kann ein Attributwert verändert werden, oft mit Validierung oder zusätzlichen Aktionen. In Python wird das oft über die `@property`-Dekoratoren realisiert, um sauberen Zugriff zu ermöglichen, ohne direkt auf private Attribute zuzugreifen.\n\n`self` ist ein Referenzparameter, der auf das aktuelle Objekt der Klasse zeigt. Alle Attribute und Methoden der Instanz werden über `self` angesprochen. Der Konstruktor `__init__` wird automatisch aufgerufen, wenn ein neues Objekt der Klasse erstellt wird, und dient dazu, Attribute zu initialisieren.\n\nBeispiel:\n\nclass Person:\n    def __init__(self, name):  # Konstruktor\n        self.__name = name      # privates Attribut\n\n    @property\n    def name(self):            # Getter\n        return self.__name\n\n    @name.setter\n    def name(self, value):     # Setter mit Validierung\n        if len(value) > 0:\n            self.__name = value\n        else:\n            print('Name darf nicht leer sein')\n\np = Person('Istvan')\nprint(p.name)      # ruft Getter auf\np.name = 'Anna'    # ruft Setter auf\nprint(p.name)"
    },
    {
        "title": "Python: Konstruktor (__init__)",
        "textVertical": "Initialisierung von Objekten.",
        "textHorizontal": "Eine besondere Methode, die automatisch aufgerufen wird, wenn ein Objekt erstellt wird.",
        "ptext": "Ein Konstruktor ist eine spezielle Methode in Python, die automatisch aufgerufen wird, wenn ein Objekt einer Klasse erstellt wird. Er dient dazu, die Attribute des Objekts zu initialisieren. In Python heißt der Konstruktor immer `__init__(self, ...)`. Beispiel einfach:\n\nclass Auto:\n    def __init__(self, marke, farbe):\n        self.marke = marke\n        self.farbe = farbe\n\nmein_auto = Auto('BMW', 'Rot')\nprint(mein_auto.marke)  # BMW\nprint(mein_auto.farbe)  # Rot\n\nMan kann auch Standardwerte angeben:\nclass Auto:\n    def __init__(self, marke='VW', farbe='Schwarz'):\n        self.marke = marke\n        self.farbe = farbe\n\nauto1 = Auto()\nauto2 = Auto('Audi', 'Blau')\nprint(auto1.marke, auto1.farbe)  # VW Schwarz\nprint(auto2.marke, auto2.farbe)  # Audi Blau\n\nDer Konstruktor kann auch komplexere Objekte initialisieren, z.B. Listen oder andere Objekte:\n\nclass Mitarbeiter:\n    def __init__(self, name, gehalt):\n        self.name = name\n        self.gehalt = gehalt\n        self.projekte = []  # leere Liste\n\nmitarbeiter1 = Mitarbeiter('Max', 3000)\nprint(mitarbeiter1.projekte)  # []\n\n💡 Merksatz: Der Konstruktor baut das Objekt zusammen, bevor du es benutzt."
    },
    {
        "title": "Python: Vererbung",
        "textVertical": "Klassen können Eigenschaften weitergeben.",
        "textHorizontal": "Eine Kindklasse übernimmt Attribute und Methoden einer Elternklasse.",
        "ptext": "Vererbung bedeutet, dass eine Klasse (Kindklasse) Eigenschaften und Methoden einer anderen Klasse (Elternklasse) übernimmt. Vorteil: Code wiederverwenden, Strukturen übersichtlich halten, Änderungen leichter machen. Beispiel aus der Realität: Fahrzeug hat Attribute wie geschwindigkeit und Methode fahren(), Auto und Fahrrad erben diese Eigenschaften und müssen sie nicht neu schreiben.\n\nSyntax in Python:\nclass Elternklasse:\n    pass\n\nclass Kindklasse(Elternklasse):\n    pass\n\nBeispiel:\nclass Fahrzeug:\n    def __init__(self, marke):\n        self.marke = marke\n    def fahren(self):\n        print(f\"{self.marke} fährt!\")\n\nclass Auto(Fahrzeug):\n    def hupen(self):\n        print(f\"{self.marke} hupt: Hup Hup!\")\n\nmein_auto = Auto('BMW')\nmein_auto.fahren()  # BMW fährt!  (geerbt)\nmein_auto.hupen()   # BMW hupt: Hup Hup! (eigene Methode)\n\nKonstruktor in der Kindklasse:\nclass Auto(Fahrzeug):\n    def __init__(self, marke, farbe):\n        super().__init__(marke)  # Konstruktor der Elternklasse aufrufen\n        self.farbe = farbe        # eigenes Attribut\n\nmein_auto = Auto('Audi', 'Blau')\nprint(mein_auto.marke)  # Audi\nprint(mein_auto.farbe)  # Blau\n\nMethod Overriding:\nclass Fahrzeug:\n    def fahren(self):\n        print('Das Fahrzeug fährt.')\n\nclass Auto(Fahrzeug):\n    def fahren(self):\n        print('Das Auto fährt schneller!')\n\nmein_auto = Auto()\nmein_auto.fahren()  # Das Auto fährt schneller!\n\n💡 Merksätze:\n- Elternklasse (Superclass) → Basis-Klasse, die Attribute/Methoden vererbt\n- Kindklasse (Subclass) → erbt von Elternklasse, kann erweitern oder überschreiben\n- super() → ruft Konstruktor oder Methoden der Elternklasse auf\n- Method Overriding → Kindklasse überschreibt Methoden der Elternklasse\n- Vorteil → Code wiederverwenden, übersichtlich bleiben"
    },
    {
        "title": "Python: Tkinter",
        "textVertical": "GUI-Programmierung in Python.",
        "textHorizontal": "Mit Tkinter kannst du Fenster, Buttons, Eingabefelder und Labels erstellen.",
        "ptext": "Tkinter ist die Standard-GUI-Bibliothek von Python und erlaubt das Erstellen von Fenstern, Buttons, Eingabefeldern, Labels und mehr. Vorteil: einfach, direkt in Python enthalten, meist keine extra Installation nötig.\n\nBeispiel: Fenster erstellen\nimport tkinter as tk\nfenster = tk.Tk()\nfenster.title('Mein erstes Fenster')\nfenster.geometry('400x200')\nfenster.mainloop()\n\nWidgets – Bausteine einer GUI:\n- Label → Text oder Bild anzeigen\n- Button → klickbarer Button\n- Entry → Eingabefeld für Text\n- Text → mehrzeiliges Texteingabefeld\n- Frame → Container für andere Widgets\n\nBeispiel Label + Button:\ndef button_geklickt():\n    label.config(text='Hallo, du hast den Button geklickt!')\n\nfenster = tk.Tk()\nfenster.title('GUI Beispiel')\nfenster.geometry('300x150')\nlabel = tk.Label(fenster, text='Willkommen!', font=('Arial', 14))\nlabel.pack(pady=20)\nbutton = tk.Button(fenster, text='Klick mich', command=button_geklickt)\nbutton.pack()\nfenster.mainloop()\n\nLayouts:\n- pack() → stapeln\n- grid() → Raster / Tabelle\n- place() → absolute Position\n\nMini-Tipp: Starte klein (Fenster + 1 Label + 1 Button), dann Eingabefelder und Buttons, später Layouts verwenden. Übungs-Idee: GUI für Shop-Projekt mit Produktliste, Preis, Menge und Button 'Bestellen'."
    },
    {
        "title": "Datenbank MySQL",
        "textVertical": "Grundlagen von MySQL.",
        "textHorizontal": "Was ist MySQL und wozu dient es?",
        "ptext": "MySQL ist ein relationales Datenbankmanagementsystem, das Daten in Tabellen speichert. Es ermöglicht das Anlegen, Abfragen, Ändern und Löschen von Daten. Mit MySQL kannst du Daten effizient verwalten und komplexe Abfragen ausführen, z.B. SELECT, INSERT, UPDATE oder DELETE."
    },
    {
        "title": "Try/Catch und Exceptions",
        "textVertical": "Fehlerbehandlung in Java.",
        "textHorizontal": "Wie Java mit Fehlern umgeht und Ausnahmen behandelt.",
        "ptext": "In Java werden Fehler über Exceptions behandelt. try/catch-Blöcke erlauben, Code auszuführen und mögliche Fehler abzufangen. Beispiel:\ntry {\n    // Code, der Fehler werfen könnte\n} catch (Exception e) {\n    e.printStackTrace(); // Fehler anzeigen\n}\nSo werden Programme stabiler und Abstürze vermieden."
    },
    {
        "title": "Datenbankverbindung erstellen",
        "textVertical": "Verbindung zu MySQL aufbauen.",
        "textHorizontal": "Wie Java mit JDBC eine DB-Verbindung herstellt.",
        "ptext": "Um eine Verbindung zu MySQL herzustellen, nutzt man JDBC:\nClass.forName('com.mysql.cj.jdbc.Driver');\nConnection conn = DriverManager.getConnection('jdbc:mysql://localhost:3306/meine_db','benutzer','passwort');\n\n💡 Merksatz: Verbindung immer in try/catch einbetten, um Fehler abzufangen."
    },
    {
        "title": "Datenbank mit Java ansprechen",
        "textVertical": "SQL-Befehle aus Java ausführen.",
        "textHorizontal": "Statements erstellen, Abfragen ausführen, Ergebnisse auswerten.",
        "ptext": "Nachdem die Verbindung steht, kann man SQL-Befehle ausführen:\nStatement stmt = conn.createStatement();\nResultSet rs = stmt.executeQuery('SELECT * FROM tabelle');\nwhile(rs.next()) {\n    System.out.println(rs.getString('spalte1') + ' | ' + rs.getInt('spalte2'));\n}\n💡 Merksatz: Mit Statement und ResultSet kann man Daten auslesen und weiterverarbeiten."
    },
    {
        "title": "SQL SELECT",
        "textVertical": "Daten aus der Datenbank lesen.",
        "textHorizontal": "SELECT wird verwendet, um Daten aus einer Tabelle abzufragen.",
        "ptext": "🔹 Definition:\nSELECT ist ein SQL-Befehl, mit dem Daten aus einer Datenbank gelesen werden.\n\n🔹 Grundsyntax:\nSELECT spaltenname FROM tabellenname;\n\n🔹 Beispiel:\nSELECT name, alter FROM kunde;\n→ liest die Spalten name und alter aus der Tabelle kunde\n\n🔹 Mit WHERE:\nSELECT * FROM kunde WHERE alter >= 18;\n→ nur Kunden ab 18 Jahren\n\n🔹 Merksatz:\nSELECT = Daten lesen"
    },
    {
        "title": "Statement (Java JDBC)",
        "textVertical": "SQL-Befehl an die Datenbank senden.",
        "textHorizontal": "Ein Statement führt SQL-Befehle in Java aus.",
        "ptext": "🔹 Definition:\nEin Statement ist ein Java-Objekt, mit dem SQL-Befehle an die Datenbank geschickt werden.\n\n🔹 Ablauf:\n1. Verbindung zur Datenbank herstellen\n2. Statement erstellen\n3. SQL-Befehl ausführen\n\n🔹 Beispiel:\nStatement stmt = connection.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM kunde\");\n\n🔹 Wichtige Methoden:\nexecuteQuery() → für SELECT\nexecuteUpdate() → für INSERT, UPDATE, DELETE\n\n🔹 Merksatz:\nStatement = Vermittler zwischen Java und SQL"
    },
    {
        "title": "ResultSet auswerten",
        "textVertical": "Ergebnisse der Abfrage verarbeiten.",
        "textHorizontal": "ResultSet enthält die Daten, die SELECT zurückliefert.",
        "ptext": "🔹 Definition:\nEin ResultSet enthält das Ergebnis einer SELECT-Abfrage.\n\n🔹 Funktionsweise:\n• ResultSet ist wie ein Zeiger\n• Startet vor der ersten Zeile\n• Mit next() springt man zur nächsten Zeile\n\n🔹 Beispiel:\nwhile (rs.next()) {\n    int id = rs.getInt(\"id\");\n    String name = rs.getString(\"name\");\n    System.out.println(id + \" \" + name);\n}\n\n🔹 Zugriff auf Spalten:\ngetInt(\"spalte\")\ngetString(\"spalte\")\ngetDouble(\"spalte\")\n\n🔹 Merksatz:\nResultSet = Tabellen-Ergebnis zeilenweise lesen"
    },
    {
        "title": "Gesamtablauf: SELECT in Java",
        "textVertical": "Vom SQL-Befehl bis zur Ausgabe.",
        "textHorizontal": "So arbeiten SELECT, Statement und ResultSet zusammen.",
        "ptext": "🔹 Ablauf Schritt für Schritt:\n1. Verbindung herstellen (Connection)\n2. Statement erstellen\n3. SELECT ausführen\n4. ResultSet auswerten\n5. Ressourcen schließen\n\n🔹 Beispiel Ablauf:\nConnection → Statement → SELECT → ResultSet → Ausgabe\n\n🔹 Wichtig:\nAm Ende immer schließen:\nrs.close();\nstmt.close();\nconnection.close();\n\n🔹 Merksatz:\nSELECT liefert Daten → Statement führt aus → ResultSet liest sie"
    },
    {
        "title": "NoSQL-Datenbanken",
        "textVertical": "Flexible Datenverwaltung ohne feste Tabellen.",
        "textHorizontal": "NoSQL speichert Daten flexibel, z. B. als Dokumente oder Key-Value-Paare.",
        "ptext": "NoSQL bedeutet „Not only SQL“ – nicht ausschließlich SQL. Es gibt keine festen Tabellen wie in MySQL, die Datenstruktur ist flexibel (JSON, Key-Value), und NoSQL ist horizontal skalierbar sowie schnell bei Lese-/Schreibzugriffen.\n\nBeispiele:\n- Key-Value Store → Redis, DynamoDB (einfacher Schlüssel-Wert Speicher)\n- Document Store → MongoDB (Daten als JSON-Dokumente)\n- Column Store → Cassandra (spaltenorientiert, für große Datenmengen)\n- Graph Database → Neo4j (Netzwerke zwischen Objekten)\n\nUnterschied zu SQL:\n- Struktur: SQL = Tabellen, Spalten, Zeilen / NoSQL = flexibel, Dokumente/Key-Value\n- Schema: SQL = fest / NoSQL = dynamisch\n- Abfragen: SQL = SQL / NoSQL = eigene Query-Sprache oder API\n- Skalierung: SQL = vertikal / NoSQL = horizontal\n- Beispiele: SQL = MySQL, PostgreSQL / NoSQL = MongoDB, Redis\n\nDatenmodelle:\n1. Key-Value: 'user:1' → { 'name': 'Max', 'alter': 25 }\n2. Document Store: JSON-Dokument mit verschachtelten Daten, z.B. MongoDB\n3. Column Store: Spalten statt Zeilen → schnelle Analysen großer Datenmengen\n4. Graph: Knoten & Kanten → ideal für Netzwerke, Beziehungen\n\nVergleich SQL vs NoSQL:\n- SQL-Tabelle Produkte: id | name | preis\n- NoSQL-Dokument MongoDB: alles in einem JSON-Dokument, flexibel, kein festes Schema nötig\n\n💡 Merksatz: SQL = stabil & strukturiert, NoSQL = flexibel & skalierbar.\nPraxis-Tipp: Kleine Projekte → SQL; große Web-Apps / soziale Netzwerke → NoSQL."
    },
    {
        "title": "Unterschied SQL vs NoSQL",
        "textVertical": "Vergleich von relationalen und NoSQL-Datenbanken.",
        "textHorizontal": "Struktur, Schema, Skalierung und Abfragen unterscheiden sich stark.",
        "ptext": "Relationale SQL-Datenbanken speichern Daten in festen Tabellen mit Spalten und Zeilen, haben ein definiertes Schema und nutzen SQL zur Abfrage. Skalierung erfolgt meist vertikal (stärkerer Server). Beispiele: MySQL, PostgreSQL.\n\nNoSQL-Datenbanken sind flexibel, speichern Daten z.B. als Dokumente, Key-Value-Paare oder Graphen, haben dynamische Schemata und eigene Abfragesprachen oder APIs. Skalierung erfolgt horizontal (mehr Server). Beispiele: MongoDB, Redis, Neo4j.\n\n💡 Merksatz: SQL = stabil & strukturiert, NoSQL = flexibel & skalierbar."
    },
    {
        "title": "Dokumentorientierte Datenbank",
        "textVertical": "Daten als JSON-ähnliche Dokumente.",
        "textHorizontal": "Speichert alle Informationen eines Objekts in einem Dokument.",
        "ptext": "Dokumentorientierte Datenbanken speichern Daten in Dokumenten, meist im JSON-Format. Vorteil: verschachtelte Daten in einem Objekt, kein festes Schema nötig, sehr flexibel.\n\nBeispiel MongoDB:\n{\n  '_id': 1,\n  'name': 'Max',\n  'produkte': [\n    {'artikel': 'Schrauben', 'preis': 5.60},\n    {'artikel': 'Hammer', 'preis': 4.00}\n  ]\n}\n\n💡 Merksatz: Alles in einem Dokument → leicht zu verwalten, flexibel, ideal für komplexe Objekte."
    },
    {
        "title": "Graphdatenbank",
        "textVertical": "Daten als Knoten und Kanten.",
        "textHorizontal": "Ideal für Netzwerke, Beziehungen und Verbindungen.",
        "ptext": "Graphdatenbanken speichern Informationen in Form von Knoten (Objekte) und Kanten (Verbindungen). Sie sind optimal für soziale Netzwerke, Lieferketten oder Beziehungsanalysen.\n\nBeispiel Neo4j: Freunde, Lieferanten oder Netzwerkverbindungen können direkt modelliert werden. Abfragen erfolgen über spezielle Graph-Abfragesprachen.\n\n💡 Merksatz: Graphdatenbanken → ideal für komplexe Beziehungen zwischen Objekten."
    },
    {
        "title": "Key-Value-Datenbank",
        "textVertical": "Daten als Schlüssel-Wert-Paare.",
        "textHorizontal": "Sehr schnell, einfache Speicherung von einzelnen Werten.",
        "ptext": "Key-Value-Datenbanken speichern Daten als einfache Paare: Schlüssel → Wert. Sie sind extrem performant für Lese-/Schreibzugriffe, aber weniger geeignet für komplexe Abfragen.\n\nBeispiel Redis:\n'user:1' → {'name': 'Max', 'alter': 25}\n'user:2' → {'name': 'Anna', 'alter': 30}\n\n💡 Merksatz: Key-Value → blitzschnell für einfache Daten, minimaler Overhead."
    },
    {
        "title": "Spaltenorientierte Datenbank",
        "textVertical": "Daten spaltenweise speichern.",
        "textHorizontal": "Optimiert für große Datenmengen und schnelle Analysen.",
        "ptext": "Spaltenorientierte Datenbanken speichern Daten nach Spalten statt nach Zeilen. Vorteil: sehr schnelle Aggregationen und Analysen großer Datenmengen.\n\nBeispiel Cassandra: Jede Spalte kann unabhängig abgerufen oder geschrieben werden, ideal für Big Data.\n\n💡 Merksatz: Spaltenorientiert → optimal für analytische Abfragen und große Datensätze."
    },
    {
        "title": "MongoDB-Client",
        "textVertical": "Werkzeuge zum Zugriff auf MongoDB.",
        "textHorizontal": "Clients ermöglichen Verbindung, Abfragen und Verwaltung der Datenbank.",
        "ptext": "Ein MongoDB-Client ist ein Programm oder Tool, mit dem man auf eine MongoDB-Datenbank zugreift. Er ermöglicht das Ausführen von Abfragen, das Einfügen, Ändern oder Löschen von Daten sowie die Verwaltung von Datenbanken und Collections. Beispiele: MongoDB Compass (GUI), Robo 3T, oder der Mongo Shell CLI-Client.\n\n💡 Merksatz: Mit einem Client kann man MongoDB einfach administrieren und Daten bearbeiten."
    },
    {
        "title": "MongoDB-Datenbank",
        "textVertical": "Dokumentorientierte NoSQL-Datenbank.",
        "textHorizontal": "Speichert Daten als JSON-Dokumente, flexibel und skalierbar.",
        "ptext": "MongoDB ist eine dokumentorientierte NoSQL-Datenbank. Sie speichert Daten in JSON-ähnlichen Dokumenten in sogenannten Collections. Vorteil: flexible Schemata, einfaches Hinzufügen neuer Felder, horizontal skalierbar für große Datenmengen.\n\nBeispiel Dokument in MongoDB:\n{\n  '_id': 1,\n  'name': 'Max',\n  'produkte': [\n    {'artikel': 'Schrauben', 'preis': 5.60},\n    {'artikel': 'Hammer', 'preis': 4.00}\n  ]\n}\n\n💡 Merksatz: MongoDB eignet sich ideal für flexible, moderne Webanwendungen und große Datenmengen."
    },
    {
        "title": "Cloudbasierte Datenbank",
        "textVertical": "Datenbank in der Cloud.",
        "textHorizontal": "Betrieben auf Servern eines Anbieters, weltweit zugänglich und verwaltet.",
        "ptext": "Eine cloudbasierte Datenbank läuft nicht auf deinem eigenen Computer oder Server, sondern auf Servern eines Anbieters (z. B. Amazon AWS, Microsoft Azure, Google Cloud). Vorteile: Zugriff über Internet/API, Backup und Wartung automatisch, Skalierung nach Bedarf, Bezahlung nach Nutzung.\n\nUnterschied zu klassischen Datenbanken:\n- Standort: Cloud-Server vs eigener Server\n- Wartung: Anbieter vs selbst\n- Skalierung: horizontal automatisch vs vertikal begrenzt\n- Zugriff: global vs lokal/netzwerk\n- Backup: automatisch vs manuell\n\nBeispiele:\n- SQL: Amazon RDS, Google Cloud SQL, Azure SQL Database\n- NoSQL: MongoDB Atlas, Amazon DynamoDB, Firebase Realtime Database\n\nVorteile: keine eigene Hardware nötig, automatische Backups, hohe Skalierbarkeit, weltweiter Zugriff, geringere Einstiegskosten.\nNachteile: Abhängigkeit vom Anbieter, Kosten bei starker Nutzung, Datenschutz/Compliance.\n\n💡 Merksatz: Cloud DB = Datenbank „als Service“, du konzentrierst dich auf Daten & Abfragen, der Anbieter kümmert sich um alles andere."
    },
    {
        "title": "Selbstverwaltete Cloud-Datenbank",
        "textVertical": "Cloud-Datenbank, die du selbst betreibst.",
        "textHorizontal": "Du installierst, konfigurierst und wartest die Datenbank in der Cloud selbst.",
        "ptext": "Eine selbstverwaltete Cloud-Datenbank läuft in der Cloud (z. B. auf virtuellen Maschinen), aber alle Aufgaben wie Installation, Wartung, Backup, Updates und Skalierung müssen vom Benutzer selbst übernommen werden.\n\n💡 Merksatz: Du hast volle Kontrolle, aber auch volle Verantwortung."
    },
    {
        "title": "Automatisierte Cloud-Datenbank",
        "textVertical": "Teilweise Management durch Anbieter.",
        "textHorizontal": "Anbieter übernimmt Backups, Updates oder Skalierung, du verwaltest die Datenbank.",
        "ptext": "Bei einer automatisierten Cloud-Datenbank erledigt der Anbieter bestimmte Aufgaben automatisch, z. B. Backups oder einfache Updates. Der Nutzer kümmert sich weiterhin um Datenbankstruktur, Abfragen und Konfiguration.\n\n💡 Merksatz: Weniger Verwaltungsaufwand, du bleibst für Inhalte und Struktur verantwortlich."
    },
    {
        "title": "Automatisierte Cloud-Datenbank",
        "textVertical": "Teilweise Management durch Anbieter.",
        "textHorizontal": "Anbieter übernimmt Backups, Updates oder Skalierung, du verwaltest die Datenbank.",
        "ptext": "Bei einer automatisierten Cloud-Datenbank erledigt der Anbieter bestimmte Aufgaben automatisch, z. B. Backups oder einfache Updates. Der Nutzer kümmert sich weiterhin um Datenbankstruktur, Abfragen und Konfiguration.\n\n💡 Merksatz: Weniger Verwaltungsaufwand, du bleibst für Inhalte und Struktur verantwortlich."
    },
    {
        "title": "Verwaltete Cloud-Datenbank",
        "textVertical": "Viel Management durch Anbieter.",
        "textHorizontal": "Anbieter übernimmt Installation, Wartung, Backups, Updates und teilweise Skalierung.",
        "ptext": "Bei einer verwalteten Cloud-Datenbank (Managed Database) übernimmt der Anbieter die komplette Administration: Installation, Konfiguration, Backups, Updates, Monitoring und oft automatische Skalierung. Der Nutzer konzentriert sich nur auf Daten und Abfragen.\n\n💡 Merksatz: Du musst dich nicht um Infrastruktur kümmern, der Anbieter übernimmt fast alles."
    },
    {
        "title": "Autonome Cloud-Datenbank",
        "textVertical": "Vollautomatische, intelligente Datenbank.",
        "textHorizontal": "Automatisches Management, Skalierung, Optimierung und Selbstheilung.",
        "ptext": "Autonome Cloud-Datenbanken gehen noch einen Schritt weiter: Sie verwalten sich selbst vollständig, optimieren Performance automatisch, skalieren bei Bedarf und erkennen sowie beheben Fehler eigenständig. Beispiele: Oracle Autonomous Database.\n\n💡 Merksatz: Nutzer muss nur noch Daten & Abfragen nutzen, alles andere erledigt die Datenbank selbstständig."
    },
    {
        "title": "Software testen",
        "textVertical": "Überprüfen, ob Software korrekt funktioniert.",
        "textHorizontal": "Ziel: Fehler finden, Qualität sichern, Kosten sparen.",
        "ptext": "Software testen bedeutet, zu überprüfen, ob die Software tut, was sie soll, und keine unerwünschten Funktionen ausführt. Ziele: Fehler frühzeitig finden, Qualität sichern, Risiken verringern, Kosten sparen.\n\nArten von Tests:\n1. Manueller Test → Mensch klickt, gibt Daten ein, prüft Ergebnisse (z.B. Login testen)\n2. Automatisierter Test → Programme führen Tests automatisch aus (z.B. JUnit-Tests)\n\nTeststufen:\n- Unit-Test → einzelne Funktion/Methode\n- Integrationstest → Zusammenspiel mehrerer Komponenten\n- Systemtest → gesamtes System aus Nutzersicht\n- Abnahmetest → Kunde prüft, ob Anforderungen erfüllt sind\n\nTestarten: Funktionstest, Regressionstest, Lasttest, Usability-Test\n\n💡 Merksatz: Je früher Fehler gefunden werden, desto günstiger und besser für die Qualität."
    },
    {
        "title": "Software dokumentieren",
        "textVertical": "Informationen über Software festhalten.",
        "textHorizontal": "Dokumentation hilft Entwicklern, Anwendern und Admins.",
        "ptext": "Softwaredokumentation erklärt, was die Software macht, wie sie funktioniert und wie man sie benutzt oder erweitert. Arten:\n\n1. Entwicklerinformation → Kommentare, Klassen- und Methodenbeschreibungen, UML-Diagramme\n2. Benutzerdokumentation → Handbuch, Anleitung, Hilfe-Menü\n3. Systemdokumentation → Systemarchitektur, Installation, Datenbankstruktur\n\n💡 Merksatz: Gute Dokumentation = verständlich, aktuell, übersichtlich. Sie erleichtert Testen, Wartung und Erweiterung."
    },
    {
        "title": "Analysephase",
        "textVertical": "Anforderungen der Software klären.",
        "textHorizontal": "Noch kein Code, nur sammeln und verstehen, was das System können soll.",
        "ptext": "In der Analysephase wird geklärt, welche Anforderungen die Software erfüllen soll. Inhalte: Anforderungen sammeln, Probleme verstehen, Use-Cases definieren, fachliche Anforderungen festlegen.\n\nWerkzeuge: Lastenheft / Pflichtenheft, Use-Case-Diagramme, Anforderungskatalog.\n\nBeispiele: \"Benutzer kann sich anmelden\", \"Passwort muss min. 8 Zeichen haben\"."
    },
    {
        "title": "Entwurfsphase (Design)",
        "textVertical": "Technische Umsetzung planen.",
        "textHorizontal": "Klassen, Datenbanken, Architektur und Schnittstellen werden festgelegt.",
        "ptext": "In der Entwurfsphase wird entschieden, wie die Software technisch umgesetzt wird. Inhalte: Klassenstruktur, Datenbankentwurf, Architektur (z.B. MVC), Schnittstellen.\n\nWerkzeuge: UML-Klassendiagramme, Sequenzdiagramme, ER-Diagramme (Datenbank).\n\nBeispiele: Welche Klassen gibt es? Welche Methoden? Wie kommunizieren die Komponenten?"
    },
    {
        "title": "Implementierung",
        "textVertical": "Programmieren der Software.",
        "textHorizontal": "Code nach Entwurfsplan schreiben, Standards einhalten, Versionierung nutzen.",
        "ptext": "In der Implementierung wird programmiert. Inhalte: Code schreiben, Coding-Standards beachten, Kommentare einfügen, Versionskontrolle (z.B. Git).\n\nBeispiele: Java-Klassen programmieren, SQL-Tabellen erstellen, Benutzeroberflächen umsetzen."
    },
    {
        "title": "White-Box-Test",
        "textVertical": "Tests mit Einblick in den Code.",
        "textHorizontal": "Prüft interne Logik, Pfade und Funktionen.",
        "ptext": "Beim White-Box-Test kennt der Tester den Quellcode. Es wird geprüft, wie der Code arbeitet: Logik, Schleifen, if-Zweige, einzelne Methoden (Unit-Tests).\n\nWhite-Box-Testarten: Anweisungsüberdeckung, Zweigüberdeckung, Pfadüberdeckung.\n\n💡 Merksatz: White-Box → Code bekannt, Logik und Pfade getestet."
    },
    {
        "title": "Black-Box-Test",
        "textVertical": "Tests ohne Einblick in den Code.",
        "textHorizontal": "Prüft, was die Software tut, nicht wie sie es tut.",
        "ptext": "Beim Black-Box-Test kennt der Tester den Code nicht. Es wird getestet, ob die Software die gewünschten Ergebnisse liefert.\n\nBeispiele: Login mit richtigem/falschem Passwort, leeres Formular absenden, Button-Klick.\n\n💡 Merksatz: Black-Box → Benutzerperspektive, Funktionalität prüfen."
    },
    {
        "title": "Grey-Box-Test",
        "textVertical": "Mischform aus White-Box und Black-Box.",
        "textHorizontal": "Tester kennt grobe interne Struktur, aber nicht jeden Code-Detail.",
        "ptext": "Beim Grey-Box-Test kennt der Tester Teile der internen Struktur, prüft aber vor allem Funktionalität aus Benutzersicht.\n\n💡 Merksatz: Mischung aus White-Box (Code teilweise bekannt) und Black-Box (funktionale Tests)."
    },
    {
        "title": "Testbegriffe & Testarten",
        "textVertical": "Weitere wichtige Begriffe im Softwaretest.",
        "textHorizontal": "Regressionstest, Systemtest, Abnahmetest.",
        "ptext": "Regressionstest → prüft, ob alte Funktionen nach Änderungen noch funktionieren.\nSystemtest → gesamtes System wird getestet.\nAbnahmetest → Kunde prüft Software auf Anforderungen.\n\n💡 Merksatz: Unterschiedliche Testarten sichern Qualität und Zuverlässigkeit."
    },
    {
        "title": "Softwareentwicklungsablauf",
        "textVertical": "Von Analyse bis Auslieferung.",
        "textHorizontal": "Typischer Ablauf: Analyse → Entwurf → Implementierung → Test → Wartung.",
        "ptext": "Gesamtablauf:\n1. Analyse → Was soll die Software können?\n2. Entwurf → Wie wird sie umgesetzt?\n3. Implementierung → Programmierung\n4. Test → Qualität prüfen\n5. Auslieferung / Wartung\n\nModelle: klassisches Wasserfallmodell oder moderne agile Methoden (Scrum).\n\n💡 Merksatz: Früh testen und dokumentieren = weniger Fehler, höhere Qualität."
    },
    {
        "title": "Unit-Test",
        "textVertical": "Test der kleinsten Softwareeinheit.",
        "textHorizontal": "Prüft einzelne Methoden oder Klassen (meist White-Box).",
        "ptext": "Ein Unit-Test testet die kleinste testbare Einheit einer Software, z. B. eine Methode oder Klasse. Meist wird er vom Entwickler geschrieben und automatisiert (z. B. mit JUnit).\n\nBeispiele:\n- add(2,3) → 5\n- add(-1,1) → 0\n\n💡 Merksatz: Unit-Test = kleinste testbare Funktion / Klasse, White-Box-Test, automatisiert."
    },
    {
        "title": "Komponententest",
        "textVertical": "Test eines kompletten Moduls.",
        "textHorizontal": "Prüft mehrere Units zusammen, gesamte Komponente.",
        "ptext": "Ein Komponententest prüft ein komplettes Modul oder eine Softwarekomponente, also mehrere Units zusammen. Ziel: sicherstellen, dass die zusammenhängenden Teile korrekt funktionieren.\n\nBeispiel: Login-Modul testen → Passwortprüfung, Benutzername, Fehlermeldungen.\n\nVergleich Unit-Test vs Komponententest:\n- Unit-Test = einzelne Methode, sehr klein, isoliert\n- Komponententest = gesamtes Modul, größer, zusammenhängend\n\n💡 Merksatz: Komponententest = vollständiges Modul prüfen, mehrere Units zusammen."
    },
    {
        "title": "Integrationstest",
        "textVertical": "Test des Zusammenspiels von Modulen.",
        "textHorizontal": "Prüft Schnittstellen, Datenübergaben und Kommunikation zwischen Modulen.",
        "ptext": "Integrationstest prüft das Zusammenspiel mehrerer Module. Fokus liegt auf Schnittstellen, Datenübergaben und der Kommunikation zwischen Modulen.\n\nBeispiele:\n- Login-Modul ↔ Datenbank-Modul\n- Shop ↔ Zahlungsdienst\n\n💡 Merksatz: Integrationstest = prüft Interaktionen zwischen Modulen, Fehler entstehen häufig an Schnittstellen."
    },
    {
        "title": "Systemtest",
        "textVertical": "Test des gesamten Systems.",
        "textHorizontal": "Prüft Software wie ein echter Benutzer in der realen Umgebung.",
        "ptext": "Der Systemtest prüft die Software als Ganzes in einer realistischen Umgebung. Es handelt sich meist um Black-Box-Tests, die alle Funktionen und Abläufe prüfen.\n\nBeispiele:\n- Benutzer registrieren → einloggen → bestellen\n- Fehlerhafte Eingaben prüfen\n- Performance testen\n\n💡 Merksatz: Systemtest = gesamtes System prüfen, Black-Box, reale Nutzungsszenarien."
    },
    {
        "title": "Abnahmetest",
        "textVertical": "Prüfung durch den Kunden / Auftraggeber.",
        "textHorizontal": "Test, ob Software die Anforderungen erfüllt und abgenommen wird.",
        "ptext": "Der Abnahmetest prüft, ob die Software die Anforderungen des Kunden erfüllt. Testet wird durch Kunde, Auftraggeber oder Fachabteilung.\n\nErgebnis:\n- ✅ Abnahme → Software wird akzeptiert\n- ❌ Keine Abnahme → Nachbesserung erforderlich\n\n💡 Merksatz: Abnahmetest = Kunde entscheidet, ob Software akzeptiert wird."
    },
    {
        "title": "Statische Testverfahren",
        "textVertical": "Software prüfen ohne Ausführung.",
        "textHorizontal": "Analyse von Code, Dokumentation und Anforderungen, ohne das Programm zu starten.",
        "ptext": "Statisch bedeutet, dass die Software NICHT ausgeführt wird. Geprüft werden z. B.:\n- Quellcode\n- Dokumentation\n- Anforderungen\n- Entwürfe (UML)\n\nTypische statische Testverfahren:\n1️⃣ Review → Mehrere Personen lesen Code oder Dokumente, Ziel: Fehler früh erkennen (z. B. Code-Review, Pflichtenheft-Review)\n2️⃣ Walkthrough → Autor erklärt Code, andere stellen Fragen\n3️⃣ Inspektion → formell, feste Rollen (Moderator, Protokollant), besonders gründlich\n4️⃣ Statische Codeanalyse → Automatische Tools prüfen Code (ungenutzte Variablen, NullPointer, Stilprobleme)\n\nVorteile:\n✅ Fehler früh erkennen\n✅ Günstig\n✅ Keine Testumgebung nötig\n\n💡 Merksatz: Statisch = lesen, nicht laufen"
    },
    {
        "title": "Dynamische Testverfahren",
        "textVertical": "Software testen durch Ausführung.",
        "textHorizontal": "Prüft Funktionen, Logik und Verhalten während der Programmlaufzeit.",
        "ptext": "Dynamisch bedeutet, dass die Software ausgeführt wird. Geprüft werden:\n- Funktionen\n- Logik\n- Performance\n- Benutzerinteraktionen\n\nTypische dynamische Testverfahren:\n1️⃣ Unit-Test → einzelne Methoden, White-Box\n2️⃣ Integrationstest → Zusammenspiel von Modulen\n3️⃣ Systemtest → Gesamtsystem\n4️⃣ Abnahmetest → Kunde testet\n\nVorteile:\n✅ echtes Verhalten sichtbar\n✅ Ablauf-Fehler erkennbar\n❌ Test muss durchlaufen werden\n\n💡 Merksatz: Dynamisch = Programm läuft"
    },
    {
        "title": "Statisch vs. Dynamisch (Vergleich)",
        "textVertical": "Unterschiedliche Testmethoden im Überblick.",
        "textHorizontal": "Statisch = Lesen, Dynamisch = Ausführen.",
        "ptext": "Direkter Vergleich:\nStatisch | Dynamisch\n---|---\nohne Ausführung | mit Ausführung\nLesen / Analysieren | Ausprobieren\nfrüh im Prozess | meist nach Implementierung\nReviews, Analyse | Unit-, Systemtests\ngünstig | aufwendiger\n\n💡 Merksatz: Statisch → Lesen, Dynamisch → Laufen"
    },
    {
        "title": "Äquivalenzklassenbildung",
        "textVertical": "Eingaben in Klassen einteilen.",
        "textHorizontal": "Man testet jeweils einen Vertreter aus jeder Klasse, da alle ähnlich reagieren.",
        "ptext": "Grundidee: Viele Eingaben verhalten sich gleich. Man teilt mögliche Eingaben in Äquivalenzklassen (Gruppen) ein, bei denen das System gleich reagiert. Aus jeder Klasse wird ein Vertreter getestet.\n\nZiele:\n- Weniger Testfälle\n- Gleiche Fehlerwahrscheinlichkeit\n- Zeit sparen\n\nGültige & ungültige Äquivalenzklassen:\n- Immer gültige und ungültige Klassen vorhanden\n\nBeispiele:\n1️⃣ Alterseingabe (18–65):\nEK1: <18 ❌\nEK2: 18–65 ✅\nEK3: >65 ❌\nTestfälle: 16, 30, 70\n\n2️⃣ Passwortlänge (8–20 Zeichen):\nEK1: <8 ❌\nEK2: 8–20 ✅\nEK3: >20 ❌\n\n💡 Merksatz: Eine Eingabe aus jeder Klasse reicht"
    },
    {
        "title": "Grenzwertanalyse",
        "textVertical": "Fehleranfällige Grenzen prüfen.",
        "textHorizontal": "Testen direkt an und um die Randwerte.",
        "ptext": "Grundidee: Fehler treten häufig an den Grenzen auf. Man testet direkt an und um die Grenzwerte herum.\n\nTypische Grenzwerte:\n- Minimalwert\n- Maximalwert\n- knapp darunter\n- knapp darüber\n\nBeispiele:\n1️⃣ Alter 18–65:\nunter Grenze: 17 ❌\nuntere Grenze: 18 ✅\nknapp darüber: 19 ✅\nknapp darunter obere Grenze: 64 ✅\nobere Grenze: 65 ✅\ndarüber: 66 ❌\n\n2️⃣ Eingabe 1–100:\n0 ❌, 1 ✅, 2 ✅, 99 ✅, 100 ✅, 101 ❌\n\n💡 Merksatz: Grenzen sind fehleranfällig"
    },
    {
        "title": "Äquivalenz + Grenzwert kombinieren",
        "textVertical": "Effizientes Testen.",
        "textHorizontal": "Zuerst Äquivalenzklassen, dann Grenzwerte prüfen.",
        "ptext": "In der Praxis kombiniert man beide Verfahren:\n1️⃣ Zuerst Äquivalenzklassen bilden\n2️⃣ Dann Grenzwerte testen\n\nBeispiel Eingabe 1–100:\n- Äquivalenzklassen: <1, 1–100, 100\n- Grenzwerte: 0, 1, 2, 99, 100, 101\n\n💡 Prüfungsquickvergleich:\n- Äquivalenzklassen → typische Werte\n- Grenzwertanalyse → Randbereiche\n\nUltra-Kurz-Merksätze:\n- Äquivalenzklasse = ähnliche Eingaben\n- Grenzwertanalyse = Rand testen\n- Beide = Black-Box-Testverfahren"
    },
    {
        "title": "Entscheidungstabellen",
        "textVertical": "Bedingungen und Aktionen systematisch darstellen.",
        "textHorizontal": "Kombinationen von Bedingungen → erwartete Aktionen.",
        "ptext": "Definition: Eine Entscheidungstabelle zeigt, welche Aktionen ausgeführt werden, wenn bestimmte Bedingungen erfüllt sind. Sie hilft bei komplexen Regeln und mehreren Bedingungen gleichzeitig.\n\nAufbau:\n- Bedingungen: Eingaben / Voraussetzungen\n- Bedingungsausprägungen: Ja / Nein oder Werte\n- Aktionen: Was passiert?\n- Regeln: Kombinationen aus Bedingungen\n\nEinfaches Beispiel: Rabatt im Online-Shop\n- Bedingungen: Stammkunde?, Einkaufswert ≥100€\n- Aktionen: Rabatt oder kein Rabatt\n\nEntscheidungstabelle:\nBedingungen       Regel1  Regel2  Regel3  Regel4\nStammkunde?       Ja      Ja      Nein    Nein\nEinkaufswert ≥100? Ja     Nein    Ja      Nein\nAktion: Rabatt    ✅       ❌      ❌      ❌\n\nInterpretation: Nur Regel 1 → Rabatt, alle anderen → kein Rabatt.\n\nKomplexeres Beispiel: Login-System\n- Bedingungen: Benutzername korrekt?, Passwort korrekt?, Benutzer gesperrt?\n- Aktionen: Login erlauben, Fehlermeldung, Konto sperren\n\nVorgehen:\n1. Bedingungen sammeln\n2. Alle Kombinationen bilden\n3. Unmögliche Kombinationen streichen\n4. Aktionen festlegen\n5. Testfälle ableiten\n\nVorteile:\n✅ Übersicht bei vielen Bedingungen\n✅ Keine Fälle vergessen\n✅ Gut für Prüfungen & Praxis\n\nNachteile:\n❌ Sehr viele Regeln bei vielen Bedingungen\n❌ Kann schnell unübersichtlich werden\n\nMerksätze:\n- Entscheidungstabelle = Bedingungen → Aktionen\n- Alle Kombinationen werden betrachtet\n- Gehört zu Black-Box-Testverfahren\n\nTypische Prüfungsfragen:\n- Wann nutzt man Entscheidungstabellen?\n- Was sind Bedingungen und Aktionen?\n- White-Box oder Black-Box? ✅ Black-Box"
    },
    {
        "title": "Testdatengeneratoren",
        "textVertical": "Automatisch Testdaten erzeugen.",
        "textHorizontal": "Werkzeuge oder Programme, die Daten für Tests generieren.",
        "ptext": "Definition: Ein Testdatengenerator ist ein Werkzeug oder Programm, das automatisch Testdaten erstellt. Ziel: Tests schneller, effizienter und systematischer machen.\n\nWarum nutzen?\n- Große Datenmengen erzeugen ✅\n- Alle möglichen Werte für Tests abdecken ✅\n- Einheitliche Daten für Entwickler und Tester ✅\n- Fehler im System schneller finden ✅\n\nWas wird generiert?\n1️⃣ Zufällige Daten → Zahlen, Strings, Datumswerte (z. B. Benutzer-ID, Passwort)\n2️⃣ Vordefinierte Testwerte → aus Äquivalenzklassen oder Grenzwertanalyse (z. B. Alter 17,18,65,66)\n3️⃣ Spezielle Testdaten → ungültige Eingaben, extreme Werte (z. B. negative Zahlen, leere Strings)\n\nBereitstellung:\n- Direkt im Test → Programm erzeugt während der Ausführung\n- Externe Dateien → CSV, Excel, JSON, SQL-Import\n- Datenbanken → Testdatenbank laden, z. B. Shop mit 1000 Testkunden\n\nVorteile:\n✅ Zeitersparnis\n✅ Konsistenz der Testdaten\n✅ Vollständige Testabdeckung möglich\n✅ Automatisierbar\n\nNachteile:\n❌ Zufällige Daten können unbrauchbar sein\n❌ Vorbereitung und Konfiguration nötig\n\nPraxisbeispiel:\n- Login-System testen\n- Eingaben: Benutzername, Passwort, Alter\n- Mit Testdatengenerator: 100 Benutzernamen, Passwörter 8–20 Zeichen, Alterswerte 16,18–65,70\n➡ Alle Kombinationen automatisch getestet\n\nMerksätze:\n- Testdatengeneratoren = Daten automatisch erzeugen\n- Daten: Zufall, vordefiniert oder speziell\n- Bereitstellung: direkt, Datei, Testdatenbank\n\nTypische Prüfungsfragen:\n- Was ist ein Testdatengenerator?\n- Welche Datenarten kann er erzeugen?\n- Wie werden die Daten bereitgestellt?\n- Vorteil von Testdatengeneratoren?"
    },
    {
        "title": "Arten von Testdatengeneratoren",
        "textVertical": "Testdaten gezielt erzeugen.",
        "textHorizontal": "Datenbankbasiert, codebasiert, Schnittstellenbasiert, Spezifikationsbasiert.",
        "ptext": "1️⃣ Datenbankbasierte Testdatengeneratoren\n- Testdaten werden direkt aus Datenbanken erzeugt oder in Datenbanken gespeichert.\n- Besonders nützlich für Systeme, die stark von DB-Daten abhängen.\nBeispiele:\n- Kundenstammdaten für Shop: 100 Testkunden automatisch anlegen\n- Rechnungen, Bestellungen, Transaktionen füllen\nVorteile: ✅ Große Datenmengen realistisch generieren, ✅ Daten direkt für Tests verfügbar\nNachteile: ❌ Testumgebung muss DB unterstützen, ❌ Risiko, echte Daten versehentlich zu verändern\n\n2️⃣ Codebasierte Testdatengeneratoren\n- Testdaten werden direkt im Programm erzeugt, oft zufällig oder automatisch\n- Meist in Unit-Tests oder automatisierten Tests\nBeispiele:\n- Zufallszahlen, Strings, Datumswerte, IDs generieren\n- JUnit-Test in Java:\n@Test\nvoid testRandomAge() {\n    int age = (int)(Math.random() * 100);\n    assertTrue(age >= 0 && age <= 99);\n}\nVorteile: ✅ Vollautomatisch, ✅ Keine externen Ressourcen nötig\nNachteile: ❌ Zufall kann unbrauchbar sein, ❌ manchmal schwer reproduzierbar\n\n3️⃣ Schnittstellenbasierte Testdatengeneratoren\n- Testdaten werden über Schnittstellen (APIs, Webservices) erzeugt oder bereitgestellt\nBeispiele:\n- REST-API liefert Testkunden\n- Zahlungsdienst erzeugt Transaktionen\nVorteile: ✅ Realistische Testumgebung, ✅ Testet Schnittstellen gleichzeitig\nNachteile: ❌ Abhängigkeit von Schnittstellen, ❌ Fehler schwer nachvollziehbar\n\n4️⃣ Spezifikationsbasierte Testdatengeneratoren\n- Testdaten basieren auf Anforderungen oder Spezifikationen, oft Black-Box-orientiert\n- Fokus auf valide und invalide Werte\nBeispiele:\n- Alter 18–65 → Testwerte 17, 18, 65, 66\n- Passwortlänge 8–20 → Testwerte 7, 8, 20, 21\nVorteile: ✅ Abdeckung der Anforderungen garantiert, ✅ Systematisch\nNachteile: ❌ Vorbereitung aufwendig, ❌ Spezifikation muss vollständig sein\n\n5️⃣ Vergleich (prüfungsnah)\nArt | Quelle | Vorteil | Nachteil\nDatenbankbasiert | DB | realistische Daten | DB-Abhängigkeit\nCodebasiert | Programm/Testcode | automatisierbar | Zufallsproblem\nSchnittstellenbasiert | API/Webservice | realistisch + Integration | Schnittstellenabhängig\nSpezifikationsbasiert | Anforderungen | systematisch | aufwendig, abhängig von Spezifikation"
    },
    {
        "title": "Projektabnahme durchführen",
        "textVertical": "Formeller Check durch den Kunden.",
        "textHorizontal": "Prüfung, ob die Software alle Anforderungen erfüllt, inklusive Protokoll.",
        "ptext": "1️⃣ Projektabnahme\n- Definition: Formeller Prozess, bei dem der Kunde oder Auftraggeber prüft, ob die Software die Anforderungen erfüllt.\n- Ziel: Abnahme → Freigabe / Akzeptanz der Software\n- Beteiligte:\n  • Auftraggeber / Kunde\n  • Projektleiter / Tester\n  • ggf. Entwickler (nur für Fragen)\n\n2️⃣ Schritte der Projektabnahme\n1. Vorbereitung: Unterlagen, Testberichte, Dokumentationen bereitstellen, Checkliste erstellen, Testumgebung vorbereiten\n2. Abnahme durchführen: Funktionen prüfen, Testfälle durchspielen, Fehlermeldungen dokumentieren\n3. Bewertung: Software erfüllt alle Anforderungen → Abnahme ✅, Software erfüllt Anforderungen teilweise → Nachbesserung ❌\n4. Abnahme protokollieren: Ergebnisse schriftlich festhalten\n\n3️⃣ Prüfpunkte bei der Abnahme\n• Funktionen / Use Cases korrekt?\n• Fehlerfrei / akzeptabel?\n• Performance ok?\n• Benutzerfreundlichkeit / Bedienbarkeit?\n• Dokumentation vollständig?\n\n4️⃣ Abnahmeprotokoll erstellen\n- Definition: Offizielles Dokument, das festhält, ob die Software abgenommen wurde\n- Aufbau:\n  Abschnitt | Inhalt\n  Projektdaten | Projektname, Auftraggeber, Projektleiter, Datum\n  Teilnehmer | Wer war bei der Abnahme dabei?\n  Ziel / Zweck | Warum wird abgenommen?\n  Prüfpunkte / Testfälle | Welche Funktionen wurden getestet?\n  Ergebnisse | Bestehen / Fehler / Hinweise\n  Abnahmeentscheidung | ✅ angenommen / ❌ nicht angenommen\n  Unterschriften | Kunde, Projektleiter, ggf. Entwickler\n\n- Beispiel:\nProjekt: Online-Shop 2.0\nDatum: 15.01.2026\nTeilnehmer: Kunde: Herr Müller, Projektleiter: Frau Schmidt, Entwickler: Istvan\nPrüfpunkte | Ergebnis | Bemerkung\nLogin-Funktion | ✅ | –\nWarenkorb | ✅ | –\nRechnungserstellung | ❌ | Fehler bei Summenberechnung\nPerformance | ✅ | –\nAbnahmeentscheidung: Teilweise bestanden – Nachbesserung erforderlich\nUnterschriften: Kunde / Projektleiter\n\n💡 Merksätze:\n• Projektabnahme = formeller Check der Software durch den Kunden\n• Abnahmeprotokoll = offizielles Dokument mit Prüfpunkten, Ergebnissen, Entscheidung\n• Ziel = Transparenz, Rechtssicherheit, Nachverfolgung\n\n5️⃣ Typische Prüfungsfragen\n• Wer führt die Projektabnahme durch?\n• Welche Inhalte gehören ins Abnahmeprotokoll?\n• Was passiert, wenn die Software nicht vollständig bestanden hat?\n• Warum ist das Abnahmeprotokoll wichtig?"
    },
    {
        "title": "Abnahmekriterien",
        "textVertical": "Definition von Anforderungen für die Abnahme.",
        "textHorizontal": "Legt fest, wann eine Software als akzeptiert gilt.",
        "ptext": "🔹 Definition:\nAbnahmekriterien sind die Bedingungen, die erfüllt sein müssen, damit eine Software vom Kunden oder Auftraggeber akzeptiert wird.\n\n🔹 Typische Kriterien:\n• Funktionen arbeiten wie spezifiziert\n• Software fehlerfrei oder akzeptabel\n• Performance entspricht den Anforderungen\n• Benutzerfreundlichkeit / Usability erfüllt Vorgaben\n• Sicherheits- und Datenschutzanforderungen eingehalten\n• Dokumentation vollständig und korrekt\n\n💡 Merksatz:\nAbnahmekriterien dienen der klaren Definition, wann eine Software als erfolgreich abgeschlossen gilt."
    },
    {
        "title": "Benutzerakzeptanz",
        "textVertical": "Nutzer prüfen die Software.",
        "textHorizontal": "Ob die Software den Anforderungen der Benutzer entspricht und nutzbar ist.",
        "ptext": "🔹 Definition:\nBenutzerakzeptanz (User Acceptance) bedeutet, dass die Software aus Sicht der Endnutzer überprüft wird.\n\n🔹 Ziel:\n• Sicherstellen, dass die Software den tatsächlichen Anforderungen der Nutzer entspricht\n• Prüfen von Bedienbarkeit, Funktionalität, Performance\n\n🔹 Vorgehensweise:\n• Benutzer testet die Software in realistischen Szenarien\n• Feedback wird gesammelt und ggf. Nachbesserungen vorgenommen\n\n💡 Merksatz:\nEine Software ist nur dann erfolgreich, wenn die Benutzer sie akzeptieren und effizient nutzen können."
    },
    {
        "title": "Vergleichsakzeptanz",
        "textVertical": "Software gegen Vorgaben prüfen.",
        "textHorizontal": "Prüfen, ob die Software die spezifizierten Anforderungen und Spezifikationen erfüllt.",
        "ptext": "🔹 Definition:\nVergleichsakzeptanz bedeutet, dass die Software objektiv anhand von Anforderungen, Lasten- oder Pflichtenheft bewertet wird.\n\n🔹 Vorgehensweise:\n• Funktionen werden getestet, ob sie den Spezifikationen entsprechen\n• Ergebnisse werden dokumentiert\n• Abweichungen führen zu Nachbesserungen\n\n💡 Merksatz:\nVergleichsakzeptanz = formeller Vergleich zwischen Software und Anforderungen."
    },
    {
        "title": "Abnahmeprotokoll",
        "textVertical": "Dokumentation der Abnahme.",
        "textHorizontal": "Offizielles Dokument mit Prüfpunkten, Ergebnissen und Entscheidung.",
        "ptext": "🔹 Definition:\nDas Abnahmeprotokoll hält schriftlich fest, ob die Software abgenommen wurde oder nicht.\n\n🔹 Aufbau:\nAbschnitt | Inhalt\nProjektdaten | Projektname, Auftraggeber, Projektleiter, Datum\nTeilnehmer | Wer war bei der Abnahme dabei?\nZiel / Zweck | Warum wird abgenommen?\nPrüfpunkte / Testfälle | Welche Funktionen wurden getestet?\nErgebnisse | Bestehen / Fehler / Hinweise\nAbnahmeentscheidung | ✅ angenommen / ❌ nicht angenommen\nUnterschriften | Kunde, Projektleiter, ggf. Entwickler\n\n🔹 Beispiel:\nProjekt: Online-Shop 2.0\nDatum: 15.01.2026\nTeilnehmer: Kunde: Herr Müller, Projektleiter: Frau Schmidt, Entwickler: Istvan\nPrüfpunkte | Ergebnis | Bemerkung\nLogin-Funktion | ✅ | –\nWarenkorb | ✅ | –\nRechnungserstellung | ❌ | Fehler bei Summenberechnung\nPerformance | ✅ | –\nAbnahmeentscheidung: Teilweise bestanden – Nachbesserung erforderlich\nUnterschriften: Kunde / Projektleiter\n\n💡 Merksatz:\nDas Abnahmeprotokoll dokumentiert die Ergebnisse der Abnahme, sorgt für Transparenz und Rechtssicherheit."
    },
    {
        "title": "Wahrheitstabelle XOR",
        "textVertical": "Alle Eingabekombinationen von A und B aufgelistet.",
        "textHorizontal": "Zeigt das Ergebnis der XOR-Operation (exklusives Oder) für jede Kombination von A und B.",
        "ptext": "🔹 Definition:\nEine Wahrheitstabelle zeigt systematisch, wie eine logische Funktion auf alle möglichen Eingabekombinationen reagiert.\n\n🔹 XOR (A ⊕ B):\nDas Ergebnis ist 1, wenn genau eine der Eingaben 1 ist, sonst 0.\n\n🔹 Schritt-für-Schritt:\n1️⃣ Liste alle möglichen Kombinationen von A und B (0 oder 1):\n   - A=0, B=0\n   - A=0, B=1\n   - A=1, B=0\n   - A=1, B=1\n2️⃣ Berechne A ⊕ B für jede Kombination:\n\n| A | B | A ⊕ B |\n|---|---|-------|\n| 0 | 0 |   0   |\n| 0 | 1 |   1   |\n| 1 | 0 |   1   |\n| 1 | 1 |   0   |\n\n🔹 Merksatz:\nXOR = genau eine 1 → Ergebnis 1. Wenn beide gleich sind (0+0 oder 1+1), ist das Ergebnis 0."
    },
    {
        "title": "Schreibtischtest",
        "textVertical": "Quellcode analysieren, ohne auszuführen.",
        "textHorizontal": "Man liest den Code Zeile für Zeile durch und bestimmt die erwartete Ausgabe oder das Verhalten.",
        "ptext": "🔹 Definition:\nEin Schreibtischtest (Desk Check) ist ein statisches Testverfahren, bei dem der Programmcode durchgelesen wird, um Fehler zu finden, ohne dass das Programm ausgeführt wird.\n\n🔹 Vorgehensweise:\n• Code Zeile für Zeile durchgehen\n• Werte von Variablen und Zwischenergebnisse notieren\n• Ausgaben auf Papier oder Whiteboard simulieren\n• Logische Fehler oder unerwartete Ergebnisse erkennen\n\n🔹 Beispiel:\nint a = 5;\nint b = 3;\nint c = a + b;\nSystem.out.println(c);\n\nSchreibtischtest Schritt-für-Schritt:\n1️⃣ a = 5, b = 3\n2️⃣ c = a + b → 8\n3️⃣ Ausgabe: 8\n\n🔹 Vorteile:\n✅ Fehler werden früh erkannt\n✅ Keine Testumgebung nötig\n✅ Gut für kleine Codeabschnitte\n\n🔹 Nachteile:\n❌ Aufwendig bei großem Code\n❌ Laufzeit- oder Performance-Probleme werden nicht erkannt\n\n💡 Merksatz:\nSchreibtischtest = Code lesen und Ausgaben bestimmen, bevor das Programm läuft."
    },
    {
        "title": "Java main()-Methode",
        "textVertical": "Startpunkt jedes Java-Programms.",
        "textHorizontal": "Die main()-Methode ist der Einstiegspunkt, von dem aus das Programm startet und Code ausgeführt wird.",
        "ptext": "🔹 Definition:\nDie main()-Methode ist die erste Methode, die beim Start eines Java-Programms ausgeführt wird. Ohne sie kann ein Java-Programm nicht direkt gestartet werden.\n\n🔹 Aufbau:\n```java\npublic class MeineKlasse {\n    public static void main(String[] args) {\n        // Code, der ausgeführt werden soll\n        System.out.println(\"Hallo Welt\");\n    }\n}\n```\n\n🔹 Erklärung der Teile:\n1️⃣ `public` → Die Methode ist von überall sichtbar, notwendig damit die JVM sie aufrufen kann.\n2️⃣ `static` → Die Methode gehört zur Klasse, nicht zu einem Objekt. Man muss kein Objekt erzeugen, um main() aufzurufen.\n3️⃣ `void` → Die Methode gibt nichts zurück.\n4️⃣ `main` → Name der Methode, genau so muss sie heißen.\n5️⃣ `(String[] args)` → Übergabeparameter: Array von Strings für Kommandozeilenargumente.\n6️⃣ `{ ... }` → Alle Befehle, die beim Programmstart ausgeführt werden, stehen hier.\n\n🔹 Beispiel:\n```java\npublic class Beispiel {\n    public static void main(String[] args) {\n        int zahl = 5;\n        System.out.println(\"Die Zahl ist: \" + zahl);\n    }\n}\n```\nAusgabe:\nDie Zahl ist: 5\n\n💡 Merksatz:\nmain() = Einstiegspunkt, von dem aus alles in einem Java-Programm startet."
    },
    {
        "title": "Keyword static",
        "textVertical": "Statische Elemente in Java.",
        "textHorizontal": "Das Schlüsselwort static macht ein Element zur Klasse gehörig, nicht zu einem Objekt.",
        "ptext": "🔹 Definition:\n`static` bedeutet, dass eine Variable oder Methode zur Klasse gehört und nicht zu einem bestimmten Objekt. Man kann darauf zugreifen, ohne ein Objekt der Klasse zu erstellen.\n\n🔹 Verwendung von static:\n1️⃣ Statische Variablen (Klassenvariablen)\n```java\npublic class Beispiel {\n    static int zaehler = 0;\n\n    public static void main(String[] args) {\n        System.out.println(\"Zaehler: \" + zaehler);\n    }\n}\n```\nErklärung: `zaehler` gehört der Klasse und kann direkt in main() genutzt werden.\n\n2️⃣ Statische Methoden\n```java\npublic class Rechner {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int summe = add(3, 4);\n        System.out.println(\"Summe: \" + summe);\n    }\n}\n```\nErklärung: `add()` ist statisch → Aufruf ohne Objekt.\n\n3️⃣ Statische Blöcke\n```java\npublic class Test {\n    static {\n        System.out.println(\"Klasseninitialisierung\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Programmstart\");\n    }\n}\n```\nErklärung: Der statische Block wird ausgeführt, sobald die Klasse geladen wird, noch bevor main() startet.\n\n🔹 Warum static in main()? \n- main() wird von der JVM aufgerufen, bevor ein Objekt existiert.\n- Ohne static müsste man ein Objekt erzeugen, um main() auszuführen.\n\n💡 Merksatz:\nstatic = gehört der Klasse → Zugriff ohne Objekt."
    },
    {
        "title": "OOP in Java",
        "textVertical": "Objektorientierte Programmierung",
        "textHorizontal": "Strukturieren von Programmen mit Klassen, Objekten, Methoden und Eigenschaften.",
        "ptext": "🔹 Definition:\nOOP (Object-Oriented Programming) bedeutet, Software mit Objekten zu modellieren. Objekte sind Instanzen von Klassen und bündeln Daten (Variablen) und Verhalten (Methoden).\n\n🔹 Grundprinzipien der OOP:\n1️⃣ Klassen und Objekte\n• Klasse = Bauplan\n• Objekt = konkrete Instanz der Klasse\n```java\nclass Auto {\n    String farbe;\n    int ps;\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Auto meinAuto = new Auto();\n        meinAuto.farbe = \"Rot\";\n        meinAuto.ps = 120;\n        System.out.println(meinAuto.farbe);\n    }\n}\n```\n\n2️⃣ Kapselung (Encapsulation)\n• Variablen oft `private`\n• Zugriff über Getter/Setter\n```java\nclass Person {\n    private String name;\n    public void setName(String n) { name = n; }\n    public String getName() { return name; }\n}\n```\n\n3️⃣ Vererbung (Inheritance)\n• Unterklasse erbt Eigenschaften/Methode der Oberklasse\n```java\nclass Tier { void essen() { System.out.println(\"Tier isst\"); } }\nclass Hund extends Tier { void bellen() { System.out.println(\"Wuff!\"); } }\n```\n\n4️⃣ Polymorphismus\n• Eine Methode kann unterschiedliche Formen annehmen\n• Beispiel: gleiche Methode in Unterklasse überschreiben (override)\n```java\nclass Tier { void geräusch() { System.out.println(\"laut\"); } }\nclass Katze extends Tier { void geräusch() { System.out.println(\"Miau\"); } }\n```\n\n5️⃣ Abstraktion\n• Nur relevante Informationen nach außen zeigen, interne Details verbergen\n• Mit `abstract` Klassen oder Interfaces\n```java\nabstract class Form { abstract void zeichnen(); }\nclass Kreis extends Form { void zeichnen() { System.out.println(\"Kreis zeichnen\"); } }\n```\n\n💡 Merksatz:\nOOP = Klassen + Objekte + Kapselung + Vererbung + Polymorphismus + Abstraktion → Strukturierte, wiederverwendbare Programme."
    },
    {
        "title": "OOP in Python",
        "textVertical": "Objektorientierte Programmierung",
        "textHorizontal": "Strukturieren von Programmen mit Klassen, Objekten, Methoden und Eigenschaften in Python.",
        "ptext": "🔹 Definition:\nOOP in Python funktioniert wie in Java: Programme werden mit Klassen und Objekten modelliert. Klassen definieren Attribute (Daten) und Methoden (Funktionen).\n\n🔹 Beispiel Klasse & Objekt:\n```python\nclass Auto:\n    def __init__(self, farbe, ps):\n        self.farbe = farbe  # Attribut\n        self.ps = ps        # Attribut\n\n    def fahren(self):\n        print(f\"Das Auto mit {self.ps} PS fährt.\")\n\n# Objekt erzeugen\nmein_auto = Auto('Rot', 120)\nprint(mein_auto.farbe)\nmein_auto.fahren()\n```\n\n🔹 Kapselung (Encapsulation):\n• Variablen können als privat gekennzeichnet werden (Konvention: _name oder __name)\n• Zugriff über Getter/Setter\n```python\nclass Person:\n    def __init__(self, name):\n        self.__name = name\n    \n    def get_name(self):\n        return self.__name\n    \n    def set_name(self, name):\n        self.__name = name\n```\n\n🔹 Vererbung (Inheritance):\n• Unterklasse erbt von Oberklasse\n```python\nclass Tier:\n    def essen(self):\n        print(\"Tier isst\")\n\nclass Hund(Tier):\n    def bellen(self):\n        print(\"Wuff!\")\n```\n\n🔹 Polymorphismus:\n• Methode kann in Unterklasse überschrieben werden\n```python\nclass Katze(Tier):\n    def essen(self):\n        print(\"Katze frisst\")\n```\n\n💡 Merksatz:\nOOP in Python = Klassen + Objekte + Kapselung + Vererbung + Polymorphismus → Strukturierte, wiederverwendbare Programme."
    },
    {
        "title": "Tkinter – mainloop()",
        "textVertical": "Fenster starten",
        "textHorizontal": "Startet die Ereignisschleife für das GUI und reagiert auf Benutzeraktionen.",
        "ptext": "🔹 Definition:\n`mainloop()` ist die Methode, die die Haupt-Ereignisschleife eines Tkinter-Fensters startet. Solange sie läuft, bleibt das Fenster offen und reagiert auf Eingaben.\n\n🔹 Verwendung:\n• Nach dem Erzeugen aller Widgets (Buttons, Labels, Eingabefelder)\n• Nach dem Konfigurieren der GUI\n\n🔹 Beispiel:\n```python\nimport tkinter as tk\n\nfenster = tk.Tk()\nfenster.title(\"Mein Fenster\")\n\nlabel = tk.Label(fenster, text=\"Hallo Welt!\")\nlabel.pack()\n\n# mainloop am Ende aufrufen\nfenster.mainloop()\n```\n\n💡 Merksatz:\n`mainloop()` immer **als Letztes** aufrufen, nachdem alle Widgets erstellt wurden, damit das Fenster korrekt angezeigt wird und auf Ereignisse reagiert."
    },
    {
        "title": "Notationselemente in ERM",
        "textVertical": "Graphische Symbole für Datenmodelle",
        "textHorizontal": "Elemente, die in einem Entity-Relationship-Modell verwendet werden, um Entitäten, Beziehungen und Attribute darzustellen.",
        "ptext": "🔹 Definition:\nNotationselemente sind grafische Symbole, die Objekte (Entitäten), Beziehungen und Attribute in einem ER-Modell darstellen.\n\n🔹 Typische Elemente:\n1️⃣ Entität (Entity)\n• Rechteck\n• Stellt ein Objekt oder eine reale Einheit dar, z. B. Kunde, Produkt\n\n2️⃣ Attribut\n• Ellipse oder Oval\n• Beschreibt Eigenschaften der Entität, z. B. Name, Preis, Geburtsdatum\n• Schlüsselattribut (Primary Key) oft unterstrichen\n\n3️⃣ Beziehung (Relationship)\n• Raute\n• Verknüpft Entitäten, z. B. \"kauft\", \"arbeitet in\"\n\n4️⃣ Kardinalität / Multiplizität\n• Linien oder Zahlen an den Enden der Beziehung\n• Zeigt an, wie viele Entitäten beteiligt sein können\n  - 1:1 (eins zu eins)\n  - 1:N (eins zu viele)\n  - M:N (viele zu viele)\n\n5️⃣ Verbindungslinien\n• Linien verbinden Entitäten, Attribute und Beziehungen\n\n💡 Merksatz:\nRechteck = Entität, Ellipse = Attribut, Raute = Beziehung, Zahlen/Linien = Kardinalität"
    },
    {
        "title": "ERM interpretieren",
        "textVertical": "Struktur verstehen",
        "textHorizontal": "Entitäten, Attribute und Beziehungen in einem ER-Modell erkennen und analysieren.",
        "ptext": "🔹 Schritte zum Interpretieren:\n1️⃣ Entitäten identifizieren\n• Rechtecke → z. B. Kunde, Produkt\n\n2️⃣ Attribute erkennen\n• Ovale → Eigenschaften der Entität\n• Schlüsselattribute unterstrichen\n\n3️⃣ Beziehungen analysieren\n• Rauten → Aktionen / Verbindungen zwischen Entitäten\n• Linien zeigen, welche Entitäten beteiligt sind\n\n4️⃣ Kardinalität prüfen\n• Zahlen oder Symbole an Linienenden → Anzahl erlaubter Verbindungen\n\n5️⃣ Beispiel:\nEntitäten: Kunde, Bestellung\nBeziehung: kauft (zwischen Kunde und Bestellung)\nKardinalität: 1 Kunde kann viele Bestellungen haben (1:N)\nAttribute Kunde: Kundennummer (PK), Name, Adresse\nAttribute Bestellung: Bestellnummer (PK), Datum\n\n💡 Merksatz:\nERM = visuelle Darstellung von Daten, Beziehungen und deren Struktur → zuerst Entitäten, dann Attribute, dann Beziehungen und Kardinalitäten prüfen."
    },
    {
        "title": "SQL Grundlagen",
        "textVertical": "Befehlsarten und Konzepte",
        "textHorizontal": "TCL, DDL, DML, DCL, SELECT, UPDATE, INSERT, DELETE, ALTER, DROP und Syntax",
        "ptext": "🔹 SQL-Befehlsarten\n\n1️⃣ DDL (Data Definition Language)\n• Definiert die Struktur von Datenbanken\n• Beispiele:\n  - CREATE TABLE → Tabelle erstellen\n  - ALTER TABLE → Tabelle ändern\n  - DROP TABLE → Tabelle löschen\n\n2️⃣ DML (Data Manipulation Language)\n• Daten bearbeiten / abfragen\n• Beispiele:\n  - SELECT → Daten abfragen\n  - INSERT INTO → Daten einfügen\n  - UPDATE → Daten ändern\n  - DELETE FROM → Daten löschen\n\n3️⃣ DCL (Data Control Language)\n• Rechte & Berechtigungen\n• Beispiele:\n  - GRANT → Rechte vergeben\n  - REVOKE → Rechte entziehen\n\n4️⃣ TCL (Transaction Control Language)\n• Transaktionen steuern\n• Beispiele:\n  - COMMIT → Änderungen dauerhaft speichern\n  - ROLLBACK → Änderungen zurücknehmen\n  - SAVEPOINT → Zwischenpunkt setzen\n"
    },
    {
        "title": "SELECT-Abfrage",
        "textVertical": "Daten aus Tabellen abfragen",
        "textHorizontal": "Syntax und Verwendung von SELECT, FROM, WHERE, ORDER BY, JOIN, logische Operatoren, NULL, Wildcards",
        "ptext": "🔹 Grundsyntax\nSELECT Spalten\nFROM Tabelle\nWHERE Bedingung\nORDER BY Spalte ASC|DESC;\n\n🔹 Beispiele:\nSELECT Name, Alter\nFROM Kunde\nWHERE Alter >= 18 AND Land = 'DE'\nORDER BY Name ASC;\n\n🔹 Logische Operatoren\n• AND → beide Bedingungen müssen wahr sein\n• OR → eine Bedingung muss wahr sein\n• NOT → Bedingung wird negiert\n\n🔹 NULL\n• IS NULL → prüft auf fehlende Werte\n• IS NOT NULL → prüft auf vorhandene Werte\n\n🔹 Wildcards (LIKE)\n• % → beliebige Anzahl Zeichen\n• _ → genau ein Zeichen\nBeispiel:\nWHERE Name LIKE 'M%'; → alle Namen, die mit M beginnen\n\n🔹 JOINs\n• INNER JOIN → nur passende Datensätze aus beiden Tabellen\n• LEFT JOIN → alle Datensätze der linken Tabelle + passende Rechte\n• RIGHT JOIN → alle Datensätze der rechten Tabelle + passende Linke\n• FULL JOIN → alle Datensätze beider Tabellen"
    },
    {
        "title": "UPDATE",
        "textVertical": "Daten ändern",
        "textHorizontal": "Syntax zum Ändern bestehender Daten",
        "ptext": "🔹 Syntax:\nUPDATE Tabelle\nSET Spalte = Wert\nWHERE Bedingung;\n\n🔹 Beispiel:\nUPDATE Kunde\nSET Land = 'AT'\nWHERE Land = 'DE';\n\n💡 Wichtig: Ohne WHERE → alle Datensätze werden geändert!"
    },
    {
        "title": "INSERT INTO",
        "textVertical": "Neue Daten einfügen",
        "textHorizontal": "Syntax zum Einfügen von neuen Datensätzen",
        "ptext": "🔹 Syntax:\nINSERT INTO Tabelle (Spalte1, Spalte2)\nVALUES (Wert1, Wert2);\n\n🔹 Beispiel:\nINSERT INTO Kunde (Name, Land, Alter)\nVALUES ('Anna', 'DE', 25);"
    },
    {
        "title": "DELETE FROM",
        "textVertical": "Daten löschen",
        "textHorizontal": "Syntax zum Löschen von Datensätzen",
        "ptext": "🔹 Syntax:\nDELETE FROM Tabelle\nWHERE Bedingung;\n\n🔹 Beispiel:\nDELETE FROM Kunde\nWHERE Alter < 18;\n\n💡 Wichtig: Ohne WHERE → alle Datensätze werden gelöscht!"
    },
    {
        "title": "ALTER TABLE",
        "textVertical": "Tabellenstruktur ändern",
        "textHorizontal": "Spalten hinzufügen, ändern oder löschen",
        "ptext": "🔹 Beispiele:\nALTER TABLE Kunde ADD COLUMN Email VARCHAR(50);\nALTER TABLE Kunde DROP COLUMN Alter;\nALTER TABLE Kunde MODIFY COLUMN Name VARCHAR(100);"
    },
    {
        "title": "DROP TABLE",
        "textVertical": "Tabelle löschen",
        "textHorizontal": "Gesamte Tabelle entfernen",
        "ptext": "🔹 Syntax:\nDROP TABLE Tabelle;\n\n🔹 Beispiel:\nDROP TABLE Kunde;\n\n💡 Achtung: Alle Daten gehen verloren!"
    },
    {
        "title": "SQL Syntax-Reihenfolge",
        "textVertical": "Reihenfolge der SQL-Komponenten",
        "textHorizontal": "Wie SELECT-Abfragen systematisch aufgebaut werden",
        "ptext": "🔹 Grundregel:\n1️⃣ SELECT → welche Spalten?\n2️⃣ FROM → aus welcher Tabelle?\n3️⃣ JOIN → Tabellen verknüpfen (falls nötig)\n4️⃣ WHERE → Bedingungen\n5️⃣ GROUP BY → Gruppierungen\n6️⃣ HAVING → Bedingungen auf Gruppen\n7️⃣ ORDER BY → Sortierung\n\n🔹 Beispiel:\nSELECT Kunde.Name, SUM(Bestellung.Betrag) AS Gesamt\nFROM Kunde\nINNER JOIN Bestellung ON Kunde.ID = Bestellung.KundeID\nWHERE Kunde.Land = 'DE'\nGROUP BY Kunde.Name\nHAVING SUM(Bestellung.Betrag) > 100\nORDER BY Gesamt DESC;"
    },
    {
        "title": "Normalformen in Datenbanken",
        "textVertical": "Strukturierte Daten ohne Redundanz",
        "textHorizontal": "Ziel: Daten effizient speichern und Anomalien vermeiden",
        "ptext": "🔹 Ziel der Normalformen:\n• Redundanzen reduzieren oder vermeiden\n• Datenkonsistenz sicherstellen\n• Anomalien beim Einfügen, Ändern oder Löschen verhindern\n\n🔹 Was sind Redundanzen?\n• Mehrfach vorhandene, gleiche Informationen in einer Datenbank\n• Beispiel: Kundendaten mehrfach in verschiedenen Tabellen\n• Nachteile: erhöhte Speicherlast, Fehleranfälligkeit, Inkonsistenzen"
    },
    {
        "title": "1. Normalform (1NF)",
        "textVertical": "Atomare Werte",
        "textHorizontal": "Jede Spalte enthält nur einen Wert, keine wiederholten Gruppen",
        "ptext": "🔹 Definition:\n• Jede Zelle enthält genau einen Wert (atomar)\n• Jede Zeile ist eindeutig identifizierbar (Primärschlüssel)\n\n🔹 Beispiel:\nTabelle mit Kunde und Telefonnummern\n❌ Nicht 1NF: mehrere Telefonnummern in einer Spalte 'Telefon'\n✅ 1NF: jede Telefonnummer in eigener Zeile\n\n🔹 Ziel: Vermeidung von Wiederholungsgruppen"
    },
    {
        "title": "2. Normalform (2NF)",
        "textVertical": "Abhängigkeit vom Primärschlüssel",
        "textHorizontal": "Alle Nicht-Schlüsselattribute hängen vollständig vom Primärschlüssel ab",
        "ptext": "🔹 Definition:\n• Tabelle ist bereits in 1NF\n• Jedes Nicht-Schlüsselattribut ist voll funktional abhängig vom gesamten Primärschlüssel\n\n🔹 Beispiel:\nTabelle Bestellung(ID_Kunde, Produkt, KundeName)\n❌ Nicht 2NF: KundeName hängt nur von ID_Kunde ab, nicht von Produkt\n✅ 2NF: Kunde in separate Tabelle auslagern\n\n🔹 Ziel: Vermeidung von partiellen Abhängigkeiten"
    },
    {
        "title": "3. Normalform (3NF)",
        "textVertical": "Keine transitive Abhängigkeit",
        "textHorizontal": "Nicht-Schlüsselattribute hängen nur vom Primärschlüssel ab, nicht voneinander",
        "ptext": "🔹 Definition:\n• Tabelle ist bereits in 2NF\n• Kein Nicht-Schlüsselattribut ist transitiv abhängig von einem anderen Nicht-Schlüsselattribut\n\n🔹 Beispiel:\nTabelle Kunde(ID, PLZ, Ort)\n❌ Nicht 3NF: Ort hängt von PLZ ab, nicht direkt vom Primärschlüssel ID\n✅ 3NF: Ort in separate PLZ-Tabelle auslagern\n\n🔹 Ziel: Vermeidung von transitiven Abhängigkeiten"
    },
    {
        "title": "Anomalien in Datenbanken",
        "textVertical": "Fehler beim Einfügen, Ändern, Löschen",
        "textHorizontal": "Probleme, die durch Redundanzen entstehen",
        "ptext": "🔹 Arten von Anomalien:\n1️⃣ Einfüge-Anomalie: Man kann Daten nicht einfügen, ohne andere Daten zu kennen\n2️⃣ Änderungs-Anomalie: Änderungen müssen mehrfach durchgeführt werden → Inkonsistenz\n3️⃣ Lösch-Anomalie: Löschen eines Datensatzes entfernt andere wichtige Informationen\n\n💡 Merksatz:\nNormalformen reduzieren Redundanzen und verhindern Anomalien."
    },
    {
        "title": "Statische Testverfahren",
        "textVertical": "Code/Dokumente prüfen ohne Ausführung",
        "textHorizontal": "Fehler finden, bevor das Programm läuft",
        "ptext": "🔹 Definition:\nStatische Testverfahren prüfen Software, ohne sie auszuführen.\n\n🔹 Was wird geprüft:\n• Quellcode\n• Dokumentation\n• Anforderungen\n• Entwürfe (z. B. UML)\n\n🔹 Typische Verfahren:\n1. Review – Code oder Dokumente gemeinsam prüfen\n2. Walkthrough – Autor erklärt Code, Team gibt Feedback\n3. Inspektion – sehr formelle Überprüfung mit festen Rollen\n4. Statische Codeanalyse – automatische Tools prüfen Stil, ungenutzte Variablen, NullPointer\n\n💡 Merksatz:\nStatisch = lesen, nicht laufen"
    },
    {
        "title": "Dynamische Testverfahren",
        "textVertical": "Software ausführen und Verhalten prüfen",
        "textHorizontal": "Testet Funktionen, Logik, Performance und Benutzerinteraktionen",
        "ptext": "🔹 Definition:\nDynamische Testverfahren prüfen die Software durch Ausführung.\n\n🔹 Typische Verfahren:\n1. Unit-Test – einzelne Methode oder Klasse (White-Box)\n2. Integrationstest – Zusammenspiel mehrerer Module\n3. Systemtest – Gesamtsystem, Black-Box\n4. Abnahmetest – Kunde prüft Anforderungen\n\n💡 Merksatz:\nDynamisch = Programm läuft"
    },
    {
        "title": "Black-Box / White-Box Test",
        "textVertical": "Sicht auf Code bekannt oder unbekannt",
        "textHorizontal": "Black-Box prüft nur Eingaben und Ausgaben, White-Box prüft interne Logik",
        "ptext": "🔹 Black-Box-Test:\n• Tester kennt den Quellcode nicht\n• Fokus: Funktionalität, Verhalten aus Benutzersicht\n• Beispiele: Login-Test, Formularprüfung\n\n🔹 White-Box-Test:\n• Tester kennt den Quellcode\n• Fokus: interne Logik, alle Pfade und Schleifen\n• Beispiele: Unit-Tests, Pfadüberdeckung\n\n💡 Merksatz:\nBlack-Box = extern / Benutzerperspektive\nWhite-Box = intern / Codeperspektive"
    },
    {
        "title": "Abnahmeprotokoll",
        "textVertical": "Dokumentation der Abnahme",
        "textHorizontal": "Offizielles Dokument mit Prüfpunkten, Ergebnissen und Entscheidung",
        "ptext": "🔹 Definition:\nHält schriftlich fest, ob die Software abgenommen wurde.\n\n🔹 Aufbau:\nAbschnitt | Inhalt\nProjektdaten | Projektname, Auftraggeber, Projektleiter, Datum\nTeilnehmer | Wer war bei der Abnahme dabei?\nZiel / Zweck | Warum wird abgenommen?\nPrüfpunkte / Testfälle | Welche Funktionen getestet?\nErgebnisse | Bestehen / Fehler / Hinweise\nAbnahmeentscheidung | ✅ angenommen / ❌ nicht angenommen\nUnterschriften | Kunde, Projektleiter, ggf. Entwickler\n\n💡 Merksatz:\nAbnahmeprotokoll dokumentiert Ergebnisse, sorgt für Transparenz und Rechtssicherheit"
    },
    {
        "title": "Testdatengeneratoren",
        "textVertical": "Automatische Testdaten erstellen",
        "textHorizontal": "Erzeugt Zufallswerte, vordefinierte oder spezifikationsbasierte Daten für Tests",
        "ptext": "🔹 Definition:\nTestdatengeneratoren erzeugen Testdaten automatisch, um Tests effizienter zu machen.\n\n🔹 Arten von Testdaten:\n1. Zufällige Daten – Zahlen, Strings, Datumswerte\n2. Vordefinierte Werte – aus Äquivalenzklassen / Grenzwertanalyse\n3. Spezielle Werte – ungültige oder extreme Eingaben\n\n🔹 Bereitstellung:\n• Direkt im Test (z. B. Unit-Test)\n• Externe Dateien (CSV, JSON, Excel)\n• Datenbanken (Testkunden, Testbestellungen)\n\n💡 Merksatz:\nTestdatengeneratoren sparen Zeit, sorgen für Konsistenz und systematische Testabdeckung"
    },
    {
        "title": "Datenqualität",
        "textVertical": "Richtigkeit und Vollständigkeit der Daten",
        "textHorizontal": "Daten sollen korrekt, vollständig, konsistent und aktuell sein",
        "ptext": "🔹 Definition:\nDatenqualität beschreibt, wie zuverlässig und nutzbar Daten für Prozesse und Entscheidungen sind.\n\n🔹 Qualitätsmerkmale:\n• Korrektheit – stimmen die Daten?\n• Vollständigkeit – fehlen Daten?\n• Konsistenz – widersprechen sich Daten?\n• Aktualität – sind die Daten aktuell?\n• Relevanz – sind die Daten nützlich für den Zweck?\n\n💡 Merksatz:\nHohe Datenqualität = richtige, vollständige, konsistente und aktuelle Daten."
    },
    {
        "title": "Datenformate XML / JSON / CSV",
        "textVertical": "Strukturierte Datendarstellung",
        "textHorizontal": "Dateiformate für Datenaustausch und Speicherung",
        "ptext": "🔹 XML (Extensible Markup Language):\n• Hierarchische Struktur\n• Tags <name>...</name>\n• Gut für strukturierte Dokumente und APIs\n\n🔹 JSON (JavaScript Object Notation):\n• Schlüssel-Wert Paare\n• Leichtgewichtig, gut für Web / APIs\n• Beispiel: { \"name\": \"Max\", \"alter\": 25 }\n\n🔹 CSV (Comma Separated Values):\n• Tabellenform, durch Komma getrennt\n• Einfach, aber keine verschachtelte Struktur\n• Beispiel: Name,Alter\nMax,25\nAnna,30\n\n💡 Merksatz:\nXML = hierarchisch, JSON = leichtgewichtig / Web, CSV = tabellarisch / einfach"
    },
    {
        "title": "Wahrheitstabelle",
        "textVertical": "Alle Kombinationen der Eingaben",
        "textHorizontal": "Ergebnis der logischen Funktion für jede Kombination",
        "ptext": "🔹 Definition:\nEine Wahrheitstabelle zeigt systematisch, welche Ausgaben eine logische Funktion für alle möglichen Eingaben liefert.\n\n🔹 Schritte zum Erstellen:\n1. Anzahl der Eingaben bestimmen → n\n2. Anzahl der Zeilen = 2ⁿ\n3. Alle Kombinationen auflisten (0/1)\n4. Logische Operation anwenden\n5. Ergebnis in letzte Spalte schreiben\n\n🔹 Beispiel XOR (A ⊕ B):\nA | B | A ⊕ B\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\n💡 Merksatz:\nXOR = Ergebnis 1, wenn genau eine 1 vorhanden ist."
    },
    {
        "title": "NoSQL Datenbanken",
        "textVertical": "Nicht-relationale Datenbanken",
        "textHorizontal": "Flexible, skalierbare Datenspeicherung ohne festes Schema",
        "ptext": "🔹 Definition:\nNoSQL = Not only SQL → Datenbanktypen, die nicht nur auf Tabellen basieren.\n\n🔹 Typen:\n1. Key-Value Store – einfache Schlüssel-Wert Paare (z. B. Redis)\n2. Document Store – speichert Dokumente in JSON-ähnlicher Form (z. B. MongoDB)\n3. Column Store – spaltenorientierte Speicherung (z. B. Cassandra)\n4. Graph Database – Knoten und Kanten, ideal für Netzwerke (z. B. Neo4j)\n\n🔹 Vorteile:\n• Flexible Datenstruktur\n• Horizontal skalierbar\n• Schnell bei Lese-/Schreibzugriffen\n\n💡 Merksatz:\nSQL = stabil & strukturiert, NoSQL = flexibel & skalierbar."
    },
    {
        "title": "Klassendiagramm",
        "textVertical": "Objektorientierte Struktur visualisieren",
        "textHorizontal": "Zeigt Klassen, Attribute, Methoden und Beziehungen",
        "ptext": "🔹 Definition:\nKlassendiagramme in UML stellen die Struktur einer Software objektorientiert dar.\n\n🔹 Elemente:\n• Klassen → Name, Attribute, Methoden\n• Beziehungen → Assoziation, Vererbung, Aggregation, Komposition\n• Sichtbarkeit → + public, - private, # protected\n\n🔹 Ziel:\n• Softwarestruktur visualisieren\n• Design prüfen\n• Beziehungen und Abhängigkeiten zeigen\n\n💡 Merksatz:\nKlassendiagramm = Architektur der Klassen + ihre Beziehungen."
    },
    {
        "title": "Kardinalitäten zuordnen",
        "textVertical": "Verhältnis zwischen Entitäten",
        "textHorizontal": "1:1, 1:n, n:1, n:m zeigen, wie viele Objekte miteinander verbunden sind",
        "ptext": "🔹 Definition:\nKardinalitäten beschreiben, wie viele Instanzen einer Entität mit Instanzen einer anderen Entität verknüpft sein können.\n\n🔹 Typen:\n• 1:1 → Ein Objekt der Entität A ist genau einem Objekt von B zugeordnet\n• 1:n → Ein Objekt von A kann mehreren Objekten von B zugeordnet sein\n• n:1 → Mehrere Objekte von A gehören zu einem Objekt von B\n• n:m → Mehrere Objekte von A können mehreren Objekten von B zugeordnet sein\n\n💡 Merksatz:\nKardinalität = Anzahl der Objekte in einer Beziehung zwischen Entitäten."
    },
    {
        "title": "Python & MongoDB",
        "textVertical": "Dokument in MongoDB schreiben",
        "textHorizontal": "Befehl zum Einfügen eines einzelnen Dokuments in eine MongoDB-Collection",
        "ptext": "🔹 Befehl:\n• insert_one()\n\n🔹 Beispiel in Python:\n```python\nfrom pymongo import MongoClient\n\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['meineDatenbank']\ncollection = db['meineCollection']\n\n# Ein Dokument einfügen\ncollection.insert_one({\"name\": \"Max\", \"alter\": 25})\n```\n\n💡 Merksatz:\ninsert_one() fügt genau ein Dokument in die MongoDB ein."
    },
    {
        "title": "Python & Tkinter",
        "textVertical": "Eingabefeld erstellen",
        "textHorizontal": "Komponente für Benutzereingaben in einer GUI",
        "ptext": "🔹 Komponente:\n• Entry\n\n🔹 Beispiel:\n```python\nimport tkinter as tk\n\nroot = tk.Tk()\nentry_feld = tk.Entry(root)\nentry_feld.pack()\nroot.mainloop()\n```\n\n💡 Merksatz:\nMit Entry kann der Benutzer Text in der GUI eingeben."
    },
    {
        "title": "Testen – Verantwortung",
        "textVertical": "Wer ist für Softwarequalität verantwortlich?",
        "textHorizontal": "Teamverantwortung und Aufgaben der Tester",
        "ptext": "🔹 Teamverantwortung:\n• Die Qualität eines Produkts liegt nicht nur bei Testern.\n• Alle Teammitglieder tragen Verantwortung (Entwickler, Designer, Tester, Projektleiter).\n\n🔹 Aufgaben der Tester:\n• Abnahmetestfälle gemeinsam mit Kunden oder deren Vertretern erstellen\n• Tests durchführen und Ergebnisse dokumentieren\n• Fehler erkennen und Rückmeldung geben\n\n💡 Merksatz:\nSoftwarequalität = Verantwortung des gesamten Teams, Tester unterstützen durch systematisches Testen und Dokumentieren."
    },
    {
        "title": "Wahrheitstabelle ausfüllen",
        "textVertical": "Alle Kombinationen der Eingaben darstellen",
        "textHorizontal": "Ergebnis der logischen Operationen für jede Eingabekombination berechnen",
        "ptext": "🔹 Definition:\nEine Wahrheitstabelle listet alle möglichen Eingabekombinationen für eine logische Funktion auf und zeigt das Ergebnis.\n\n🔹 Vorgehensweise:\n1. Anzahl der Eingaben bestimmen (z. B. A, B → 2 Eingaben)\n2. Anzahl der Zeilen berechnen: 2^n (bei 2 Eingaben → 4 Zeilen)\n3. Alle Kombinationen systematisch auflisten (0 = falsch, 1 = wahr)\n4. Logische Operation auf jede Zeile anwenden (AND, OR, XOR, NOT)\n5. Ergebnisse in der letzten Spalte eintragen\n\n🔹 Beispiel XOR (A ⊕ B):\nA | B | A ⊕ B\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\n💡 Merksätze:\n• AND → beide Eingaben 1 → Ergebnis 1\n• OR → mindestens eine Eingabe 1 → Ergebnis 1\n• XOR → genau eine Eingabe 1 → Ergebnis 1\n• NOT → Eingabe umkehren (0→1, 1→0)"
    }

];
quadraten = [];

function init() {
    loadFromLocalStorage();
    menuTemplate();
    render();
}

kugelboolean = null;
let activeCardIndex = null;
let activeTextType = null;
let deletIndexWert = null;
let titleIndex = null;

function render() {
    let contentID = document.getElementById("renderContainerId");
    contentID.innerHTML = '';

    kartenDaten.forEach((karte, index) => {   // <--- index hinzugefügt
        contentID.innerHTML += `
          <div class="kartenClass">
            <div class="headContents">
            <div class = "deletbestägenClass" id = "deletIndex${index}" onclick = "bestätigenToggle(${index})">Delet Bestätigen</div>
            <div class="titleClass" onclick="toggleTitle(${index})" id="titleId${index}">${karte.title}</div>
              <div class = "buttons">
                  <div class="backClass" onclick="toggleDeckblatt(${index})">Erklärung</div>
                  <div class = "backClass2" onclick = "toggledeckblatt2(${index})">Kurz</div>
                  <div class = "backClass3" onclick = "toggledeckblatt3(${index})">Pr-Satz</div>
               </div>
            </div>

            <div class="textsContainer">
                 <div class="ptexClass" id = "pTextId${index}">${karte.ptext}
                    <div class = "kugelErklärung" id = "grünId${index}" onclick = "toggleKugle(${index})">Ändern</div>
                 </div>
                     
                 <div class="linealvertikal"></div>

                 <div class="deckblatClass " id="deckblatt${index}"></div>
                 <div class = "deckblattSmaller" id = "deckblattKleinerID${index}"></div>
                 <div class = "deckblattSmallest" id = "deckblattSmallestId${index}"></div>

                 <div id = "kurzTextId${index}" class="textverticalClass">${karte.textVertical}
                      <div  onclick = "twoToggleKugle(${index})" id="verticaleandernId${index}" class="verticalAendernClass">Ändern</div>
                 </div>
            </div>

            <div class="linealHorizontal"></div>
              <div class="textMinimalBelow" id = "minimalTextId${index}" >${karte.textHorizontal}
                 <div onclick = "threeToggleKugle(${index})" id="prüfEandernId${index}" class="prüfAendernClass">Ändern</div>
              </div>
          </div>
        `;
    });
}

function toggleDeckblatt(index) {
    const deckblatt = document.getElementById("deckblatt" + index);
    deckblatt.classList.toggle("hide");
}

function toggledeckblatt2(index) {
    const deckblatt2 = document.getElementById("deckblattKleinerID" + index);
    deckblatt2.classList.toggle("hide");
}

function toggledeckblatt3(index) {
    const deckblatt3 = document.getElementById("deckblattSmallestId" + index);
    deckblatt3.classList.toggle("hide")
}

function bestätigenToggle(index) {
    let deletIndex = document.getElementById('deletIndex' + index);
    deletIndex.classList.toggle('bastätigungRed');
    deletIndexWert = index;
}

function titleCheange(index) {
    let titleId = document.getElementById('titleId' + index);
    titleId.classList.toggle('bastätigungRed');
    titleIndex = index;
}

function menuTemplate() {
    const seidMenuIdInhalt = document.getElementById("seidMenuId");
    seidMenuIdInhalt.innerHTML = `
        <div class="inputContainer">
            <button type="button" onclick="search()">Search</button>
            <button type="button" onclick="addNeueCard()">Add neue Card</button>
            <button type="button" onclick="löschenCard()" id = löschenId>Card löschen</button>

            <input id="inputId" 
                   class="inputClass" 
                   type="text" 
                   placeholder="Gib bitte Thema ein was du suchst">
        </div>
         <div class = "implementChangeThemaInput">
               <input id = "themaInputId" type="text" placeholder = "Cheange Thema" class= "inputThema">
               <button onclick="cheangeTextErklaerung()">Text Implementieren</button>
        </div>  
        <div class="changeClass"> 
            <div class="changeÜberschrift"><textarea class = "erklärungAreaClass" name="ErklärungName" id="erklerungAreaId"> </textarea></div> 
            <div class="changeLinealvertikal"> <textarea class = "kurzErklärungClass" name="KurzErklärungName" id="kurzAreaId"> </textarea></div>
            <div class="changeLinealHorizontal"> <textarea class = "prAreaClass" name="PrName" id="prAreaId"> </textarea></div>
        </div>
    `;
}

function toggleKugle(index) {
    let grünKugel = document.getElementById('grünId' + index)
    grünKugel.classList.toggle('blauKugel');

    if (grünKugel.classList.contains('blauKugel')) { // Prüft, ob die Kugel jetzt blau ist
        activeCardIndex = index; // Karte aktiv: speichert Index der ausgewählten Karte
        activeTextType = "ptext";  // Feldtyp merken
    } else {
        activeCardIndex = null;// Karte deaktiviert: keine Karte aktiv
        activeTextType = null;
        // activePrType = null;
    }
}

function twoToggleKugle(index) {
    let verticaleandernId = document.getElementById('verticaleandernId' + index);
    verticaleandernId.classList.toggle('blauKugel');

    if (verticaleandernId.classList.contains('blauKugel')) {
        activeCardIndex = index;
        activeTextType = "kurz";  // Feldtyp merken
    } else {
        activeCardIndex = null;
        activeTextType = null;

    }
}

function threeToggleKugle(index) {
    let btn = document.getElementById('prüfEandernId' + index);
    btn.classList.toggle('blauKugel');

    if (btn.classList.contains('blauKugel')) {
        activeCardIndex = index;   // Karte merken
        activeTextType = "pr";     // Feldtyp merken
    } else {
        activeCardIndex = null;
        activeTextType = null;
    }
}

function toggleTitle(index) {
    activeCardIndex = index;
    activeTextType = "title";
    document.getElementById("titleId" + index).classList.toggle("blauKugel");
}

function cheangeTextErklaerung() {
    if (activeCardIndex === null || activeTextType === null) {
        alert("Bitte zuerst eine Karte auswählen");
        return;
    }
    if (activeTextType === "title") {
        let text = document.getElementById('themaInputId').value.trim();
        if (!text) return alert("Bitte Überschrift eingeben");

        document.getElementById('titleId' + activeCardIndex).innerText = text;
        kartenDaten[activeCardIndex].title = text;

        document.getElementById('themaInputId').value = "";
    }

    if (activeCardIndex === null || activeTextType === null) {
        alert("Bitte zuerst eine Karte auswählen");
        return;
    }

    if (activeTextType === "ptext") {
        let text = document.getElementById('erklerungAreaId').value.trim();
        if (!text) return alert("Bitte Text eingeben");

        document.getElementById('pTextId' + activeCardIndex).innerHTML =
            text +
            `<div class="kugelErklärung" id="grünId${activeCardIndex}" onclick="toggleKugle(${activeCardIndex})">Ändern</div>`;
        // Blaue Kugel wieder hinzufügen, wenn aktiv
        document.getElementById('grünId' + activeCardIndex).classList.add('blauKugel');
        document.getElementById('erklerungAreaId').value = "";

        kartenDaten[activeCardIndex].ptext = text;
    }

    if (activeTextType === "kurz") {
        let text = document.getElementById('kurzAreaId').value.trim();
        if (!text) return alert("Bitte Text eingeben");

        document.getElementById('kurzTextId' + activeCardIndex).innerHTML =
            text +
            `<div class="verticalAendernClass" id="verticaleandernId${activeCardIndex}" onclick="twoToggleKugle(${activeCardIndex})">Ändern</div>`;
        document.getElementById('verticaleandernId' + activeCardIndex).classList.add('blauKugel');
        document.getElementById('kurzAreaId').value = "";

        kartenDaten[activeCardIndex].textVertical = text;
    }

    if (activeTextType === "pr") {
        let text = document.getElementById('prAreaId').value.trim();
        if (!text) return alert("Bitte Text eingeben");

        document.getElementById('minimalTextId' + activeCardIndex).innerHTML =
            text +
            `<div class="prüfAendernClass" id="prüfEandernId${activeCardIndex}" onclick="threeToggleKugle(${activeCardIndex})">Ändern</div>`;
        // Blaue Kugel wieder hinzufügen, wenn aktiv

        document.getElementById('prüfEandernId' + activeCardIndex).classList.add('blauKugel');
        document.getElementById('prAreaId').value = "";

        kartenDaten[activeCardIndex].textHorizontal = text;
    }
    saveToLocalStorage();
}

function löschenCard() {
    if (deletIndexWert === null) {
        alert('Bitte eine Karte auswählen');
        return;
    }
    kartenDaten.splice(deletIndexWert, 1);
    deletIndexWert = null;
    saveToLocalStorage()

    render()
}

function search() {
    // Holt den Wert aus dem Inputfeld und macht ihn kleinbuchstabig
    let searchTerm = document.getElementById("inputId").value.toLowerCase();
    // Wenn nichts eingegeben wurde, einfach abbrechen
    if (searchTerm.trim() === "") return;
    // Holt ALLE Elemente mit der Klasse .kartenClass = deine Themen-Karten
    const cards = document.querySelectorAll(".kartenClass");
    // Durchläuft jede Karte einzeln
    for (let card of cards) {
        // Holt den gesamten Textinhalt der Karte und macht ihn kleinbuchstabig
        let text = card.innerText.toLowerCase();
        // Prüft, ob der Text der Karte das Suchwort enthält
        if (text.includes(searchTerm)) {
            // Scrollt weich zu dieser Karte
            card.scrollIntoView({
                behavior: "smooth",
                block: "center" // 🟦 GENAUER TREFFER
            });
            // Fügt kurz eine Hervorhebung (blinkend) hinzu
            card.classList.add("highlight");
            // Entfernt das Highlight nach 0.8 Sekunden wieder
            setTimeout(() => card.classList.remove("highlight"), 2250);
            // Sobald ein Treffer gefunden wurde: Suche abbrechen
            return;
        }
    }
}

function addNeueCard() {
    // Neue Karte mit Standardwerten erstellen
    const neueKarte = {
        title: "Neues Thema",
        textVertical: "Hier steht der vertikale Text...",
        textHorizontal: "Hier steht der kurze Satz...",
        ptext: "Hier steht der ausführliche Text..."
    };
    // In das Array einfügen
    kartenDaten.push(neueKarte);
    // Im LocalStorage speichern
    saveToLocalStorage();
    // Die Anzeige neu rendern
    render();
}

function saveToLocalStorage() {
    localStorage.setItem("kartendaten", JSON.stringify(kartenDaten));
}

function loadFromLocalStorage() {
    const storedData = localStorage.getItem("kartendaten");
    if (!storedData) return;

    const parsedData = JSON.parse(storedData);

    // 🔴 Array leeren (aber NICHT neu zuweisen!)
    kartenDaten.length = 0;

    // 🟢 Daten sauber wieder einfügen
    parsedData.forEach(karte => {
        kartenDaten.push(karte);
    });
}




//localStorage.clear();