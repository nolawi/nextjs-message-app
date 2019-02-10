import Layout from '../components/Layout';
import Link from 'next/link'

class Index extends React.Component  {

 formSubmit = () => {
      console.log('formSubmit')
    const { name, message } = this.state
    let messageGroup = { name,message}

    fetch('/api/guestbook', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(messageGroup)
    }).then(() => {
    }).catch(() => {
    }).then(() => {
          this.setState({ isSubmitted: true }, function () {
            return setTimeout(function () {
                  return this.setState({ isSubmitted: false });
            }, 9000);
      });
    })
  };

  handleChange = ({target: {value, name}}) => {
     console.log('handleChange')
       this.setState({
      [name]: value
    })
  };
      //initial state
      state = {name: '', message: '',isSubmitted: false,isSuccessful: false};
  render() {
      const {name, message, isSubmitted, isSuccessful} = this.state
    return (
      <Layout>
        <section>
          <h2>Welcome</h2>
          <h5>{}</h5>
          <div>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  className="form-control"
                  type="text"
                  name="message"
                  placeholder="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </div>
              <small className="form-text text-muted ">
                {isSuccessful ? "Submitted" : "Required"}
              </small>
              <input type="submit" className="btn btn-primary mt-4" value="Submit" />
            </form>
          </div>
        </section>
        <div />
      </Layout>
    )
  }
}
export default Index;
