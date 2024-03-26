function Hero() {
  return (
    <div className="relative h-[300px] bg-[url('./public/assets/img/bank-tree.jpeg')] bg-cover bg-[center_bottom_2rem] bg-no-repeat md:h-[400px] md:bg-center">
      <section className="relative top-8 mx-auto w-[300px] bg-white p-9 text-left md:absolute md:right-12 md:top-12 md:m-8 md:w-[400px]">
        <h2 className="sr-only">Promoted Content</h2>
        <p className=" m-0 text-base font-bold md:text-2xl">No fees.</p>
        <p className=" m-0 text-base font-bold md:text-2xl">
          No minimum deposit.
        </p>
        <p className=" m-0 text-base font-bold md:text-2xl">
          High interest rates.
        </p>
        <p className=" md:text-m mb-2 text-sm">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}

export default Hero;
