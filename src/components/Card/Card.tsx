import { ICardProps } from '../../types'
import { Badge } from '../Badge'
import { Button } from '../Button'
import styles from './Card.module.css'

export const Card = ({
  body,
  btn,
  subtitle,
  title,
  badge,
  image,
  indicator,
}: ICardProps) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {indicator && <small className={styles.indicator}>{indicator}</small>}
      {badge && <Badge text={badge.text} filled={badge.filled} />}
      {image && <img className={styles.image} src={image} alt="random" />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.body}>{body}</p>
      <Button
        filled={btn.filled}
        href={btn.href}
        type={btn.type}
        text={btn.text}
        icon={btn.icon}
      />
    </article>
  )
}
