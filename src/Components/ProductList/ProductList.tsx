import { Product as ProductType } from '../../utils/types'
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = ({products}: Props) => {
  return (
    <div>
      {products?.map(product =>
        <Product product={product} />
      )}
    </div>
  )
}

export default ProductList