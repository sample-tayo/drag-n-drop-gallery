import Link from "next/link";

function Header({ user, logOut }) {
  return (
    <header>
      <Link href='/'>
        <img src='/assets/hnglogo.svg' alt='logo' />
      </Link>
      {user ? (
        // If user is authenticated, show Sign Out button
        <button onClick={logOut}>Sign Out</button>
      ) : (
        // If user is not authenticated, show Sign In button
        <Link href='/signin'>
          <button>Sign In</button>
        </Link>
      )}
    </header>
  );
}

export default Header;
