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
const sizeMap: Record<Sizes, string> = {
  xs: "16",
  sm: "20",
  md: "28",
  lg: "40",
  xl: "48",
}
const iconSize = sizeMap[size];

  return (
    <div className={`${styles.iconContainer} ${wrapperSize}`}>
      <Icon color={color} width={iconSize} height={iconSize}/>
    </div>
  )}