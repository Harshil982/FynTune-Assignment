import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddShop from './Components/Home/AddShop';
import Navbar from './Components/Navbar/Navbar'
import DeleteShop from './Components/DeleteShop';

function App() {
  document.title = "Shop List"
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/addshop" component={AddShop} exact />
        <Route path="/delete-shop" component={DeleteShop} exact />
        <Route path="/" component={Home} exact />
      </Router>
    </>
  );
}

export default App;
