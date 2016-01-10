import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { SideBarListTest } from 'components/SideBar/SideBarList/SideBarList.js';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<SideBarListTest {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<SideBarListTest {...props} />);
}

describe('(Component) SidebarList', function () {
  let _component, _rendered, _props, _child;
  const defaultProps = {
    coworks: {
      'K5v-PfH70JGOu-09apy' : {
        creator: '0b11b92c-f643-4c4f-8349-748e11fd1d3c',
        descripcion: Object,
        direccion: Object,
        horarios: Object,
        id: '-K5v-PfH70JGOu-09apy',
        nombre: 'Centro Corfo',
        precios: Object,
        servicios: Object,
        telefono: '+56226318200',
        url: 'http://www.corfo.cl/centro-colaborativo/acerca-del-centro-colaborativo'
      }
    },
    selected: '',
    hovered: ''
  };

  it('Should render as a <div>.', function () {
    _component = shallowRenderWithProps(defaultProps);
    expect(_component.type).to.equal('div');
  });

  it('Should not render if no props ar passed', () => {
    renderWithProps(defaultProps);
  });
});
