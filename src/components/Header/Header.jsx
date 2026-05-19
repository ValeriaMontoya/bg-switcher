import styles from './Header.module.css';

function Header() {
  return (
    <>
      <h1 class={styles.h1}>Background color switcher</h1>
      <p class={styles.p}>Click the button to change the background color</p>
    </>
  );
}

export default Header;
