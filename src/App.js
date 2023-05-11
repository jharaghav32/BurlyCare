import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Middle from './component/Middle';
import Surgery from './component/Surgery';
import Form from './component/Form'
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <Surgery/>
      <Form/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
