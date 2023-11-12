import React from "react";
import styled from "styled-components";
import {Paragraph, Title3} from "@/core/application/components/common/Title";
import {useIntl} from "react-intl";

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
    const intl = useIntl()
    return (
        <Container>
            <TopContainer>
                <Background/>
                <Wrapper className='custom-container'>
                    <FulltWidth>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>{intl.formatMessage({id: 'Home.Footer.AboutTitle'})}</TitleFooter>
                                    <ParagraphFooter>{intl.formatMessage({id: 'Home.Footer.About'})}</ParagraphFooter>
                                </FulltWidth>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <FulltWidth>
                                    <TitleFooter>Contacts</TitleFooter>
                                    <ContactList>
                                        <li>{intl.formatMessage({id: 'Home.Footer.Address'})}: Cite sic - A COTE SANTA
                                            LUCIA Douala, Cameroon.
                                        </li>
                                        <li>{intl.formatMessage({id: 'Home.Footer.Address'})}: 1A Hughes Ave, Yaba,
                                            Lagos, Nigeria.
                                        </li>
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
  row-gap: 10px;
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
