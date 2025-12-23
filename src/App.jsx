import { createSignal } from 'solid-js';
import styles from './App.module.css';
import Header from './components/Header/Header';
import ColorPanel from './components/ColorPanel/ColorPanel';
import Footer from './components/Footer/Footer';

function App() {
  const [backgroundColor, setBackgroundColor] = createSignal('');

  const switchBackgroundColor = () => {
    const random = () => Math.floor(Math.random() * 256);
    setBackgroundColor(`rgb(${random()}, ${random()}, ${random()})`);
  };

  return (
    <div class={styles.app} style={{ 'background-color': backgroundColor() }}>
      <Header />

      <button
        class={styles.btnPrimary}
        onClick={switchBackgroundColor}
        title="Switch color"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 'vertical-align': 'middle' }}
        >
          <path
            d="M13.65 2.35C12.2 0.9 10.21 0 8 0 3.58 0 0.01 3.58 0.01 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L9 7h7V0l-2.35 2.35z"
            fill="currentColor"
          />
        </svg>
      </button>

      <ColorPanel color={backgroundColor()} />

      <Footer />
    </div>
  );
}

export default App;
