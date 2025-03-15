const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../index.html');
test('Verificar se o arquivo index.html existe', () => {
  console.log('Caminho do arquivo:', filePath); 
  expect(fs.existsSync(filePath)).toBe(true);  
});
