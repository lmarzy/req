import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Container from './Container';

const component = shallow(<Container><div /></Container>);
const tree = renderer.create(<Container><div /></Container>).toJSON();

describe('<Container />', () => {
  it('Should render 1 <Container /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should render a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
