
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Reviews from './components/Reviews/Reviews';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
