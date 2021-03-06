import Navbar from '../Navbar';
import { BoxScore } from '../BoxScore'
import './App.css';
import 'bulma/css/bulma.css';

import * as boxScoreData from '../../data/box_score_data.json';
import { fetchMockData } from '../../data/fetchData';
const data = fetchMockData(boxScoreData);

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="columns">
        <div className="column">
          <div className="section py-2">
            <h1 className="title">Sunday, May 27, 2012</h1>
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        <div className="column is-one-fourth">
          <BoxScore boxScore={data} />
        </div>
        <div className="column is-one-fourth">
          <BoxScore boxScore={data} />
        </div>
        <div className="column is-one-fourth">
          <BoxScore boxScore={data} />
        </div>
        <div className="column is-one-fourth">
          <BoxScore boxScore={data} />
        </div>
      </div>
    </div>
  );
}
