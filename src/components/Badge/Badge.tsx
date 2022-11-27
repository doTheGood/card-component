import { IBadgeProps } from '../../types'
import styles from './Badge.module.css'

export const Badge = ({ text, filled }: IBadgeProps) => {
  const filledClass = filled ? styles.filled : ''
  return (
    <small className={`${styles.badge} ${filledClass} uppercase`}>{text}</small>
  )
}
