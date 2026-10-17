import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  nome = signal('Fabrício Santos');
  papel = signal('DEV FULLSTACK');
  status = signal('Disponível para projetos');
  bio = signal(
    'Transformando ideias em interfaces modernas e aplicações escaláveis através de código limpo, arquitetura sólida e aprendizado contínuo.'
  );

  // Foto real do perfil adicionada em public/perfil.jpg
  fotoUrl = signal('perfil.jpg');

  tema = signal<'dark' | 'light'>('dark');

  alternarTema(): void {
    const proximoTema = this.tema() === 'dark' ? 'light' : 'dark';
    this.tema.set(proximoTema);
    document.documentElement.setAttribute('data-theme', proximoTema);
  }
}
