import PiralInstance from './PiralInstance';
import { useTheme } from './lib/stores';

export const App: React.FC = () => {
  const theme = 'sl-theme-' + useTheme((state) => state.theme);

  return (
    <main id="main" className={theme}>
      <PiralInstance />
    </main>
  );
};
