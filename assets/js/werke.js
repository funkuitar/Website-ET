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
      { datei: "IMG_0170.JPG", titel: "Abendstimmung", jahr:2025, technik: "Mixed Media,Acryl", breite: 100, hoehe: 80, status: "verfuegbar", preis:""}, 
  { datei: "IMG_0653.JPG", titel: "Gesichtslos", jahr:2025, technik: "Bitumen/Acryl", breite: 100, hoehe: 80, status: "verkauft", preis:""}, 
  { datei: "IMG_1247.JPG", titel: "Waldlichtung", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 80,  hoehe: 100,  status: "verkauft", preis:""}, 
  { datei: "IMG_1761.JPG", titel: "Begrenzung", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 110, hoehe: 90,  status: "verfuegbar", preis:""},
  { datei: "IMG_1856.JPG", titel: "Landschaft 1", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 120, hoehe: 90,  status: "verfuegbar", preis:""}, 
  { datei: "IMG_2203.JPG", titel: "glühende Landschaft", jahr:2025, technik: "Zement/Struktur/Acryl auf Leinwand", breite: 150, hoehe: 60, status: "verfuegbar", preis:""}, 
  { datei: "IMG_1723.JPG", titel: "Landschaft 2", jahr:2025, technik: "Acryl/Struktur auf Leinwand", breite: 120, hoehe: 90,  status: "verfuegbar", preis:""},   
  { datei: "IMG_1871.JPG", titel: "Schlag aus dem Sand", jahr:2025, technik: "Acryl auf Leinwand", breite: 120, hoehe: 80, status: "verfuegbar", preis:""}, 
  { datei: "IMG_0810.JPG", titel: "der Weg ins Licht 1", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 80,  hoehe: 100 ,  status: "verkauft", preis:""},
  { datei: "IMG_2776.JPG", titel: "der Sonne entgegen", jahr:2025, technik: "Struktur/Gold/Acryl auf Leinwand", breite: 100, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_2542.JPG", titel: "hinterm Horizont gehts weiter",  jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 90, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_1978.JPG", titel: "ohne", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 90, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_0177.JPG", titel: "ohne", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 140, hoehe: 100, status: "verfuegbar", preis:""},
  { datei: "IMG_0172.JPG", titel: "ohne", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 140, hoehe: 100, status: "reserviert", preis:""},
  { datei: "IMG_3234.JPG", titel: "der Weg ins Licht 2",  jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 100, hoehe: 80, status: "verfuegbar", preis:""},
  { datei: "IMG_3024.JPG", titel: "Durchblick ",  jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 110, hoehe: 90, status: "verkauft", preis:""},
  { datei: "IMG_1398.JPG", titel: "ohne",  jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 100, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_1843.JPG", titel: "die Erde öffnet sich 1", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 80, hoehe: 100, status: "verfuegbar", preis:""},
  { datei: "IMG_2274.JPG", titel: "die Erde öffnet sich 2", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 80, hoehe: 80, status: "verfuegbar", preis:""},
  { datei: "IMG_3233.JPG", titel: "Winterwald", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 80, hoehe: 100, status: "verkauft", preis:""},
  { datei: "IMG_2292.JPG", titel: "Japanreise 1", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 90, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_3206.JPG", titel: "Japanreise 2", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 90, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_0089.JPG", titel: "die Versammlung", jahr:2025, technik: "Struktur/Acryl auf Leinwand", breite: 100,hoehe: 80, status: "verfuegbar", preis:""},
  { datei: "IMG_1841.JPG", titel: "die Familie", jahr:2025,  technik: "Struktur/Acryl auf Leinwand", breite: 80, hoehe: 100, status: "verfuegbar", preis:""},
  { datei: "IMG_0166.JPG", titel: "ohne", jahr:2025,  technik: "Struktur/Acryl auf Leinwand", breite: 100, hoehe: 120, status: "verfuegbar", preis:""},
  { datei: "IMG_1876.JPG", titel: "ohne", jahr:2025,  technik: "Struktur/Acryl auf Leinwand", breite: 80, hoehe: 100, status: "verfuegbar", preis:""},
  { datei: "IMG_1755.JPG", titel: "Urlaub", jahr:2025,  technik: "Struktur/Acryl auf Leinwand", breite: 110, hoehe: 90, status: "verfuegbar", preis:""},
  { datei: "IMG_1981.JPG", titel: "Santorini", jahr:2025,  technik: "Acryl auf Leinwand", breite: 100, hoehe: 80, status: "verfuegbar", preis:""},
];
