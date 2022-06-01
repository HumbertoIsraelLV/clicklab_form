import Form from './components/form/form';
import './App.css';
import logo from './assets/img/logo.png';

const App = () => {
  return (
    <div className="App">
      <header className='container row'>
        <div className='col-md-12'>
          <img src={logo} className="rounded logo" alt="logo"/>
        </div> 
      </header>
      <Form/>
    </div>
  );
}

export default App;