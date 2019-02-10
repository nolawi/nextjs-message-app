import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const MessageResults = ({ index, result }) =>
   <ol>
    <li key={index + 1}><b>{result.name}</b> <cite>{result.message}</cite></li>
   </ol>

const Guestbook = ({ results }) => {
  return (
    <div>
      <Layout>
        <section className="mb-4">
          <h5>Messages</h5>
          {results && results.length ? (
            <div>
              {results.map((result, index) => <MessageResults  result={result} /> )}
            </div>
          ) : (
            "doh no messages."
          )}
        </section>
      </Layout>
    </div>
  );
};

Guestbook.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/guestbook");
  const { results } = await data.json();
  return {
    results
  };
};

export default Guestbook;

