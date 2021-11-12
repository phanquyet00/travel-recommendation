import styled from "styled-components";
import footer from './image/footer.jpg'
import {Button} from "./Button";
import {GiShoonerSailboat} from 'react-icons/gi'
import {FaTwitter, FaFacebookSquare, FaYoutube} from 'react-icons/fa'
import {FooterData1, FooterData2, FooterData3} from './data/FooterData'
import {Link} from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'

const Content = styled.div`
  background-image: url(${footer});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
`

const FooterContent = styled.div`
  padding: 4rem 4rem;
`

const FooterSearch = styled.div`
  padding: 0 16rem 2rem 16rem;
`

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Search = styled.div`
  display: flex;
`

const SearchInpust = styled.input`
  width: 300px;
  outline: none;
  border: none;
  border-radius: 34px;
  padding-left: 14px;
`

const SearchBtn = styled.div`
  margin-left: 1rem;
`

const FooterFooter =styled.div`
  width: 1100px;
  background-color: #fff;
  margin: auto;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
`

const FooterLeft =styled.div`
    p {
      opacity: 0.5;
      margin-bottom: 2rem;
    }
`

const Logo =styled.div`
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 900;
`

const IconLogo =styled(GiShoonerSailboat)`
  font-size: 2rem;
`

const IconFacebook =styled(FaFacebookSquare)`
  font-size: 2rem;
`

const IconYoutube =styled(FaYoutube)`
  font-size: 2rem;
  margin-left: 1rem;
`

const IconTwiter =styled(FaTwitter)`
  font-size: 2rem;
  margin-left: 1rem;
`

const FooterRight =styled.div`
  margin-left: 2rem;
`

const RightList =styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const RightItem =styled.div`
    h4 {
      margin-bottom: 2rem;
      font-weight: 900;
    }
`

const RightLeft =styled(Link)`
  display: block;
  text-decoration: none;
  margin: 12px 0;
  color: #000;
  font-weight: bold;
  opacity: 0.5;
`

const IconRight =styled(IoIosArrowForward)`
  margin-right: 8px;
  color: #000;
`

const FooterBotton =styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #22a6d6;
  height: 40px;
  line-height: 40px;
  width: 1100px;
  margin: auto;
  padding: 0 2rem;
  p:nth-child(1) {
    color: #fff;
  }
`

const Footer = () => {
    return (
        <Content>
            <FooterContent>
                <FooterSearch>
                    <p>KEEP IN TOUCH</p>
                    <SearchWrapper>
                        <h1>Travel with us</h1>
                        <Search>
                            <SearchInpust></SearchInpust>
                            <SearchBtn><Button>SEND</Button></SearchBtn>
                        </Search>
                    </SearchWrapper>
                </FooterSearch>
                <FooterFooter>
                    <FooterLeft>
                        <Logo>
                            <IconLogo />
                            travel .
                        </Logo>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Curabitur ut diam et nibh condimentum venenatis eu ac<br /> magnasin. Quisque interdum est mauris, eget ullamcorper.</p>
                        <IconFacebook />
                        <IconYoutube />
                        <IconTwiter />
                    </FooterLeft>
                    <FooterRight>
                        <RightList>
                            <RightItem>
                                <h4>OUR AGENCY</h4>
                                {FooterData1.map((item) => (
                                    <RightLeft to={item.path}>
                                        <IconRight />
                                        {item.title}
                                    </RightLeft>
                                ))}
                            </RightItem>
                            <RightItem>
                                <h4>OUR AGENCY</h4>
                                {FooterData2.map((item) => (
                                    <RightLeft to={item.path}>
                                        <IconRight />
                                        {item.title}
                                    </RightLeft>
                                ))}
                            </RightItem>
                            <RightItem>
                                <h4>OUR AGENCY</h4>
                                {FooterData3.map((item) => (
                                    <RightLeft to={item.path}>
                                        <IconRight />
                                        {item.title}
                                    </RightLeft>
                                ))}
                            </RightItem>
                        </RightList>
                    </FooterRight>
                </FooterFooter>
                <FooterBotton>
                    <p>THE BEST WORDPRESS TRAVEL THEME</p>
                    <p>COPYRIGHT NICDARK THEMES 2018</p>
                </FooterBotton>
            </FooterContent>
        </Content>
    )
}

export default Footer