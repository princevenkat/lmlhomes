import React from 'react'
import styles from '@/app/page.module.css'

const ArrowAnimate = () => {
  return (
    <>
    <div className={`${styles.up} ${styles.animeArrow}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={styles.otherArrow}
                      >
                        <path
                          d="M3.51514 8.46495L12.0001 16.95L20.4851 8.46495L19.0711 7.04995L12.0001 14.122L4.92914 7.04995L3.51514 8.46495Z"
                          fill="white"
                          fillOpacity="0.13"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={styles.otherArrow}
                      >
                        <path
                          d="M3.51514 8.46495L12.0001 16.95L20.4851 8.46495L19.0711 7.04995L12.0001 14.122L4.92914 7.04995L3.51514 8.46495Z"
                          fill="white"
                          fillOpacity="0.13"
                        />
                      </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3.51514 8.46495L12.0001 16.95L20.4851 8.46495L19.0711 7.04995L12.0001 14.122L4.92914 7.04995L3.51514 8.46495Z"
                            fill="white"
                          />
                        </svg>

                    </div>
    </>
  )
}

export default ArrowAnimate