import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={onChange}
        value={value}
        id="find"
        name="find"
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
