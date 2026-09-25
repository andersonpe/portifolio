import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme/theme.service';

@Component({
  imports: [RouterOutlet, CommonModule],
  selector: 'apds-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portifolio');
  protected state = inject(ThemeService); 

  darkThemed = computed(() => this.state.theme() === 'dark'); 

}
