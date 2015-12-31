import React                  from 'react';
import TestUtils              from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { AdminDashboardView }           from 'views/admin/admin-dashboard/AdminDashboardView';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<AdminDashboardView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<AdminDashboardView {...props} />);
}

describe('(View) AdminDashboard', function () {
  let _component, _rendered, _props, _spies;

  beforeEach(function () {
    _spies = {};
    _props = {
      actions : bindActionCreators({
        increment : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };

    _component = shallowRenderWithProps(_props);
    _rendered  = renderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });

});
