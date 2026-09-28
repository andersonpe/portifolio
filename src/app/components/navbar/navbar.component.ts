import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme/theme.service';
import { ThemeEnum } from '../../enums/Theme.enum';

@Component({
  selector: 'apds-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  isScrolled = signal(false);

  isDarkMode = computed(() => this.themeService.theme() === ThemeEnum.DARK);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
 
}
