import { icons } from "@/components/1Icon/1IconsLib";
import styles from "./Icon.module.css"

type Colors = "primary" | "on-primary" | "green-success";

type IconProps = {
  iconName: string;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  color: string | Colors;
};

export default function Icon({ iconName="placeholder", size, color }: IconProps) {
  const wrapperSize = styles[`${size}`];

  // @ts-expect-error passing name to icon
  const Icon = icons[iconName];
  if (!Icon) return "placeholder"; // Return null or a default icon if not found

  return (
    <div className={wrapperSize}>
      <Icon color={color} />
    </div>
  )}