import './Footer.module.css';
import solidLogo from '../../assets/solid.svg';

function Footer() {
  return (
    <footer>
      <p>
        Built with
        <img src={solidLogo} alt="SolidJS" title="SolidJS" />
      </p>
    </footer>
  );
}

export default Footer;
