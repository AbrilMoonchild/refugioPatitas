import React from 'react'
import {MdPets} from 'react-icons/md'
import {BsFacebook,BsTwitter,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import '../styles/Footer.css'
function Footer() {
  return (
    <footer>
        
  <ul>
  <div><MdPets size={40} ></MdPets><h4>PATITAS AMIGAS 2022</h4></div>
    <li><BsTwitter size={30}></BsTwitter></li>
    <li><BsFacebook size={30}></BsFacebook></li>
    <li><BsInstagram size={30}></BsInstagram></li>
    <li><BsWhatsapp size={30}></BsWhatsapp></li>
    <li>
      
    </li>
  </ul>
    </footer>
  )
}

export {Footer}