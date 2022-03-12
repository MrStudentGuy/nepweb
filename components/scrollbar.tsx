import styles from '../styles/scrollbar.module.css'

const ScrollBar = () => {
    return (
        <div className={styles.parent}>
            <ul className={styles.list}>
                <li className={styles.logoItem}>Neptune</li>
                <li className={styles.listItem}>Person</li>
                <li className={styles.listItem}>Person</li>
                <li className={styles.listItem}>Person</li>
            </ul>
        </div>
    )
}

export default ScrollBar;