import styles from "./button.module.css"
import { useRouter } from "next/router";
import { icons } from "../icon/iconsLib";

type ButtonType = {
    type: "primary" | "secondary" | "tertiary"
}

type ButtonSizes = {
    sizes: "small" | "medium" | "large";
}

type ButtonVariant = "text" | "icon";

type ButtonProps = {
    type: ButtonType;
    size: ButtonSizes;
    variant: ButtonVariant;
    route: string | null;
    altText: string;
    // Text-only props
    label?: string;
    // Icon-only props 
    iconName?: string;
    iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    size, 
    type, 
    variant,
    label = "Replace me",
    route,
    iconName,
    iconColor
}) => {
    const buttonTypeClass = styles[`${type}`];
    const buttonSizeClass = styles[`${size}`];
    const buttonClass = `${buttonTypeClass} ${buttonSizeClass}`; // combines classes
    const router = useRouter();

    function handleClick() {
        if (route) {
            // If route is provided, use it to navigate
            router.push(route);
        } else {
            console.log("No route provided");
        }
        // If no route is provided, this function will do nothing
        // You can also implement other default actions here if needed
    }

    if (variant === "icon" && iconName) {
        // @ts-expect-error passing name to icon
        const Icon = icons[iconName];
        if (!Icon) return "placeholder"; // Return null or a default icon if not found
        
        return (
            <button className={buttonClass} onClick={handleClick}>
                <Icon color={iconColor} />
            </button>
        );
    }

    return (
        <button className={buttonClass} onClick={handleClick}>
            <p>{label}</p>
        </button>
    );
}

export default Button;
