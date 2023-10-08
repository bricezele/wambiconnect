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
                            <div className='col-lg-3 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>About</TitleFooter>
                                    <ParagraphFooter>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </ParagraphFooter>
                                </FulltWidth>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>Contacts</TitleFooter>
                                    <ContactList>
                                        <li>Address: 4578 Marmora Road, Glasgow, D04 89GR</li>
                                        <li>Address: 4578 Marmora Road, Glasgow, D04 89GR</li>
                                        <li>Address: 4578 Marmora Road, Glasgow, D04 89GR</li>
                                        <li>Address: 4578 Marmora Road, Glasgow, D04 89GR</li>
                                    </ContactList>
                                </FulltWidth>
                            </div>
                            <div className='col-lg-6 col-md-12'>

                            </div>
                        </div>
                    </FulltWidth>
                </Wrapper>
            </TopContainer>
            <BottomFooter>
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
            </BottomFooter>
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
