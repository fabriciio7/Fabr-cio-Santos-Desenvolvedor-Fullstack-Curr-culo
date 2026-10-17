export interface Experiencia {
  id: number;
  periodo: string;
  status: string;
  categoria: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  tags: string[];
}
