import React from 'react'
import styles from './Gallery.module.css'

function Gallery({children}) {
  return (
    <section className={styles.gallery}>
      {children}
      <div className={styles.gallery__marker}></div>
    </section>
  )
}

export default Gallery