'use client'
import React from 'react'
import styles from './partners.module.css'
import Image from 'next/image'
import partnersBuilding from '@/public/assets/images/partners-building.png'
import rightBtnArrow from '@/public/assets/icons/rightBtnArrow.svg'
import { useRouter } from 'next/navigation'
import { PageWrapper } from '@/components/PageWrapper'
import channelPartner from '@/public/assets/images/banners/channel-partners.jpg'
import jointVentures from '@/public/assets/images/banners/joint-ventures.jpg'
import PartnersSeo from './PartnersSeo'
export default function Partners() {
  const router = useRouter()
  return (
    <>
      <PageWrapper>
        <PartnersSeo />
        <section className={styles.hero}></section>

        <section className={styles.firstSection}>
          <div className='container'>
            <div className='row'>
              <h2 className={styles.h2 + ' beba'}>Partners</h2>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className={styles.blogCard + ' card'}>

                  <Image className='img-fluid' src={jointVentures} />

                  <div className={styles.cardBody + ' card-body'}>
                    <h1 className={styles.h1 + ' beba'}>Joint Ventures</h1>
                    <p className={styles.cardP}>
                      Joint Venture in real estate is a lucrative business
                      opportunity for land and property owners to create
                      value-appreciating assets and pass it on to the next
                      generation.
                    </p>
                    <a className={styles.cardBtn} href='/partners/joint-ventures' >
                      Know More
                      <Image src={rightBtnArrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className={styles.blogCard + ' card'}>

                  <Image className='img-fluid' src={channelPartner} />

                  <div className={styles.cardBody + ' card-body'}>
                    <h1 className={styles.h1 + ' beba'}>Channel partner</h1>
                    <p className={styles.cardP}>
                      Get ready for a life of growth and prosperity with one of Chennai's largest realty brands. Become a LML channel partner and delight your customers with a wide range of homes to choose from.
                    </p>
                    <a className={styles.cardBtn} href='/partners/channel-partners'>
                      Know More
                      <Image src={rightBtnArrow} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}
