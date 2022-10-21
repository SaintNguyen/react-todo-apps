import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About.jsx';
import Comment from './pages/Comment.jsx';
import Analytics from './pages/Analytics.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <TodoList>
      <Routes>
      <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
      </Routes>
      </TodoList>
      </BrowserRouter>
    </div>
  );
}

export default App;
