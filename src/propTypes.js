import PropTypes from 'prop-types';

export const taskPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Not Started', 'In Progress', 'Complete']).isRequired,
});