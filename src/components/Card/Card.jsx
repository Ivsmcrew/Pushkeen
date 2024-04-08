import React from 'react'
import styles from './Card.module.css'

function Card({data}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{data.title}</h2>
      <p className={styles.card__desc}>{data.desc}</p>
    </div>
  )
}

export default Card