
import Layout from '../components/Layout';
import Link from 'next/link'


class Index extends React.Component  {



 formSubmit = () => {
     console.log('handleChange')
  }


  handleChange = () => {
     console.log('handleChange')
  }


  render() {
 
    return (

<Layout>


  <section>
     <h2>Welcome</h2>
    <h5>{}</h5>
   <div>

   <form onSubmit={this.formSubmit}>
     <div className="form-group">
            <label htmlFor='name'>Full Name</label>
            <input className="form-control"
              type='text'
              name="name" placeholder="Name"
              onChange={this.handleChange}
           
            />
            </div>
            <div>Error</div>
                 <div className="form-group">
            <label htmlFor='message'>Message</label>
            <input className="form-control"
              type='text'
              name='message'
              placeholder='message'
              onChange={this.handleChange}
            
            />
            </div>
             <div>Error</div>
            <input type='submit' className="btn btn-primary" value='Submit'  />
          </form>
      </div>
     </section>

  </Layout>

    )
  }
}




export default Index;




