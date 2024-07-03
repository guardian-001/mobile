module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `npx eslint --fix --ignore-path .eslintignore ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
    `npx tsc --noEmit --skipLibCheck --project tsconfig.json`,
  ],
  '**/*.(md|json)': (filenames) => [
    `npx prettier --write --ignore-path .prettierignore ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
  'src/translations/*.(json)': (filenames) => [
    `npx eslint --fix --ignore-path .eslintignore ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
};
