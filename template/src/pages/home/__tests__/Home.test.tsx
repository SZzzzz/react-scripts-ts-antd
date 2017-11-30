import { shallow } from 'enzyme';
import Home from '../Home';

describe('test Home component', () => {
    it('render Rate', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('Rate')).toHaveLength(1);
    });
});