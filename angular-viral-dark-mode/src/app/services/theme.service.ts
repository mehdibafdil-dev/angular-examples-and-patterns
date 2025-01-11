import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.darkMode.asObservable();
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Check local storage first
    const storedPreference = localStorage.getItem('prefersDarkMode');
    if (storedPreference !== null) {
      this.setDarkMode(JSON.parse(storedPreference));
      return;
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.setDarkMode(prefersDark.matches);

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      this.setDarkMode(e.matches);
    });
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.next(isDark);
    this.updateTheme(isDark);
    this.persistThemePreference(isDark);
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  private persistThemePreference(isDark: boolean): void {
    localStorage.setItem('prefersDarkMode', JSON.stringify(isDark));
  }

  toggleTheme(): void {
    this.setDarkMode(!this.darkMode.value);
  }
}
