import './App.css';
import UserPanel from './components/UserPanel';
import MetaTags from 'react-meta-tags';

function App() {

  return (
    <div className="App">
      <MetaTags>
        <title>Diet Planner - Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </MetaTags>
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
