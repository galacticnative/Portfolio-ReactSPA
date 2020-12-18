import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import About from './components/About';
import ContactForm from './components/Contact'
//import Footer from './components/Footer';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
            <About></About>
            <Project></Project>
            <ContactForm></ContactForm>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
