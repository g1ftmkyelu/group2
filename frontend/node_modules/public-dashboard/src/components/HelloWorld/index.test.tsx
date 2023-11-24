import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from '.';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
