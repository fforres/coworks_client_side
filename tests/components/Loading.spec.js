import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Loading } from 'components/Loading/Loading.js';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<Loading {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<Loading {...props} />);
}

describe('(Component) Loading', function () {
  let _component, _child, _props, _rendered;

  beforeEach(function () {
    _child = <h1 className='child'>Child</h1>;
    _props = {
      children : _child,
      store: {'as':12}
    };

    _component = shallowRenderWithProps(_props);
    _rendered = renderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });
});
