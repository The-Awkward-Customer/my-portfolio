import styles from "./Badge.module.css"

type badgeStyles = "default" | "inverse";


interface BadgeProps {
    variant: badgeStyles;
    value: number;
}

const Badge: React.FC<BadgeProps> = ({variant = "default" , value = 1}) => {
    const badgeClass = styles[`${variant}`];

    return(
    <div className = {`${styles.badgeRoot} ${badgeClass}`}>
    <p>{value}</p>
    </div>
    )
}

export default Badge;