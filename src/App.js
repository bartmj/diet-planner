import './App.css';
import UserPanel from './components/UserPanel';

function App() {

  const handleClick = () => {
    alert("cool")
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Diet Planner</h1>
        </div>
      </header>
      <section className="container">
        <UserPanel />
      </section>
    </div>
  );
}

export default App;
