const fs = require('fs');
const path = require('path');

function isHTML(content) {
  return /<html.*?>.*<\/html>/s.test(content);
}

test('Verificar se o arquivo é HTML', () => {
  const filePath = path.join(__dirname, '../index.html'); 
  console.log('Lendo o arquivo:', filePath);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('Conteúdo do arquivo:', fileContent);
    expect(isHTML(fileContent)).toBe(true);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    throw new Error('Arquivo não encontrado ou erro ao ler o arquivo.');
  }
});
