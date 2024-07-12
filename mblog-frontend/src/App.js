import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CrateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/articles' element={<ArticleListPage/>}/>  
          <Route path='/articles/:articleId' element={<ArticlePage/>}/> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/create-account' element={<CrateAccountPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
