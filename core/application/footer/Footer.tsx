import React from "react";
import styled from "styled-components";
import {Paragraph, Title3} from "@/core/application/components/common/Title";

/**
 * @Project wambi-connect
 * @File Footer.tsx
 * @Path core/application/footer
 * @Author BRICE ZELE
 * @Date 05/10/2023
 */
interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = ({}) => {
    return (
        <Container>
            <TopContainer>
                <Background/>
                <Wrapper>
                    <FulltWidth>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>About</TitleFooter>
                                    <ParagraphFooter>
                                        At Wambi, we are a team of passionate individuals committed to revolutionizing
                                        the way people connect, buy, and sell in the online marketplace industry. Our
                                        vision is to create a global platform that brings buyers and sellers together,
                                        regardless of their geographic location.Behind Wambi is a diverse and talented
                                        team of professionals, each bringing their unique expertise to the table. From
                                        visionary developers to creative designers, meticulous marketers to
                                        customer-centric support staff, we work seamlessly together to deliver a
                                        cutting-edge mobile app that exceeds your expectations.
                                    </ParagraphFooter>
                                </FulltWidth>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>Contacts</TitleFooter>
                                    <ContactList>
                                        <li>Address: Cite sic - A COTE SANTA LUCIA Douala, Cameroon.</li>
                                        <li>Address: 1A Hughes Ave, Yaba, Lagos, Nigeria.</li>
                                        <li>Email: support@wambi.cc</li>
                                    </ContactList>
                                </FulltWidth>
                            </div>
                        </div>
                    </FulltWidth>
                </Wrapper>
            </TopContainer>
            {/*            <BottomFooter>
                <Wrapper>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <FulltWidth>
                                <form noValidate>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <input type='text' className='form-control' placeholder='Name' required/>
                                        </div>
                                    </div>
                                </form>
                            </FulltWidth>
                        </div>
                    </div>
                </Wrapper>
            </BottomFooter>*/}
        </Container>
    )
}

export default Footer
const Container = styled.footer`
  width: 100%;
`

const TopContainer = styled.div`
  width: 100%;
  padding: 200px 0 50px 0;
  position: relative;
  margin-top: -22px;
`
const Background = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-image: url(/images/footer-bg2.png);
`
const BottomFooter = styled.div`
  width: 100%;
  background-color: #252525;
  padding: 50px 0;
`
const Wrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`
const FulltWidth = styled.div`
  width: 100%;
`
const TitleFooter = styled(Title3)`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #fff;
`
const ParagraphFooter = styled(Paragraph)`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
`
const ContactList = styled.ul`
  list-style-type: none;

  li {
    width: 100%;
    margin-bottom: 20px;
    color: #fff;
  }
`
const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 0;
  height: 55px;
  padding: 0 30px;
`
