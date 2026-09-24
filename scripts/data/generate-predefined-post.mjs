import fs from 'node:fs';
import path from 'node:path';
import frontMatter from 'front-matter';

export default class GeneratePreDefinedPost {

  startBuild() {
    this.#generatePostsJson();
  }

  #generatePostsJson() {
    const directory = path.join(process.cwd(), 'public', 'posts');
    const outputFile = path.join(directory, 'posts.json');

    if (!fs.existsSync(directory)) {
      console.error(`❌ Diretório não encontrado: ${directory}`);
      return;
    }

    const files = fs.readdirSync(directory).filter(file => file.endsWith('.md'));

    const posts = files.map(filename => {
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
     
      const { attributes } = frontMatter(fileContent);

      const slug = filename.replace(/\.md$/, '');

      return {
        slug,
        title: attributes.title || 'Sem título',
        date: attributes.date || new Date().toISOString(),
        description: attributes.description || '',
        tags: attributes.tags || [],
        ...attributes // repassa qualquer outro atributo customizado
      };
    });

    // 3. Ordena os posts pelo mais recente primeiro
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 4. Salva o posts.json gerado
    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8');
    console.log(`✅ [Blog] ${posts.length} posts processados e salvos em ${outputFile}`);
  }

}