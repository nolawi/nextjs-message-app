import Navbar from './Navbar';
import Head from "next/head";
import css from "../styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = (props) => (
	<div>
	<Head>
		<title> Message App </title>

	</Head>
		<div className="container">
			<Navbar />
			{props.children}
		</div>
	</div>
	);

export default Layout;