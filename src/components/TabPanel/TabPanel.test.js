import React from 'react';
import { shallow } from 'enzyme';

import { TabPanel } from './TabPanel';

describe('<TabPanel />', () => {
    describe('render()', () => {
        it('with activeTab===index', () => {
            let wrapper = shallow(<TabPanel activeTab={0} index={0}>123</TabPanel>);

            expect(wrapper.hasClass('TabPanel')).toStrictEqual(true);
            expect(wrapper.text()).toStrictEqual("123");
            expect(wrapper.hasClass('TabPanel_active')).toStrictEqual(true);
        });

        it('with activeTab!==index', () => {
            let wrapper = shallow(<TabPanel activeTab={1} index={0}><div>123</div></TabPanel>);

            expect(wrapper.hasClass('TabPanel')).toStrictEqual(true);
            expect(wrapper.text()).toStrictEqual("123");
            expect(wrapper.hasClass('TabPanel_active')).toStrictEqual(false);
        });
    });
});
