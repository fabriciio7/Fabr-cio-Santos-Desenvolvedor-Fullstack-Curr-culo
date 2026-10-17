export interface Skill {
  nome: string;
  categoria: 'Frontend' | 'Backend' | 'Ferramentas' | 'Soft Skills';
  status: 'PRATICANDO' | 'ESTUDANDO' | 'EM USO';
  icone: string;
}
