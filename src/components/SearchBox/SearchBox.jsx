import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '.../redux/filtersSlice';
import './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
      className="SearchBox"
    />
  );
};

SearchBox.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBox;
