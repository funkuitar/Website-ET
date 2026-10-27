# Website Anna Beispiel – Malerei

Statische Website (HTML/CSS/JS) für GitHub Pages. Kein Build-Schritt, keine Cookies, keine externen Dienste.

## Struktur

```
index.html            Startseite (Werke, Über mich, Vita, Ausstellungen, Kontakt)
impressum.html        Impressum nach § 5 DDG
datenschutz.html      Datenschutzerklärung (DSGVO)
404.html              Fehlerseite
assets/css/style.css  Gestaltung (Farben oben in :root anpassen)
assets/js/werke.js    ← WERKLISTE: hier Bilder eintragen
assets/js/main.js     Galerie, Filter, Großansicht
assets/img/werke/     Bilddateien der Werke
assets/img/portrait.jpg  Porträtfoto
.nojekyll             verhindert Jekyll-Verarbeitung auf GitHub Pages
```

## Vor dem Veröffentlichen anpassen

1. **Name, Texte, Vita, Ausstellungen** in `index.html` ersetzen (Platzhalter „Anna Beispiel“ überall suchen & ersetzen).
2. **E-Mail-Adresse** in `index.html`, `impressum.html`, `datenschutz.html` und `assets/js/main.js` (Konstante `KONTAKT_EMAIL`).
3. **Impressum & Datenschutz**: alle gelb markierten Stellen (`class="todo"`) ausfüllen, danach die Markierung entfernen.
4. **Bilder**: Platzhalter in `assets/img/werke/` und `assets/img/portrait.jpg` durch echte Fotos ersetzen.

## Neues Werk hinzufügen

1. Foto als JPG speichern (lange Seite ca. 1600 px, möglichst < 400 KB), z. B. `assets/img/werke/sommer.jpg`
2. In `assets/js/werke.js` eine Zeile ergänzen:
   ```js
   { datei: "sommer.jpg", titel: "Sommer", jahr: 2026, technik: "Öl auf Leinwand", breite: 80, hoehe: 60, status: "verfuegbar", preis: "" },
   ```
   Format-Filter (klein ≤ 50 cm, mittel ≤ 100 cm, groß > 100 cm) wird aus der längsten Seite berechnet.

## Veröffentlichen mit GitHub Pages

1. Auf github.com ein neues **öffentliches** Repository anlegen, z. B. `anna-beispiel-kunst`
   (oder `<benutzername>.github.io` für die Adresse `https://<benutzername>.github.io`).
2. Alle Dateien dieses Ordners hochladen (Web-Oberfläche: „Add file → Upload files“, oder per Git):
   ```bash
   git init && git add . && git commit -m "Erste Version"
   git branch -M main
   git remote add origin https://github.com/<benutzername>/anna-beispiel-kunst.git
   git push -u origin main
   ```
3. Im Repository: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**,
   Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten ist die Seite unter `https://<benutzername>.github.io/anna-beispiel-kunst/` erreichbar.

### Eigene Domain (optional, z. B. anna-beispiel.de)

1. Settings → Pages → *Custom domain* eintragen und speichern (legt eine `CNAME`-Datei an).
2. Beim Domain-Anbieter DNS-Einträge setzen (laut GitHub-Doku „Managing a custom domain“):
   A-Records für die Hauptdomain auf die GitHub-Pages-IPs, CNAME für `www` auf `<benutzername>.github.io`.
3. Danach **„Enforce HTTPS“** aktivieren.

## Rechtliche Hinweise (kurz)

- Impressum und Datenschutz müssen von jeder Seite aus mit einem Klick erreichbar sein (Footer-Links sind vorhanden).
- Keine Google Fonts, Google Maps, YouTube-Embeds oder Instagram-Widgets direkt einbinden – sonst werden beim Aufruf Daten an Dritte übertragen und es braucht ggf. ein Einwilligungs-Banner. Einfache Links sind unproblematisch.
- Werden künftig Werke **online verkauft** (Warenkorb/Bestellung), kommen weitere Pflichten hinzu (Widerrufsbelehrung, AGB, Preisangaben). Die aktuelle Seite ist nur eine Präsentation mit Anfrage per E-Mail.
- Die Mustertexte ersetzen keine Rechtsberatung; im Zweifel kurz prüfen lassen.
