// we cannot give a hr tag outside the header tag because jsx supports one-root rule

function Header() {
  return (
    <header>
      <h1>My Website </h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <hr/>
    </header>
  );
}
export default Header;
