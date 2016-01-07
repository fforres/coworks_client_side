import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import { Loading }  from 'components';

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
  let _component, _rendered, _props, _child;

  beforeEach(function () {
    _child = <h1 className='child'>Child</h1>;
    _props = {
      children : _child,
      store: {'as':12}
    };

    _component = shallowRenderWithProps(_props);
    _rendered  = renderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });
});
