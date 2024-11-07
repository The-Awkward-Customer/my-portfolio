import styles from "./button.module.css"
import { useRouter } from "next/router";
import { icons } from "../icon/iconsLib";

// button properties
type buttonType ={
    type: "primary" | "secondary" | "tertiary"
}

type buttonSizes ={
    sizes:  "small" | "medium" | "large";
}

type basicButtonProps ={
    type: buttonType
    size: buttonSizes;
    label: string
    route: string | null
    altText: string


}

const BasicButton: React.FC<basicButtonProps> = ({ size, type, label = "Replace me", route}) =>{
    //Props logic to go here

    const buttonTypeClass = styles[`${type}`]
    const buttonSizeClass = styles[`${size}`]
    const buttonClass = `${buttonTypeClass} ${buttonSizeClass}` // combines classes
    const router = useRouter();

function HandleClick() {
    if (route) {
      // If route is provided, use it to navigate
      router.push(route);
    } else {
      console.log("No route provided");
    }
    // If no route is provided, this function will do nothing
    // You can also implement other default actions here if needed
  }


    return(
    <button className={buttonClass} onClick={HandleClick}>
        <p>{label}</p>
    </button>
    )
    
}

export default BasicButton;


type iconButtonProps = {
    size: buttonSizes
    type: buttonType
    iconName:string
    altText: string
    iconColor:string
    route:string |null
}

export const IconButton: React.FC<iconButtonProps> = ({type, size, iconName, iconColor, route})=>{


    const iconButtonTypeClass = styles[`${type}`]
    const iconButtonSizeClass = styles[`${size}`]
    const iconButtonClass = `${iconButtonTypeClass} ${iconButtonSizeClass}` // combines classes
    const router = useRouter();

function HandleClick() {
    if (route) {
      // If route is provided, use it to navigate
      router.push(route);
    } else {
      console.log("No route provided");
    }
    // If no route is provided, this function will do nothing
    // You can also implement other default actions here if needed
  }

  // @ts-expect-error passing name to icon
  const Icon = icons[iconName];
  if (!Icon) return "placeholder"; // Return null or a default icon if not found
    return(<button className={iconButtonClass} onClick={HandleClick}>
        <Icon color = {iconColor}/>
    </button>)
}

