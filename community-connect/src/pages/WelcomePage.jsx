import './WelcomePage.css';
import  SearchBar  from '../components/searchBar';
function WelcomePage() {
  return (
    <>
    <nav className='navBar'>
        <div className='navBarLink'><a href="">home</a></div>
        <div className="navBarLink"><a href="/events">eventi</a></div>
    </nav>
    <div className = "background">      
      <div className='titolo'>
        <h1>
          Community Connect
        </h1>
      </div>
      <SearchBar />
    </div>
    </>
  );
}

export default WelcomePage;
