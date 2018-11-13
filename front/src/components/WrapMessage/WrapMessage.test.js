import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import WrapMessage from './WrapMessage';

describe('WrapMessage component', () => {
  it('should render chldren', () => {
    const wrapper = mount(<WrapMessage
      error={false}
      loaded
      loading={false}
    >
      <div>Im loaded</div>
    </WrapMessage>
    );
    expect(wrapper.html()).to.include('Im loaded');
  })
  it('should render error', () => {
    const wrapper = mount(<WrapMessage
      error
      loaded={false}
      loading={false}
    >
      <div>Im loaded</div>
    </WrapMessage>
    );
    expect(wrapper.html()).to.include('Something went wrong... :(');
  })
  it('should render loading', () => {
    const wrapper = mount(<WrapMessage
      error={false}
      loaded={false}
      loading
    >
      <div>Im loaded</div>
    </WrapMessage>
    );
    expect(wrapper.find('i').length).to.equal(1);
  })
});
