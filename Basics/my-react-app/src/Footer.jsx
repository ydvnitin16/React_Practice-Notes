// we can use {} to use JS in the jsx like { new Date().getFullYear() }

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Site Name</p>
    </footer>
  );
}

export default Footer;
