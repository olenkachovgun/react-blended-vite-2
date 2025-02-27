import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.search.value);
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        type="text"
        name="search"
        className={style.input}
        placeholder="What do you want to write?"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
