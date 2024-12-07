import { icons } from "@/components/Icon/IconsLib";
import styles from "./Icon.module.css"

type Colors = "primary" | "on-primary" | "green-success";
type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

type IconProps = {
  iconName: string;
  size: Sizes;
  color: string | Colors;
};

export default function Icon({ iconName="placeholder", size, color }: IconProps) {
  const wrapperSize = styles[`${size}`];


  const Icon = icons[iconName];
  if (!Icon) return "placeholder"; // Return null or a default icon if not found

// maps props.size to px values
const sizeMap: Record<string, string> = {
  xs: "16px",
  sm: "20px",
  md: "28px",
  lg: "40px",
  xl: "48px",
}
const iconSize = sizeMap[size];

  return (
    <div className={`${styles.iconContainer} ${wrapperSize}`}>
      <Icon color={color} width={iconSize} height={iconSize}/>
    </div>
  )}