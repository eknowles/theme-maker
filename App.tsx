import React, { useState } from 'react';
import Provider from './Provider';
import generateScheme from './generate-scheme';

const App = () => {
  const [h, setH] = useState(100);

  return (
    <div>
      <div>
       <label>Color Hue ({h})</label>
       <div>
         <input type="range" min="0" max="360" value={h} onChange={(e) => setH(e.target.value)} />
       </div>
      </div>
      <main>
        <Provider>
          <div>
           
          </div>
        </Provider>
        <pre>
          <code>{JSON.stringify(generateScheme(h), null, 2)}</code>
        </pre>
      </main>
    </div>
  )
};

export default App;