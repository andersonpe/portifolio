import { Injectable, signal, effect, inject, PLATFORM_ID, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeEnum } from '../../enums/Theme.enum';
import { Theme } from '../../types/Theme/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'app-theme';
    private platformId = inject(PLATFORM_ID);
    private injector = inject(Injector);
    theme = signal<Theme>(ThemeEnum.LIGHT);

    constructor() {
        // 2. Só executa se estiver estritamente no Navegador do usuário
        if (isPlatformBrowser(this.platformId)) {
            
            // 3. Define o tema real agora que temos certeza que o localStorage existe
            this.theme.set(this.getInitialTheme());
            
            // 4. Sincroniza as mudanças futuras
            effect(() => {
                const currentTheme = this.theme();
                localStorage.setItem(this.THEME_KEY, currentTheme);
                document.documentElement.setAttribute('data-theme', currentTheme);
            }, { injector: this.injector });
        }
    }

    toggleTheme() {
        this.theme.update(current => current === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK);
    }

    private getInitialTheme(): ThemeEnum {
        // Proteção extra redundante para o compilador
        if (typeof window === 'undefined' || !window.localStorage) {
            return ThemeEnum.LIGHT;
        }

        const savedTheme = localStorage.getItem(this.THEME_KEY) as ThemeEnum;
        
        if (Object.values(ThemeEnum).includes(savedTheme)) {
            return savedTheme;
        }
        
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    }
}

