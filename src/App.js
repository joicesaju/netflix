
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Row from './components/Row';
import requests from './request';
import Home from './components/Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Realhome from './components/Realhome';
import Moviedetails from './components/Moviedetails';
import Test from './components/Test';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
<Router>
  <Routes>
    <Route path='/' element={<Realhome/>}/>
    <Route path='/md' element={<Moviedetails/>}/>
    <Route path='/test' element={<Test/>}/>
  </Routes>
</Router>

{/* <Banner/> */}
 



      {/* <Row
      title="NetflixOrginals"
      fetchUrl={requests. fetchTrending} />

      <Home title="Popular on Netflix"
      fetchUrl={requests. fetchTrending}/>

      
      <Home title="  ActionMovies"
      fetchUrl={requests.  fetchActionMovies}/>

    <Home title=" TopRated"
      fetchUrl={requests.  fetchTopRated}/>
 

     <Home title="HorrorMovies"
      fetchUrl={requests. fetchHorrorMovies}/>


      <Home title="NetflixOriginals"
      fetchUrl={requests.  fetchNetflixOriginals}/>    */}
      </header>



    </div>
  );
}

export default App;
