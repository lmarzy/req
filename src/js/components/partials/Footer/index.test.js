import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './index';

const component = shallow(<Footer />);
const tree = renderer.create(<Footer />).toJSON();

describe('<Footer />', () => {
  it('Should render 1 <Footer /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
