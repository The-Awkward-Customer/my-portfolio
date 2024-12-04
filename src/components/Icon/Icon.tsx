import { icons } from "@/components/Icon/IconsLib";
import styles from "./Icon.module.css"

type Colors = "primary" | "on-primary" | "green-success";

type IconProps = {
  iconName: string;
  size: "sm" | "md" | "lg" | "xl" ;
  color: string | Colors;
};

export default function Icon({ iconName="placeholder", size, color }: IconProps) {
  const wrapperSize = styles[`${size}`];

  // @ts-expect-error passing name to icon
  const Icon = icons[iconName];
  if (!Icon) return "placeholder"; // Return null or a default icon if not found

// maps props.size to px values
const sizeMap: Record<string, number> = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 44,
}
const iconSize = sizeMap[size];

  return (
    <div className={`${styles.iconContainer} ${wrapperSize}`}>
      <Icon color={color} width={iconSize} height={iconSize}/>
    </div>
  )}