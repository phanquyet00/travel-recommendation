import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiShoonerSailboat} from 'react-icons/gi'
import {Button} from "./Button";
import imageheader from '../components/image/imageheader.jpg'
import {AiOutlineSearch, AiFillCaretDown} from 'react-icons/ai'
import {FaGlassMartiniAlt, FaTheaterMasks, FaTree, FaCameraRetro} from 'react-icons/fa'
import {useState, useEffect} from "react";
import DropDown from "./DropDown";

const NavContainer = styled.div`
  height: 750px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    height: 750px;
    width: 100%;
    z-index: -1;
    overflow: hidden;
  }
`

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  height: 100px;
`

const LinkLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  display: flex;
`

const LogoIcon = styled(GiShoonerSailboat)`
  font-size: 3rem;
`

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`

const MenuItem = styled.li`
   
`


const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0 30px;
  line-height: 30px;
`

const DownMenu = styled(AiFillCaretDown)``

const SearchHeader = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 170px;
  font-size: 4rem;
`
const SearchNote = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  margin: 20px 0;
`

const SearchInpustMenu = styled.div`
  display: flex;
  margin: auto;
  background-color: #fff;
  width: 400px;
  border-radius: 22px;
`

const SearchInpust = styled.input`
  width: 355px;
  height: 37px;
  border: none;
  border-radius: 32px;
  outline: none;
  padding-left: 12px;
  font-size: 18px;
  font-weight: bold;
`

const IconInpust = styled(AiOutlineSearch)`
  font-size: 35px;
  opacity: 0.5;
  cursor: pointer;
`

const SearchList = styled.ul`
  margin-top: 80px;
`

const SearchItem = styled.li`
  display: flex;
  justify-content: center;
`

const LinkSearch = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 33px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 0 20px;
`

const IconRelax = styled(FaGlassMartiniAlt)`
  font-size: 2rem;
  display: flex;
  margin: auto;
color: #fff;
  padding-bottom: 10px;
`

const IconCultural = styled(FaTheaterMasks)`
  font-size: 2rem;
  display: flex;
  margin: auto;
  color: #fff;
  padding-bottom: 10px;
`

const IconSport = styled(FaTree)`
  font-size: 2rem;
  display: flex;
  margin: auto;
  color: #fff;
  padding-bottom: 10px;
`

const IconHistory = styled(FaCameraRetro)`
  font-size: 2rem;
  display: flex;
  margin: auto;
  color: #fff;
  padding-bottom: 10px;
`

const Navbar = () => {

    const [click, setClick]= useState(false)

    const handleClick = () => setClick(!click)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setClick(false);
        } else {
            setClick(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setClick(false);
        } else {
            setClick(false);
        }
    };

    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll )
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <NavContainer>
        <Nav>
            <LinkLogo to='/'>
                <LogoIcon />
                Travel .
            </LinkLogo>
            <MenuList>
                <MenuItem>
                    <MenuLink to='/home'>HOME</MenuLink>
                </MenuItem>
                <MenuItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <MenuLink to='/'>PACKAGES
                    <DownMenu />
                    </MenuLink>
                    {click && <DropDown clone={setClick}/>}
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'>SHOP</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'>ABOUT US</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'>PAGES</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'>NEWS</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'>CONTACT US</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/'><Button>BOOK NOW</Button></MenuLink>
                </MenuItem>
            </MenuList>
        </Nav>
            <SearchHeader>Search your next Holiday</SearchHeader>
            <SearchNote>CHECK OUR BEST PROMOTIONS</SearchNote>
            <SearchInpustMenu>
                <SearchInpust type="text" placeholder='Searching...'></SearchInpust>
                <IconInpust />
            </SearchInpustMenu>
            <SearchList>
                <SearchItem>
                    <LinkSearch to='/'>
                    <IconRelax />
                        RELAX
                    </LinkSearch>
                    <LinkSearch to='/'>
                        <IconCultural />
                        CULTURAL
                    </LinkSearch>
                    <LinkSearch to='/'>
                        <IconSport />
                        SPORT
                    </LinkSearch>
                    <LinkSearch to='/'>
                        <IconHistory />
                        HISTORY
                    </LinkSearch>
                </SearchItem>
            </SearchList>
            <img src={imageheader} style={{transform: `translateY(${offsetY * 0.3}px)`}}/>
        </NavContainer>
    )
}

export default Navbar