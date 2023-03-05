import styles from '../styles/ProductList.module.css'
import { products } from '../pages/api/products';
import ProductCard from './ProductCard';
const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
            <p className={styles.desc}>
                Order your favourites from City Hut and get 25% Off upto $ 30 on minimum order of $ 120
            </p>
            <div className={styles.wrapper}>
                {products.map((product) =>
                    <ProductCard
                        key={product.title}
                        imgNo={product.imgNo}
                        title={product.title}
                        desc={product.desc}
                        price={product.price}
                    />
                )}

            </div>
        </div>
    )
}

export default ProductList