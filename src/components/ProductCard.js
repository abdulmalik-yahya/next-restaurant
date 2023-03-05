import Image from "next/image";
import styles from '../styles/ProductCard.module.css';
const ProductCard = (props) => {
    const { imgNo, title, desc, price } = props;
    return (
        // TODO: check the console for the images display warnings and link each card to its page using id
        <div className={styles.container}>
            <Image src={`/img/pizza${imgNo}.jpg`} alt={title} width='150' height='150' priority style={{ objectFit: "cover", objectPosition: "center" }} />
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.price}>{price} </span>
            <p className={styles.desc}>{desc} </p>

        </div>
    )
}

export default ProductCard