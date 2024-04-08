import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';
import './styles/App.css'
import { data } from './data/cards.data'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Gallery>
          {data.map((card) => <Card key={card.id} data={card}/>)}
        </Gallery>
      </div>
    </div>
  );
}

export default App;
