const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './index.html');  // Caminho para o arquivo

test('Verificar se o arquivo index.html existe', () => {
  expect(fs.existsSync(filePath)).toBe(true); // Verifica se o arquivo existe
});
