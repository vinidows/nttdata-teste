const fs = require('fs');
const path = require('path');

function isHTML(content) {
  return /<html.*?>.*<\/html>/s.test(content); 
}

test('Verificar se o arquivo é HTML', () => {
  const filePath = path.join(__dirname, '../index.html'); 
  const fileContent = fs.readFileSync(filePath, 'utf8');
  expect(isHTML(fileContent)).toBe(true);
});
