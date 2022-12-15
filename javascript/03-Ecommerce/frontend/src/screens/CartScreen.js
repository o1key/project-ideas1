import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import parseRequestUrl from "../utils";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((cart) => cart.product === item.product);
  if (existItem) {
    cartItems = cartItems.map((cart) =>
      cart.product === existItem.product ? item : cart
    );
  } else {
    cartItems = [...cartItems, item];
  }

  setCartItems(cartItems);
};

const CartScreen = {
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      console.log(product);
      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }
    return `<div>Cart Page</div>`;
  },
};
export default CartScreen;
