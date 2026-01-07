module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nouvelle fonctionnalité
        'fix',      // Correction de bug
        'docs',     // Documentation
        'style',    // Formatage, point-virgules manquants, etc.
        'refactor', // Refactoring du code
        'perf',     // Amélioration des performances
        'test',     // Ajout de tests
        'build',    // Changements du système de build
        'ci',       // Changements de CI
        'chore',    // Autres changements (mise à jour de dépendances, etc.)
        'revert',   // Revert d'un commit précédent
      ],
    ],
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};

