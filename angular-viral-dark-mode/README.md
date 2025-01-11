# Angular Viral Dark Mode Implementation

A high-performance, accessible dark mode implementation for Angular applications that automatically syncs with system preferences and provides smooth transitions.

## Features

- System theme detection
- Theme preference persistence
- Zero flickering
- Performance optimized
- WCAG 2.1 compliant
- Minimal bundle size impact

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mehdibafdil-dev/angular-examples-and-patterns/tree/main/angular-viral-dark-mode.git
```

2. Install dependencies:
```bash
cd angular-viral-dark-mode
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open http://localhost:4200 in r browser

## Usage

Import the ThemeService in your components:

```typescript
import { ThemeService } from './services/theme.service';

constructor(private themeService: ThemeService) {}
```

Use the theme toggle component:

```html
<app-theme-toggle></app-theme-toggle>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit r changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
