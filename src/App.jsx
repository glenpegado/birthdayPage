import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  //useState
  const [profiles, setProfiles] = useState(data);

  //RETURN
  return (
    <main>
      <section className='container'>
        <h3>{profiles.length} birthdays today</h3>
        <List profile={profiles} />
        <button className='btn btn-block' onClick={() => setProfiles([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
