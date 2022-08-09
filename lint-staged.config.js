module.exports = {
  '**/*.ts?(x)': () => ['npm run style:format', 'npm run lint:fix', 'npm run type-check']
}
