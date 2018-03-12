import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

const component = shallow(<App />);
const tree = renderer.create(<App />).toJSON();

describe('<App />', () => {
  it('Should render 1 <App /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('Render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
