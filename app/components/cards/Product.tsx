import { ProductType } from "@/app/types/data";
import { priceFormatWithCurrency } from "@/app/utils/price";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="rounded-xl border-solid border-2 border-slate-800 overflow-hidden">
      <img src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-lg">{product.name}</h3>
        <div>
          <span className="text-gray-500">
            {priceFormatWithCurrency(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
