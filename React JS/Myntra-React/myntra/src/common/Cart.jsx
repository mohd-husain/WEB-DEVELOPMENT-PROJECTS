import React, { useContext } from 'react';
import { cartContext } from '../MainContext';
import { Link } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function Cart() {
    let { cart, setCart } = useContext(cartContext);
    let shippingprice = 100; //Order less than 500


    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Function to remove item from cart
    const removeItem = (pid) => {
        setCart(cart.filter((item) => item.pid !== pid));
    };

    // Function to update quantity
    const updateQuantity = (pid, change) => {
        setCart(
            cart.map((item) =>
                item.pid === pid ? { ...item, qty: Math.max(1, item.qty + change) } : item
            )
        );
    };

    return (
        <section>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cart.length} Items</h2> {/* Dynamic items count */}
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                        </div>

                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <CartRow item={item} key={index} />
                            ))
                        ) : (
                            <div className="text-start mt-5">Your cart is empty.</div>
                        )}

                        <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg
                                className="fill-current mr-2 text-indigo-600 w-4"
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
                            <span className="font-semibold text-sm">₹{totalPrice}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>{totalPrice <= 500 ? "SHIPPING CHARGES - ₹100.00" : "Free Shipping"}</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{totalPrice <= 500 ? totalPrice + shippingprice : totalPrice}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CartRow({ item }) {

    let { cart, setCart } = useContext(cartContext)

    let deletCartItem = () => {
        Swal.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                setCart(cart.filter((obj) => obj.pid != item.pid))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src={item.image} alt={item.name} />
                </div>
                <div className="flex flex-col justify-between ml-5 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    <a onClick={deletCartItem}
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                        Remove
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/5">
                <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => updateQuantity(item.pid, -1)}
                >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={item.qty}
                    onChange={(e) => {
                        const newQty = parseInt(e.target.value) || 1;
                        updateQuantity(item.pid, newQty - item.qty);
                    }}
                />
                <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => updateQuantity(item.pid, 1)}
                >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">₹{item.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">₹{item.price * item.qty}</span>
        </div>
    )
}