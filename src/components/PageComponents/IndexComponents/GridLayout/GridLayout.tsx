import styles from "./GridLayout.module.css"


interface GridLayoutProps {
    children: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {


    return (
        <section className={styles.gridContainer}>
        <div className={styles.gridLayout}>
            {children}
        </div>
        </section>
    );
}

export default GridLayout;