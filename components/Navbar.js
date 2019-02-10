import Link from 'next/link';

const Navbar = () => (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <Link href="/"><a className="navbar-brand">MessageApp</a></Link>
		  <div className="collapse navbar-collapse">
		    <ul className="navbar-nav ">
		      <li className="nav-item">
		        <Link href="/"><a className="nav-link">Home</a></Link>
		      </li>
		      <li className="nav-item">
		        <Link href="/guestbook"><a className="nav-link">Guestbook</a></Link>
		      </li>
     			<li className="nav-item">
		        <Link href="/api/guestbook"><a className="nav-link">Api</a></Link>
		      </li>
		    </ul>

		  </div>
		</nav>
	)

export default Navbar;