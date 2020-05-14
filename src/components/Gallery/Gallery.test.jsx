import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery component', () => {
  it('renders Gallery', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
