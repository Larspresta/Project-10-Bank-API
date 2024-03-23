function Button({ children }) {
  return (
    <button className="focus:bg-gren-400 my-5 mb-0 inline-block w-full bg-green-600 px-4 py-3  text-sm font-semibold uppercase tracking-wide text-white underline transition-colors duration-300 hover:bg-green-500 focus:outline-none">
      {children}
    </button>
  );
}

export default Button;
