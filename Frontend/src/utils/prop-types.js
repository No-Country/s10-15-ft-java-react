import PropTypes from 'prop-types';

export const CardInfoPropTypes = {
  icon: PropTypes.elementType,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

export const CardStockPropTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  nameProduct: PropTypes.string,
  number: PropTypes.number,
  customClass: PropTypes.string,
};

export const FilterPropTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export const EditUserPropTypes = {
  username: PropTypes.string,
  img: PropTypes.string,
};

export const SearchBarPropTypes = {
  setSearchQuery: PropTypes.func,
};

export const ModalUpdateProductPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    itemCode: PropTypes.string,
    category: PropTypes.string,
    quantityStock: PropTypes.number,
    uniPrice: PropTypes.number,
  }),
  setMostrar: PropTypes.func,
};

export const ProductItemComponentPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    itemCode: PropTypes.string,
    category: PropTypes.string,
    quantityStock: PropTypes.number,
    uniPrice: PropTypes.number,
    pathImage: PropTypes.string,
  }),
};

export const UpdateBtnPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    itemCode: PropTypes.string,
    category: PropTypes.string,
    quantityStock: PropTypes.number,
    uniPrice: PropTypes.number,
  }),
};
