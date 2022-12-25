import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl, reRender } from "../utils";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((cart) => cart.product === item.product);
  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((cart) =>
        cart.product === existItem.product ? item : cart
      );
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdate) {
    // eslint-disable-next-line no-use-before-define
    reRender(CartScreen);
  }
};

const CartScreen = {
  after_render: () => {
    const quantitySelects = document.getElementsByClassName("quantity-select");

    console.log(quantitySelects, "quantitySelects");
    Array.from(quantitySelects).forEach((quantitySelect) => {
      quantitySelect.addEventListener("change", (e) => {
        const item = getCartItems().find(
          (cart) => cart.product === quantitySelect.id
        );
        addToCart({ ...item, quantity: Number(e.target.value) }, true);
      });
    });
  },

  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        quantity: 1,
      });
    }

    const cartItems = getCartItems();
    console.log(cartItems);
    return `
    <div class="content cart">
      <div class="cart-list">
        <ul class="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          ${
            cartItems.length === 0
              ? '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
              : cartItems
                  .map(
                    (item) => `
            <li>
              <div class="cart-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="cart-name">
                <div>
                  <a href="/#/product/${item.product}">
                    ${item.name}
                  </a>
                </div>
                <div>
                  Quantity: 
                  <select class="quantity-select" id="${item.product}">
                  ${[...Array(item.countInStock).keys()].map((x) =>
                    item.quantity === x + 1
                      ? `<option selected value="${x + 1}">${x + 1}</option>`
                      : `<option  value="${x + 1}">${x + 1}</option>`
                  )}  
                  </select>
                  <button type="button" class="delete-button" id="${
                    item.product
                  }">
                    Delete
                  </button>
                </div>
              </div>
              <div class="cart-price">
                $${item.price}
              </div>
            </li>
            `
                  )
                  .join("\n")
          } 
        </ul>
      </div>
      <div class="cart-action">
          <h3>
            Subtotal (${cartItems.reduce((a, c) => a + c.quantity, 0)} items)
            :
            $${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </h3>
          <button id="checkout-button" class="primary fw">
            Proceed to Checkout
          </button>
      </div>
    </div>
    `;
  },
};
export default CartScreen;
