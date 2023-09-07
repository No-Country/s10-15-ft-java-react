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

export const EditUserPropTypes = {
  username: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export const SearchBarPropTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export const ModalUpdateProductPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    itemCode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantityStock: PropTypes.number.isRequired,
    uniPrice: PropTypes.number.isRequired,
  }).isRequired,
  setMostrar: PropTypes.func.isRequired,
};

export const ProductItemComponentPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    itemCode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantityStock: PropTypes.number.isRequired,
    uniPrice: PropTypes.number.isRequired,
    pathImage: PropTypes.string.isRequired,
  }).isRequired,
};

export const UpdateBtnPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    itemCode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantityStock: PropTypes.number.isRequired,
    uniPrice: PropTypes.number.isRequired,
  }).isRequired,
};
