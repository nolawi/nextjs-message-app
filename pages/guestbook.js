import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Guestbook = (results) => (
 <Layout>
	<section>
 	<h3>GuestBook</h3>

 </section>
 </Layout>
);

// Guestbook.getInitialProps = async function() {
//   const result = await fetch
//   ('http://localhost:3000/api/guestbook')
//  const data = await result.json();
//   console.log(data);
//   const { results } = data
//  return {
//      results
//  };



export default Guestbook;