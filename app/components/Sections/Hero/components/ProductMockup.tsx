import { Shield } from "lucide-react";

const ProductMockup: React.FC = () => (
  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
        <Shield className="w-10 h-10 text-white" />
      </div>
      <div className="text-gray-700 font-semibold text-lg">Макет продукта</div>
      <div className="text-gray-500 text-sm mt-2">600 × 400</div>
    </div>
  </div>
);
export default ProductMockup;
