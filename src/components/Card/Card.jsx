import React, { useState } from 'react'
import styles from './Card.module.css'

function Card({data}) {
  const [isActive, setIsActive] = useState(false);

  function clickHandler() {
    setIsActive(!isActive)
  }

  return (
    <div 
      className={isActive ? `${styles.card} ${styles.card_active}` : styles.card} 
      onClick={() => {clickHandler()}}
    >
      <h2 className={styles.card__title}>{data.title}</h2>
      <p className={styles.card__desc}>{data.desc}</p>
    </div>
  )
}

export default Card