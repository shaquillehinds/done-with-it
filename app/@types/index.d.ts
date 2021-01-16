type Color = "primary" | "secondary" | "black" | "white" | "light" | "dark" | "medium" | "danger" | "yellow";

interface ListItemIconProps {
  name: icons;
  color?: Color;
  size?: number;
  backgroundColor?: Color;
}

interface ListItemProps {
  id?: number | string;
  listItemImage?: string;
  listItemTitle: string;
  listItemSubTitle?: string;
  itemIcon?: ListItemIconProps;
  onPress?(): void;
  renderRightActions?(): ReactNode;
}

interface ListingProps extends ListItemProps {
  image: string;
  title: string;
  subTitle: string;
}

interface AppButtonProps {
  title: string;
  color: Color;
  onPress(): void;
}

interface Message {
  description: string;
  id: string | number;
  image: string;
  title: string;
}
