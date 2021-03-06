import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

const component = shallow(<Header />);
const tree = renderer.create(<Header />).toJSON();

describe('<Header />', () => {
  it('Should render 1 <Header /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
