import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme/theme.service';
import { Meta } from '@angular/platform-browser';

@Component({
  imports: [RouterOutlet, CommonModule],
  selector: 'apds-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected state = inject(ThemeService); 
 

  protected readonly title = signal('d');

  darkThemed = computed(() => this.state.theme() === 'dark'); 

}
