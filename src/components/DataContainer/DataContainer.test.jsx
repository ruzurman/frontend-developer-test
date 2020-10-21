import React from 'react';
import { shallow } from 'enzyme';
import {DataContainerPresenter} from "./DataContainer-Presenter";

describe('<DataContainerPresenter />', () => {
    describe('render()', () => {
        const prepareInstance = (props) => <DataContainerPresenter buttonTitle="smth" {...props} />

        it('hides a button in loading state', () => {
            const wrapper = shallow(prepareInstance({ loading: true }));

            expect(wrapper.find('.DataContainer-Button')).toHaveLength(0);
            expect(wrapper.find('.DataContainer-Progress')).toHaveLength(1);
        });

        // There must be more tests but let's assume that for homework that is enough
    });
});
