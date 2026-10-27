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
  { datei: "werk-01.jpg", titel: "Morgenfeld",      jahr: 2026, technik: "Acryl auf Leinwand", breite: 60,  hoehe: 80,  status: "verfuegbar", preis: "" },
  { datei: "werk-02.jpg", titel: "Ufer II",          jahr: 2025, technik: "Öl auf Leinwand",    breite: 100, hoehe: 100, status: "verkauft",   preis: "" },
  { datei: "werk-03.jpg", titel: "Studie (rot)",     jahr: 2025, technik: "Acryl auf Leinwand", breite: 30,  hoehe: 40,  status: "verfuegbar", preis: "" },
  { datei: "werk-04.jpg", titel: "Sommerende",       jahr: 2025, technik: "Öl auf Leinwand",    breite: 120, hoehe: 90,  status: "verfuegbar", preis: "" },
  { datei: "werk-05.jpg", titel: "Stille Mitte",     jahr: 2024, technik: "Acryl auf Leinwand", breite: 50,  hoehe: 50,  status: "reserviert", preis: "" },
  { datei: "werk-06.jpg", titel: "Abendrot",         jahr: 2024, technik: "Öl auf Leinwand",    breite: 80,  hoehe: 120, status: "verfuegbar", preis: "" },
  { datei: "werk-07.jpg", titel: "Kleine Landschaft",jahr: 2024, technik: "Acryl auf Leinwand", breite: 40,  hoehe: 30,  status: "verkauft",   preis: "" },
  { datei: "werk-08.jpg", titel: "Nachklang",        jahr: 2023, technik: "Öl auf Leinwand",    breite: 150, hoehe: 100, status: "verfuegbar", preis: "" },
  { datei: "werk-09.jpg", titel: "Grüner Raum",      jahr: 2023, technik: "Acryl auf Leinwand", breite: 70,  hoehe: 70,  status: "verfuegbar", preis: "" },
];
