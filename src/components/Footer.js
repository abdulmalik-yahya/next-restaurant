import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.jpg" style={{ objectFit: "cover" }} fill={true} alt="background" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE HAVE THE TWD PIZZA. WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                {/* TODO: save all address in constants and import and map
                Also, the above image is not displaying on small devices */}
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>

                    <p className={styles.text}>
                        #123 ABC XYZ.
                        <br /> XYZ, 12345
                        <br /> (+11) 12345-10000
                    </p>
                    <p className={styles.text}>
                        #123 ABC XYZ.
                        <br /> XYZ, 12345
                        <br /> (+11) 12345-10000
                    </p>
                    <p className={styles.text}>
                        #123 ABC XYZ.
                        <br /> XYZ, 12345
                        <br /> (+11) 12345-10000
                    </p>
                    <p className={styles.text}>
                        #123 ABC XYZ.
                        <br /> XYZ, 12345
                        <br /> (+11) 12345-10000
                    </p>

                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
