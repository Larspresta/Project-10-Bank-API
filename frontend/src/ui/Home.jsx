import BankFeatures from './BankFeatures';
import Hero from './Hero';

function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col md:flex-row">
        <h2 className="sr-only">Features</h2>
        <BankFeatures type="chat" />
        <BankFeatures type="money" />
        <BankFeatures type="security" />
      </section>
    </>
  );
}

export default Home;
