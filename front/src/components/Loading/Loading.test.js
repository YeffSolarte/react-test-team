import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Loading from './Loading';

describe('Loading component', () => {
  it('should render', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find('i').length).to.equal(1);
  })
});
