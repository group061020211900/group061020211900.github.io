import * as PropTypes from 'prop-types';
declare function deprecatePropType<T extends PropTypes.Validator<any>>(propType: T, explanation?: string): typeof propType;
declare namespace deprecatePropType {
    var _resetWarned: () => void;
}
export default deprecatePropType;
