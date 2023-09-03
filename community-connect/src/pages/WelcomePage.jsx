import './WelcomePage.css';
import  SearchBar  from '../components/searchBar';

function WelcomePage() {
  return (
    <>
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
