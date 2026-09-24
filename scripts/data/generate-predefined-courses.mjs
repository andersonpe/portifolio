import fs from 'node:fs';
import path from 'node:path';
import frontMatter from 'front-matter';
import GeneratePreDefinedBase from './generate-predefined-base.mjs';

export default class GeneratePreDefinedCourses {

  startBuild() {
    this.#generateCoursesJson();
  }

  #generateCoursesJson() {
    const base = new GeneratePreDefinedBase().generateCertificationsJson(null, 'courses');

    const courses = base.files.map(filename => {
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

    courses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    fs.writeFileSync(base.outputFile, JSON.stringify(courses, null, 2), 'utf-8');
    console.log(`✅ [Courses] ${courses.length} cursos processados e salvos em ${base.outputFile}`);
  }

}