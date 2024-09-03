import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

  return (
    <motion.div
      className="max-w-5xl mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full divide-y divide-gray-700 ">
        <thead className="bg-gray-700 ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              Product Item
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              In Stock
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              Featured
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium tracking-wider text-center text-gray-300 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="text-center bg-gray-800 divide-y divide-gray-700">
          {products?.map((product) => (
            <tr key={product._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">
                  ${" "}
                  {product.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{product.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">
                  {product.countInStock.toLocaleString("en-US")}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => toggleFeaturedProduct(product._id)}
                  className={`p-1 rounded-full ${
                    product.isFeatured
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-600 text-gray-300"
                  } hover:bg-yellow-500 transition-colors duration-200`}
                >
                  <Star className="w-5 h-5" />
                </button>
              </td>
              <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
export default ProductsList;
