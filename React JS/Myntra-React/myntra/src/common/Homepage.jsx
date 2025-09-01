import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { cartContext } from '../MainContext'; // 👈 Context import
import 'react-responsive-pagination/themes/classic-light-dark.css';
import ResponsivePagination from 'react-responsive-pagination';
import { useNavigate } from 'react-router';

export default function Homepage() {
  const { cart, setCart } = useContext(cartContext); // 👈 Context se cart aur setCart
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [products, setProducts] = useState([]);
  const [sorting, setSorting] = useState('1');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([null, null]);
  const [rating, setRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);
  let navigate=useNavigate();


  // 👈 Local cart state aur useEffect hatao, kyunki context manage karega localStorage
  const getCategories = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((apiResponse) => apiResponse.data)
      .then((finalResponse) => {
        setCategory(finalResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error);
        setLoading(false);
        setError('Failed to fetch categories. Please try again.');
      });
  };

  const getBrand = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((apiResponse) => apiResponse.data)
      .then((finalResponse) => {
        setBrand(finalResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error);
        setLoading(false);
        setError('Failed to fetch brands. Please try again.');
      });
  };

  const getProducts = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://wscubetech.co/ecommerce-api/products.php', {
        params: {
          page: currentPage,
          limit: '12',
          categories: categoryFilter.join(','),
          brands: brandFilter.join(','),
          price_from: priceFilter[0],
          price_to: priceFilter[1],
          discount_from: '',
          discount_to: '',
          rating: rating,
          sorting: sorting,
        },
      })
      .then((apiResponse) => apiResponse.data)
      .then((finalResponse) => {
        setLoading(false);
        setProducts(finalResponse.data);
        setTotalPage(finalResponse.total_pages);
      })
      .catch((error) => {
        console.log('Error:', error);
        setLoading(false);
        setError('Failed to fetch products. Please try again.');
      });
  };

  useEffect(() => {
    getCategories();
    getBrand();
  }, []);

  useEffect(() => {
    getProducts();
  }, [sorting, categoryFilter, brandFilter, priceFilter, rating, currentPage]);

  const getAllChecked = (e, state, setState) => {
    const { value, checked } = e.target;
    setState(checked ? [...state, value] : state.filter((item) => item !== value));
  };

  const addToCart = (product) => {
    const checkItemInCart = cart.find((item) => item.pid === product.id);
    if (checkItemInCart) {
      alert('Already in Cart');
    } else {
      const cartObj = {
        pid: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      };
      setCart([cartObj, ...cart]); // 👈 Context ka setCart use hota hai
      alert('New Item Added to Cart');
    }
      setTimeout(()=> {
          navigate('/cart')
      }, 2000)

  };

  const deleteFromCart = (pid) => {
    setCart(cart.filter((item) => item.pid !== pid)); // 👈 Context ka setCart
    alert('Item Removed from Cart');
  };

  const LoadingCard = () => (
    <div className="rounded-md border border-blue-300 p-4">
      <div className="flex animate-pulse space-x-4">
        <div className="size-10 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[220px] p-4 border-r border-gray-200 flex flex-col gap-6">
        <div className="overflow-y-scroll h-[40vh] border border-gray-200 p-4 rounded">
          <h2 className="text-[16px] font-bold mb-2">CATEGORIES</h2>
          <ul>
            {category.map((item, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={item.slug}
                    onChange={(e) => getAllChecked(e, categoryFilter, setCategoryFilter)}
                    aria-label={`Category: ${item.name}`}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-y-scroll h-[40vh] border border-gray-200 p-4 rounded">
          <h2 className="text-[16px] font-bold mb-2">BRAND</h2>
          <ul>
            {brand.map((item, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={item.slug}
                    onChange={(e) => getAllChecked(e, brandFilter, setBrandFilter)}
                    aria-label={`Brand: ${item.name}`}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-y-scroll max-h-[40vh] border border-gray-200 p-4 rounded">
          <h2 className="text-[16px] font-bold mb-2">PRICE</h2>
          <ul>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setPriceFilter([10, 250])}
                  name="priceFilter"
                  aria-label="Price range: Rs. 10 to Rs. 250"
                />
                Rs. 10 to Rs. 250
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setPriceFilter([250, 500])}
                  name="priceFilter"
                  aria-label="Price range: Rs. 250 to Rs. 500"
                />
                Rs. 250 to Rs. 500
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setPriceFilter([500, 1000])}
                  name="priceFilter"
                  aria-label="Price range: Rs. 500 to Rs. 1000"
                />
                Rs. 500 to Rs. 1000
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setPriceFilter([1000, null])}
                  name="priceFilter"
                  aria-label="Price range: Rs. 1000 and above"
                />
                Rs. 1000 to Rs. Above
              </label>
            </li>
          </ul>
        </div>

        <div className="overflow-y-scroll max-h-[40vh] border border-gray-200 p-4 rounded">
          <h2 className="text-[16px] font-bold mb-2">RATING</h2>
          <ul>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setRating(4)}
                  name="rating"
                  aria-label="Rating: 4 stars and above"
                />
                4★ & above
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setRating(3)}
                  name="rating"
                  aria-label="Rating: 3 stars and above"
                />
                3★ & above
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setRating(2)}
                  name="rating"
                  aria-label="Rating: 2 stars and above"
                />
                2★ & above
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={() => setRating(1)}
                  name="rating"
                  aria-label="Rating: 1 star and above"
                />
                1★ & above
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {error && <div className="text-red-500 p-4 mb-4">{error}</div>}
        <div className="flex justify-end mb-4">
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="border p-2 rounded"
            aria-label="Sort products"
          >
            <option value="0">Sort By: Recommended</option>
            <option value="1">Name: A to Z</option>
            <option value="2">Name: Z to A</option>
            <option value="3">Price: Low to High</option>
            <option value="4">Price: High to Low</option>
            <option value="5">Discounted Price: Low to High</option>
            <option value="6">Discounted Price: High to Low</option>
            <option value="7">Rating: Low to High</option>
            <option value="8">Rating: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {loading ? (
            Array(12)
              .fill()
              .map((_, index) => <LoadingCard key={index} />)
          ) : (
            products.map((product, index) => {
              const checkItemInCart = cart.find((item) => item.pid === product.id);
              return (
                <div className="border p-4 rounded-lg shadow-lg" key={index}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-xl font-bold mt-2">₹{product.price}</p>
                  {checkItemInCart ? (
                    <button
                      onClick={() => deleteFromCart(product.id)}
                      className="bg-red-500 text-white p-2 mt-2 rounded cursor-pointer block mx-auto"
                    >
                      Delete from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 text-white p-2 mt-2 rounded cursor-pointer block mx-auto"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>

        {totalPage > 0 && (
          <div className="mt-10">
            <ResponsivePagination
              current={currentPage}
              total={totalPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}