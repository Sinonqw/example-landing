import { Shield } from "lucide-react";

const ProductMockup: React.FC = () => (
  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
        <Shield className="w-10 h-10 text-white" />
      </div>
      <div className="text-gray-700 dark:text-gray-200 font-semibold text-lg transition-colors duration-300">Макет продукту</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 transition-colors duration-300">600 × 400</div>
    </div>
  </div>
);
export default ProductMockup;