
import Image from "next/image"; // for images optimization
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="telephone" width={30} height={30} />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW</div>
                    <div className={styles.text}>111-222-333</div>
                </div>
                <div className={styles.item}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Home</li>
                        <li className={styles.listItem}>Products</li>
                        <li className={styles.listItem}>Menu</li>
                        {/* <Image src="/img/logo.png" alt="logo" width={50} height={50} priority /> */}
                        <li className={styles.listItem}>Events</li>
                        <li className={styles.listItem}>Blog</li>
                        <li className={styles.listItem}>Contact</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <Link href='/cart/'>

                        <div className={styles.cart}>
                            <Image src="/img/cart.png" alt="cart" width={30} height={30} />
                            <div className={styles.counter}>2</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar