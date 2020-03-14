/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react';
import Provider from './Provider';
import Preview from './Preview';
import useTheme from './use-theme';

const App = () => {
  const [h, setH] = useState(0);
  const theme = useTheme(h);

  return (
    <div>
      <div>
       <label>Color Hue ({h})</label>
       <div>
         <input type="range" min="0" max="360" value={h} onChange={(e) => setH(+e.target.value)} />
       </div>
      </div>
      <main>
        <Provider theme={theme}>
          <Preview />
        </Provider>
        <pre>
          <code>{JSON.stringify(theme, null, 2)}</code>
        </pre>
      </main>
    </div>
  )
};

export default App;