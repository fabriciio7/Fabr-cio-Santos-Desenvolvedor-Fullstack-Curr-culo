import { Component, computed, signal } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  // 1. O signal com o filtro selecionado no momento
  filtroAtivo = signal<string>('Todos');

  // 2. As categorias que aparecerão nos botões de filtro
  categorias = ['Todos', 'Frontend', 'Backend', 'Ferramentas', 'Soft Skills'] as const;

  // 3. Sua lista oficial de habilidades com a grade de estudos completa
  todasSkills = signal<Skill[]>([
    // Frontend
    { nome: 'Angular', categoria: 'Frontend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { nome: 'TypeScript', categoria: 'Frontend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { nome: 'HTML5', categoria: 'Frontend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { nome: 'CSS3 / SCSS', categoria: 'Frontend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { nome: 'Tailwind CSS', categoria: 'Frontend', status: 'ESTUDANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { nome: 'JavaScript', categoria: 'Frontend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { nome: 'React', categoria: 'Frontend', status: 'ESTUDANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },

    // Backend
    { nome: 'Node.js', categoria: 'Backend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { nome: 'Express.js', categoria: 'Backend', status: 'ESTUDANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { nome: 'APIs RESTful', categoria: 'Backend', status: 'ESTUDANDO', icone: '🔌' },
    { nome: 'Python', categoria: 'Backend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { nome: 'Banco de Dados (SQL)', categoria: 'Backend', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { nome: 'MariaDB', categoria: 'Backend', status: 'ESTUDANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },

    // Ferramentas
    { nome: 'Git', categoria: 'Ferramentas', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { nome: 'GitHub', categoria: 'Ferramentas', status: 'PRATICANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { nome: 'VS Code', categoria: 'Ferramentas', status: 'EM USO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { nome: 'CLI (Terminal)', categoria: 'Ferramentas', status: 'ESTUDANDO', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { nome: 'Testes Automatizados', categoria: 'Ferramentas', status: 'ESTUDANDO', icone: '🧪' },
    { nome: 'Segurança de Aplicações', categoria: 'Ferramentas', status: 'ESTUDANDO', icone: '🛡️' },
    { nome: 'Inteligência Artificial', categoria: 'Ferramentas', status: 'ESTUDANDO', icone: '🤖' },

    // Soft Skills
    { nome: 'Trabalho em Equipe', categoria: 'Soft Skills', status: 'EM USO', icone: '🤝' },
    { nome: 'Comunicação', categoria: 'Soft Skills', status: 'EM USO', icone: '💬' },
    { nome: 'Resolução de Problemas', categoria: 'Soft Skills', status: 'EM USO', icone: '🧩' },
    { nome: 'Aprendizado Contínuo', categoria: 'Soft Skills', status: 'EM USO', icone: '🚀' },
  ]);

  // 4. O computed que filtra a lista dinamicamente
  skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.todasSkills();
    }
    return this.todasSkills().filter((skill) => skill.categoria === filtro);
  });

  // 5. Função para alterar o filtro
  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
