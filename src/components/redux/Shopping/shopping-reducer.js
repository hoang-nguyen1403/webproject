import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "21 UPSIDE DOWN TEE",
      description: "21 UPSIDE DOWN TEE",
      price: 390000,
      image: "/images/MAT_SAU_1.jpg",
    },
    {
      id: 2,
      title: "LEOPARD TEE",
      description: "LEOPARD TEE",
      price: 390000,
      image: "/images/MAT_SAU_3.jpg",
    },
    {
      id: 3,
      title: "BLACK POMEGRANATE TEE",
      description: "BLACK POMEGRANATE TEE",
      price: 390000,
      image: "/images/MAT_SAU_5.jpg",
    },
    {
      id: 4,
      title: "BLACK ROSE TEE",
      description: "BLACK ROSE TEE",
      price: 390000,
      image: "/images/MAT_SAU_3.jpg",
    },
    {
      id: 5,
      title: "PURPLE LINE TEE",
      description: "PURPLE LINE TEE",
      price: 390000,
      image: "/images/MAT_SAU_6.jpg",
    },
    {
      id: 6,
      title: "WHITE BASIC TEE",
      description: "WHITE BASIC TEE",
      price: 280000,
      image: "/images/MAT_SAU_7.jpg",
    },
    {
      id: 7,
      title: "BLACK BASIC TEE",
      description: "BLACK BASIC TEE",
      price: 280000,
      image: "/images/MAT_SAU_7.jpg",
    },
    {
      id: 8,
      title: "BLACK PANT",
      description: "BLACK PANT",
      price: 380000,
      image: "/images/21Salvador4738-Edit.jpg",
    }
    ,
    {
      id: 9,
      title: "BLUE DENIM PANT",
      description: "BLUE DENIM PANT",
      price: 400000,
      image: "/images/21Salvador4748-Edit.jpg",
    }
    
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
