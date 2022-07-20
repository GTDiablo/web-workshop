# React Ecosystem
---

### NVM - Node Version Manager
Ez az a tool elengedhetetlen a node js projektek fejlesztésére. Az nvm segítségével telepíthetünk egyszerre több node verziót és bármikor tudunk verziót váltani, ha szükségünk van rá.

**Telepítés unix alapú rendszerekhez:**
[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

**Telepítés windows-n:**
[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

A projektek fejlesztése során `16.16.0` vagy feletti node verziót fogunk használni.

## Yarn
Az npm-hez hasonlóan egy package manager tool, viszont hatalmas külömbségek vannak közöttük. Yarn a modernebb átgondolása egy jó javascript package manager-nek, amit a Facebook fejlesztői készítettek.

**Kiemelhető külömségek:**

- A telepítendő csomagokat async módon, egyszerre többet képes telepíteni, így felgyorsítva a fejlesztést.

- Biztonságosabb. Minden csomag telepítése előtt végignézi a kód tartalmát és a veszélyes kódot tartalmazó csomagokat nem telepíti.

- Beépített `workspaces` opcióval lehetőséget kapunk több lokális könyvtárat linkelni egy projekthez fejlesztés során, majd ezeket automatán átalakítja repository-ban lévő könyvtárakra.


Dokumentáció és tobábbi érdekességek elérhető itt: [https://yarnpkg.com/](https://yarnpkg.com/)

**Telepítés:** `npm install --global yarn`

## Vite
Vite egy Webpack-hez hasonló javascript build system, azzal a hatalmas nagy külömséggel, hogy míg a webpack minden (lefordított) javascript kódot egy nagy "bundle"-be fűz össze, ami viszonylag rengeteg időt vesz igénybe fejlesztés és fordítás során, addig vite csak azokat a kód részleteket fordítja le amiket a route vagy komponens megkövetel. Javascript helyett Rust-ban írodott, ami majdnem ugyanolyan gyors mint a sima C. Vite-l fel lehet gyorsítani a fejlesztési időt, és rengeteget ad a fejlesztési élményhez.

Vite-t, a VueJs készítője találta ki és fejleszti. Vite több framework-t és template-t támogat, de akár magában is lehet használni statikus fájlok generálásához.

**Dokumentáció és Érdekességek:** [https://vitejs.dev/](https://vitejs.dev/)

**Telepítése:** Nem szükséges telepíteni. Elég majd a jövőben a `yarn create vite` parancsot kiadni és létrehozni a projektet a vite kliensével.

## Vs Code kiegészítők

- ES7+ React/Redux/React-Native snippets
- styled-components-snippets
- Rainbow Brackets
- Emmet
- Auto Import
- Auto Close Tag

## React projekt kezdete