import Button from '../../ui/Button';

function AccountContent({ title, amount, description }) {
  return (
    <section className="border-1 m-auto mb-8 flex w-4/5 flex-col items-center justify-between border bg-white p-6 text-left">
      <div className="w-full flex-1 ">
        <h3>{title}</h3>
        <p className="m-0 text-5xl font-bold">{amount}</p>
        <p className="m-0">{description}</p>
      </div>
      <Button>View transactions</Button>
    </section>
  );
}

export default AccountContent;
