import Link from "next/link";

function Header({ user, logOut }) {
  return (
    <header>
      <Link href='/'>
        <img src='/assets/hnglogo.svg' alt='logo' />
      </Link>
      {user ? (
        <button onClick={logOut}>Sign Out</button>
      ) : (
        <Link href='/signin'>
          <button>Sign In</button>
        </Link>
      )}
    </header>
  );
}

export default Header;
