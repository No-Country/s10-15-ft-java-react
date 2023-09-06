import PropTypes from 'prop-types';

export const CardInfoPropTypes = {
  icon: PropTypes.elementType.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};

export const CardStockPropTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  nameProduct: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  customClass: PropTypes.string,
};

export const FilterPropTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ProductItemComponentPropTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export const EditUserPropTypes = {
  username: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export const SearchBarPropTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};
