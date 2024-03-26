function Button({ children, onClick, type }) {
  const baseStyle =
    'focus:bg-gren-400 my-5 mb-0 inline-block w-full bg-green-600 px-4 py-3  text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-green-500 focus:outline-none';

  const styles = {
    account: baseStyle + ' shadow-[1px_1px_1px_1px_rgba(0,0,0,0.5)]',
    login: baseStyle + ' underline',
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
