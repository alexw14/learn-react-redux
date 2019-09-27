import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {

  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(routeProps) => (
          <PaletteList
            palettes={seedColors}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path='/palette/:id'
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
