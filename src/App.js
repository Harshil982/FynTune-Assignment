import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddShop from './Components/Home/AddShop';
import Navbar from './Components/Navbar/Navbar'

function App() {
  document.title = "Shop List"
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/addshop" component={AddShop} exact />
        <Route path="/" component={Home} exact />
      </Router>
    </>
  );
}

export default App;
