import { IButtonProps } from '../../types'
import styles from './Button.module.css'

export const Button = ({ text, filled, type, href, icon }: IButtonProps) => {
  const filledClass = filled ? styles.filled : ''

  return (
    <a
      href={href}
      className={`${styles.btn} ${filledClass} ${styles[type.toLowerCase()]}`}
    >
      <span>{text}</span>
      {icon}
    </a>
  )
}
