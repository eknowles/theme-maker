/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import useTheme from '../hooks/use-theme';
import Preview from './preview';
import Provider from './provider';

const App: React.FC = () => {
  const [h, setH] = useState(0);
  const [s, setS] = useState(0);
  const theme = useTheme(h, s);

  return (
    <div>
      <div>
        <label>Color Hue ({h})</label>
        <div>
          <input type="range" min="0" max="360" value={h} onChange={(e) => setH(+e.target.value)} style={{ width: '90%' }} />
        </div>
      </div>
      <div>
        <label>Saturation Seed ({s})</label>
        <div>
          <input type="range" min="0" max="100" value={s} onChange={(e) => setS(+e.target.value)} style={{ width: '90%' }} />
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
  );
};

export default App;
