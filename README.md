# Tech App - Monorepo

Workspace monorepo pour applications tech avec packages partagés.

## Structure

- `apps/` - Applications (Expo, Next.js, etc.)
- `packages/` - Packages partagés (features, UI, utils, etc.)

## Hoisting des dépendances

Le workspace est configuré pour mutualiser les dépendances communes entre toutes les apps via le hoisting pnpm.

- **React et React-DOM sont hoistés** : Une seule version (19.2.3) est installée dans `node_modules` à la racine
- **TypeScript est hoisté** : Une seule version (5.9.2) est installée dans `node_modules` à la racine
- **Configuration** :
  - `pnpm.overrides` dans `package.json` racine force une version unique pour chaque dépendance
  - `.npmrc` configure le hoisting avec `public-hoist-pattern`

Cela permet d'économiser de l'espace disque et d'éviter les conflits de versions.

## Prérequis

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Installation

```bash
pnpm install
```

## Scripts

- `pnpm dev` - Lance toutes les apps en mode développement
- `pnpm build` - Build tous les packages puis toutes les apps
- `pnpm clean` - Nettoie tous les node_modules

## Ajouter une nouvelle app

```bash
cd apps
# Créer votre app (expo init, create-next-app, etc.)
# Puis ajouter le package.json avec le nom approprié
```

## Ajouter un nouveau package

```bash
cd packages
mkdir mon-package
cd mon-package
pnpm init
# Configurer le package.json avec le nom @tech-app/mon-package
```

## Utiliser un package dans une app

Dans le `package.json` de votre app :

```json
{
  "dependencies": {
    "@tech-app/mon-package": "workspace:*"
  }
}
```
