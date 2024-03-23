function BankFeatures({ type }) {
  const icons = {
    chat: './public/assets/img/icon-chat.png',
    money: './public/assets/img/icon-money.png',
    security: './public/assets/img/icon-security.png',
  };

  const content = {
    headline: {
      chat: 'You are our #1 priority',
      money: 'More savings means higher rates',
      security: 'Security you can trust',
    },
    text: {
      chat: `Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes.`,
      money: ` The more you save with us, the higher your interest rate will be!`,
      security: `We use top of the line encryption to make sure your data and money
      is always safe.`,
    },
  };

  const iconPath = icons[type];
  const contentHeadlinePath = content.headline[type];
  const contentTextPath = content.text[type];

  return (
    <div className="flex flex-1 flex-col items-center p-10">
      <img
        className=" h-[140px] rounded-full border-8 border-green-500 p-3"
        src={iconPath}
        alt={`${type} icon`}
      />

      <h3 className="mb-2 py-2 text-xl font-bold text-slate-950">
        {contentHeadlinePath}
      </h3>
      <p className="py-1">{contentTextPath}</p>
    </div>
  );
}

export default BankFeatures;
