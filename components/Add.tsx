import { useRef } from "react";
import styles from "../styles/Add.module.css";

interface Props {
  buttonTitle: string;
  placeholder?: string;
  onAdd: (value: string) => void;
}

const Add = ({ placeholder, buttonTitle, onAdd }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e?: { preventDefault: VoidFunction }) => {
    if (e && ref.current) {
      e.preventDefault();
      onAdd(ref.current.value);
      ref.current.value = "";
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} ref={ref} placeholder={placeholder} />
      <button className={styles.submit} type='submit'>
        {buttonTitle}
      </button>
    </form>
  );
};

export default Add;
