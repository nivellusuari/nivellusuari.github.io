# Nivell usuari · Portal web

**[Obrir la web / Abrir la web / Abrir a web / Ireki webgunea](https://nivellusuari.github.io/)**

**Idiomes / Idiomas / Hizkuntzak:** [Valencià](#valencià) · [Castellano](#castellano) · [Galego](#galego) · [Euskara](#euskara)

## Valencià
Portal de Nivell usuari: ferramentes gratuïtes, guies i projectes de codi obert. Inclou accés a la calculadora laboral i presenta el futur comprovador de privacitat (encara no disponible). Quatre idiomes i disseny adaptable a mòbils.

**Publicació:** puja tots els fitxers i carpetes a l'arrel de `main`. En **Settings → Pages**, selecciona **Deploy from a branch**, `main`, `/(root)`. La web estarà a https://nivellusuari.github.io/.

**Privacitat:** sense cookies, analítica ni formularis de recopilació. GitHub Pages pot processar dades tècniques de connexió. Les traduccions són fitxers JSON locals.

## Castellano
Portal de Nivell usuari: herramientas gratuitas, guías y proyectos de código abierto. Enlaza la calculadora laboral y anuncia el futuro comprobador de privacidad (todavía no disponible). Cuatro idiomas y diseño adaptable a móviles.

**Publicación:** sube todos los archivos y carpetas a la raíz de `main`. En **Settings → Pages**, elige **Deploy from a branch**, `main`, `/(root)`. La web estará en https://nivellusuari.github.io/.

**Privacidad:** sin cookies, analítica ni formularios de recogida. GitHub Pages puede procesar datos técnicos de conexión. Las traducciones son archivos JSON locales.

## Galego
Portal de Nivell usuari: ferramentas gratuítas, guías e proxectos de código aberto. Enlaza a calculadora laboral e anuncia o futuro comprobador de privacidade (aínda non dispoñible). Catro idiomas e deseño adaptable a móbiles.

**Publicación:** sobe todos os ficheiros e cartafoles á raíz de `main`. En **Settings → Pages**, escolle **Deploy from a branch**, `main`, `/(root)`. A web estará en https://nivellusuari.github.io/.

**Privacidade:** sen cookies, analítica nin formularios de recollida. GitHub Pages pode procesar datos técnicos de conexión. As traducións son ficheiros JSON locais.

## Euskara
Nivell usuari ataria: doako tresnak, gidak eta kode irekiko proiektuak. Lan-kalkulagailurako esteka du, eta etorkizuneko pribatutasun-egiaztatzailea aurkezten du (oraindik ez dago erabilgarri). Lau hizkuntza eta mugikorretara egokitutako diseinua.

**Argitaratzea:** igo fitxategi eta karpeta guztiak `main` adarraren erro-direktoriora. **Settings → Pages** atalean, aukeratu **Deploy from a branch**, `main`, `/(root)`. Webgunea hemen egongo da: https://nivellusuari.github.io/.

**Pribatutasuna:** cookierik, analitikarik edo datuak biltzeko formulariorik gabe. GitHub Pagesek konexio-datu teknikoak prozesa ditzake. Itzulpenak JSON fitxategi lokalak dira.

## Estructura / Estructura / Egitura

```text
index.html
styles.css
script.js
assets/favicon.svg
locales/va.json
locales/es.json
locales/gl.json
locales/eu.json
README.md
```

Per a provar-la localment / Para probarla localmente / Tokian probatzeko:

```bash
python3 -m http.server 8000
```

Obri / Abre / Ireki: http://localhost:8000

La web utilitza només HTML, CSS i JavaScript, sense dependències ni compilació. No guarda dades de l'usuari.
