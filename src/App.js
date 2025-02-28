import Lesson from './components/Lesson/Lesson'
import NavBarDefault from './components/NavBar/NavBarDefault/NavBarDefault'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import News from './pages/News/News'

// Импорт глобальных стилей
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <NavBarDefault/>
      <Breadcrumbs/>
      <News/>
    </div>
  );
}

export default App;
