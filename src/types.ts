export interface IBadgeProps {
  text: string
  filled?: boolean
}

export interface IButtonProps {
  text: string
  type: string
  href: string
  filled?: boolean
  icon?: JSX.Element
}

export interface ICardProps {
  indicator?: string
  badge?: IBadgeProps
  image?: string
  title: string
  subtitle?: string
  body: string
  btn: IButtonProps
}
