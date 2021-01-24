import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../src/components/Library/molecules/Layout';

describe('Layout', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <Layout>
                <div>I render inside</div>
            </Layout>
        );
    });

    it('renders content inside', () => {
        expect(wrapper.containsMatchingElement(<div>I render inside</div>));
    });

    it('has a footer', () => {
        expect(wrapper.containsMatchingElement(<footer />));
    });

    it('includes the content in a main element', () => {
        expect(
            wrapper.containsMatchingElement(
                <main>
                    <div>I render inside</div>
                </main>
            )
        );
    });
});
