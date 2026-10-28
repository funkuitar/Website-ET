/*
  WERKLISTE – hier neue Bilder eintragen.
  ---------------------------------------
  1. Bilddatei (JPG, lange Seite ca. 1200–2000 px) in assets/img/werke/ ablegen
  2. Einen neuen Eintrag nach dem Muster unten hinzufügen
     breite / hoehe in cm  → das Format-Filter (klein/mittel/groß) wird automatisch berechnet
     status: "verfuegbar", "verkauft" oder "reserviert"
     preis: optional, z. B. "1.200 €" – leer lassen ("") für „Preis auf Anfrage“
*/
const WERKE = [
      { datei: "IMG_01389.JPG", jahr:2025, titel: "Abendstimmung",   technik: "Mixed Media,Acryl", breite:100,  hoehe:80,  status: "verfuegbar", preis:""}, 
  { datei: "IMG_0653.JPG", jahr:2025, titel: "Gesichtslos",  technik: "Bitumen/Acryl",    breite:100, hoehe:80, status: "verkauft", preis:""}, 
  { datei: "IMG_1247.JPG", jahr:2025, titel: "Waldlichtung",  technik: "Struktur/Acryl auf Leinwand", breite:80,  hoehe:100,  status: "verkauft", preis:""}, 
  { datei: "IMG_1761.JPG", jahr:2025, titel: "Begrenzung",  technik: "Struktur/Acryl auf Leinwand",    breite:110, hoehe:90,  status: "verfuegbar", preis:""},
  { datei: "IMG_1856.JPG", jahr:2025,  titel: "Landschaft 1", technik: "Struktur/Acryl auf Leinwand", breite:120,  hoehe:90,  status: "verfuegbar", preis:""}, 
  { datei: "IMG_2203.JPG", jahr:2025, titel: "glühende Landschaft",    Technik: "Zement/Struktur/Acryl auf Leinwand",    breite:150,  hoehe:60, status: "verfuegbar", preis:""}, 
  { datei: "IMG_1723.JPG", jahr:2025, titel: "Landschaft 2", technik: "Acryl/Struktur auf Leinwand", breite:120,  hoehe:90,  status: "verfuegbar", preis:""},   
  { datei: "IMG_1871.JPG", jahr:2025, titel: "Schlag aus dem Sand", technik: "Acryl auf Leinwand",    breite:120, hoehe:80, status: "verfuegbar", preis:""}, 
  { datei: "IMG_0810.JPG", jahr:2025, titel: "der Weg ins Licht 1",  technik: "Struktur/Acryl auf Leinwand", breite:80,  hoehe:100 ,  status: "verkauft", preis:""},
  { datei: "IMG_2776.JPG", jahr:2025, Titel: "der Sonne entgegen",  technik: "Struktur/Gold/Acryl auf Leinwand", breite:100, hoehe:120, status: "verfuegbar", preis:""},
  { datei: "IMG_2542.JPG", jahr:2025, Titel: "hinterm Horizont gehts weiter",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:90, status: "verfuegbar", preis:""},
  { datei: "IMG_1978.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:90, status: "verfuegbar", preis:""},
  { datei: "IMG_0177.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:140, status: "verfuegbar", preis:""},
  { datei: "IMG_0172.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:140, status: "reserviert", preis:""},
  { datei: "IMG_3234.JPG", jahr:2025, Titel: "der Weg ins Licht 2",  technik: "Struktur/Acryl auf Leinwand", hoehe:80, breite:100, status: "verfuegbar", preis:""},
  { datei: "IMG_3024.JPG", jahr:2025, Titel: "Durchblick ",  technik: "Struktur/Acryl auf Leinwand", hoehe:90, breite:110, status: "verkauft", preis:""},
  { datei: "IMG_1398.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:100, status: "verfuegbar", preis:""},
  { datei: "IMG_1843.JPG", jahr:2025, Titel: "die Erde öffnet sich 1",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:80, status: "verfuegbar", preis:""},
  { datei: "IMG_2274.JPG", jahr:2025, Titel: "die Erde öffnet sich 2",  technik: "Struktur/Acryl auf Leinwand", hoehe:80, breite:80, status: "verfuegbar", preis:""},
  { datei: "IMG_3233.JPG", jahr:2025, Titel: "Winterwald",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:80, status: "verkauft", preis:""},
  { datei: "IMG_2292.JPG", jahr:2025, Titel: "Japanreise 1",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:90, status: "verfuegbar", preis:""},
  { datei: "IMG_3206.JPG", jahr:2025, Titel: "Japanreise 2",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:90, status: "verfuegbar", preis:""},
  { datei: "IMG_0089.JPG", jahr:2025, Titel: "die Versammlung",  technik: "Struktur/Acryl auf Leinwand", hoehe:80, breite:100, status: "verfuegbar", preis:""},
  { datei: "IMG_1841.JPG", jahr:2025, Titel: "die Familie",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:80, status: "verfuegbar", preis:""},
  { datei: "IMG_0166.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:120, breite:100, status: "verfuegbar", preis:""},
  { datei: "IMG_1876.JPG", jahr:2025, Titel: "ohne",  technik: "Struktur/Acryl auf Leinwand", hoehe:100, breite:80, status: "verfuegbar", preis:""},
  { datei: "IMG_1755.JPG", jahr:2025, Titel: "Urlaub",  technik: "Struktur/Acryl auf Leinwand", hoehe:90, breite:110, status: "verfuegbar", preis:""},
  { datei: "IMG_1981.JPG", jahr:2025, Titel: "Santorini",  technik: "Acryl auf Leinwand", hoehe:80, breite:100, status: "verfuegbar", preis:""},

];
