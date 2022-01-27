import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from './component/HomePage';
import './style/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
