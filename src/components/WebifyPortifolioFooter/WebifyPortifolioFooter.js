import React from 'react'
import './WebifyPortifolioFooter.scss'
import {TfiFacebook,TfiTwitterAlt,TfiPinterestAlt} from 'react-icons/tfi'

export const WebifyPortifolioFooter = () => {
  return (
    <div className='webify-footer-container'>
        <p className='webify-footer-content'>
        Made with coffee & love by ThemeBubble & Weebfy ©All rights reserved.
        </p>
        <div className='webify-footer-scocial-network-container'>
            <TfiFacebook className='webify-footer-social-network-icon'/>
            <TfiTwitterAlt className='webify-footer-social-network-icon'/>
            <TfiPinterestAlt className='webify-footer-social-network-icon'/>
        </div>
    </div>
  )
}
