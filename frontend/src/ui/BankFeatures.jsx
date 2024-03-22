function BankFeatures({ icontype, headline, text }) {
  const icons = {
    chat: './assets/img/icon-chat.png',
    money: './assets/img/icon-money.png',
    security: './assets/img/icon-security.png',
  };

  const iconPath = icons[icontype];

  return (
    <div>
      <img src={iconPath} alt={`${icontype} icon`} />
      <h3>{headline}</h3>
      <p>{text}</p>
    </div>
  );
}

export default BankFeatures;
