export interface BadgeProps {
  item: string;
}

export interface CardProps {
  title: string;
  text: string;
  image: string;
  badges: BadgeProps[];
}
