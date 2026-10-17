import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class ContatoComponent {
  email = 'fabriciosantosbezerra710@gmail.com';
  linkedin = 'https://www.linkedin.com/in/fabríciosantos07';
  github = 'https://github.com/fabriciio7';
  whatsapp = 'https://wa.me/5585996991341?text=Ol%C3%A1%20Fabr%C3%ADcio%2C%20vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar!';

  // Signal para feedback visual de cópia
  copiado = signal(false);

  // Copia o e-mail usando a Clipboard API nativa do navegador
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  }
}
