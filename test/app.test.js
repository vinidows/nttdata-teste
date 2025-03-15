const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'index.html');

const isHTML = (fileContent) => {
  return /<html.*?>.*<\/html>/s.test(fileContent); 
};

test('Verificar se o arquivo é HTML', () => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  expect(isHTML(fileContent)).toBe(true);
});
