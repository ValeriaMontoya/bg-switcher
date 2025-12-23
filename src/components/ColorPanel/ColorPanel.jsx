import styles from './ColorPanel.module.css';

function ColorPanel(props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.color);
  };

  return (
    <>
      {props.color && (
        <div className={styles.colorPanel}>
          <p className={styles.colorText}>{props.color}</p>
          <button
            className={`${styles.btnSecondary} ${styles.btnIcon}`}
            onClick={handleCopy}
            title="Copy color"
            aria-label="Copy color"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="5"
                width="9"
                height="9"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 10.5V3C3 2.44772 3.44772 2 4 2H10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default ColorPanel;
