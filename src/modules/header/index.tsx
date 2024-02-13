import './styles/style.css';

const Header = () => {
  const navButtons = [
    {
      name: 'Home',
    },
    {
      name: 'Services',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ];

  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <div className="header__nav-box">
        {navButtons.map((button) => (
          <div>
            <button key={button.name} className="header__nav-button">
              {button.name}
            </button>
          </div>
        ))}
        <button>EN</button>
      </div>
    </div>
  );
};

export default Header;
