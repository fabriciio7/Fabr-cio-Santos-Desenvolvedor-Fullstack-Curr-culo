import { Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
})
export class ExperienciaComponent {
  experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026 — Presente (1º de 5 Semestres)',
      status: 'EM ANDAMENTO',
      categoria: '🎓 Ensino Superior',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      subtitulo: 'Centro Universitário Ateneu (UniATENEU)',
      descricao:
        'Curso Superior de Tecnologia com foco em fundamentos da computação, engenharia de software, modelagem de banco de dados, arquitetura de sistemas e boas práticas de desenvolvimento de aplicações.',
      tags: ['Ensino Superior', 'ADS', 'Engenharia de Software', 'Banco de Dados'],
    },
    {
      id: 2,
      periodo: '2026 — 2027',
      status: 'EM ANDAMENTO',
      categoria: 'Curso Livre',
      titulo: 'Desenvolvimento Full Stack',
      subtitulo: 'Digital College Brasil',
      descricao:
        'Ampliando conhecimentos em desenvolvimento de aplicações web completas, estrutura frontend com HTML e CSS, desenvolvimento backend e boas práticas de engenharia de software.',
      tags: ['Full Stack', 'Frontend', 'Backend', 'HTML5', 'CSS3'],
    },
    {
      id: 3,
      periodo: 'Novembro / 2025',
      status: 'INÍCIO',
      categoria: 'Imersão',
      titulo: 'Início da Jornada em Programação',
      subtitulo: 'Fundamentos e Prática Contínua',
      descricao:
        'Início dos estudos dedicados em desenvolvimento de software, aprendendo lógica de programação, algoritmos, Python, JavaScript e versionamento profissional de código com Git/GitHub.',
      tags: ['Lógica de Programação', 'Algoritmos', 'Python', 'JavaScript', 'GitHub'],
    },
  ]);
}
