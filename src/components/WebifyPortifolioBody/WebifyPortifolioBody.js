import React from 'react'
import { PortfolioImagesData } from '../../constants/PortifolioImagesData'
import './WebifyPortifolioBody.scss'

export const WebifyPortifolioBody = () => {
  return (
    <div className='webify-portifolio-body-container'>
      {
        PortfolioImagesData.map(each => (
          <div key={each.id} className='webify-images-container'>
            <img src={each.image} alt = 'webify images' className='webify-portifolio-images'/>
            </div>
        ))
      }
    </div>
  )
}
