import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

const component = shallow(<Header siteName="name" tagLine="tagline" />);
const tree = renderer.create(<Header siteName="name" tagLine="tagline" />).toJSON();

describe('<Header />', () => {
  it('Should render 1 <Header /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
