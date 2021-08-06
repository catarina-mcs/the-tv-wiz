import './App.css';
import Search from './Search';
import ThemeToggler from './ThemeToggler';
import tvGraphic from './images/tv-light-theme.png';

function App() {
  document.documentElement.className = 'light-theme';

  function clear() {
    document.querySelector('.results-list').style.display = 'none';
    document.querySelector('.search-bar').value = '';
  }

  return (
    <div className='container'>
      <div className='title' onClick={clear}>
        <span className='title-span'>the</span>
        <img className='tv' id='tv' src={tvGraphic} alt='tv'/>
        <span className='title-span'>wiz</span>
      </div>
      <ThemeToggler />
      <Search />
      <p className="credits">
        This product uses the <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDb</a> API but is not endorsed or certified by <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDb</a>.
      </p>
    </div>
  );
}

export default App;