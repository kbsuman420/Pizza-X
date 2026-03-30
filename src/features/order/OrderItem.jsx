import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";



function OrderItem({ item, isLoadingIngredients, ingredients}) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients, ingredients);

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic
        text-stone-500">
          {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}



OrderItem.propTypes = {
    item: PropTypes.number.isRequired,
    isLoadingIngredients: PropTypes.bool.isRequired,
    ingredients: PropTypes.string.isRequired,

};

export default OrderItem;
