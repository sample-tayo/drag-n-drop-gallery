import Link from "next/link";
import Image from "next/image";
import logo from "../assets/hngLogo.svg";

function Header({ user, logOut }) {
  return (
    <header>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width='188'
          height='21'
          className='mx-auto cursor-pointer'
        />
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
