import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Home from './Home';

const component = shallow(<Home />);
const tree = renderer.create(<Home />).toJSON();

describe('<Home />', () => {
  it('Should render 1 <Home /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
