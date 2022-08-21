import React from 'react'
import {ReactNavbar} from  "overlay-navbar"
import logo from "../../../Images/logo.png"
import { FaSearch, FaUserCircle} from "react-icons/fa"
import {BsCart4} from "react-icons/bs"


const options = {
  burgerColor: "#eb4034",
  burgerColorHover: "grey",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor:"rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover:"#eb4034",
  cartIconMargin:"1vmax",
  profileIcon: true,
  cartIcon : true,
  searchIcon : true,
  ProfileIconElement : FaUserCircle,
  CartIconElement : BsCart4,
  SearchIconElement : FaSearch
}


const Header = () => {
  return <ReactNavbar {...options} />


}

export default Header