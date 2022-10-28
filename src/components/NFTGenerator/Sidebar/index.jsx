import React, { useState } from 'react'
import style from './Sidebar.module.css';
import TableIcon from '../../../assets/images/Tabicon.png';
import ImageIcon from '../../../assets/images/Imageicon.png'
export default function Sidebar() {
  const [active, setActive] = useState(0);
  const sidebarMenu = [
    {
      icon: TableIcon,
      text: 'Custom NFT'
    },
    {
      icon: ImageIcon,
      text: 'Image'
    }
  ]
  return (
    <div className={`${style.sidebar}`}>
      {
        sidebarMenu.map((item, index) => {
          return (
            <div key={index} onClick={() => setActive(index)} className={`${style.row}`} style={{ backgroundColor: `${active === index ? '#EAEAEA' : ''}` }}>
              <div className={`${style.column}`}>
                <img src={item.icon} className={`${style.icon}`} />
                <p className={`${style.text}`}>{item.text}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
