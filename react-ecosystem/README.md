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
## Vs Code kiegészítők
## React projekt kezdete