import React from "react";
import styled from "styled-components";
import {Title3} from "@/core/application/components/common/Title";
import {breakpoints} from "@/themes/breakpoints";

/**
 * @Project wambi-connect
 * @File TeamSection.tsx
 * @Path core/application/components/team
 * @Author BRICE ZELE
 * @Date 01/10/2023
 */
interface ITeamItem {
    title: string
    role: string
    image: string
}

interface ITeamSectionProps {

}

const TeamSection: React.FC<ITeamSectionProps> = ({}) => {

    return (
        <Container className='news' id='team'>
            <Background/>
            <Wrapper className='custom-container'>
                <Header>
                    <Title>Meet the team</Title>
                </Header>
                <TeamContainer>
                    <TeamRow>
                        <TeamItem>
                            <TeamItemWrapper>
                                <TeamItemImage
                                    src='https://media.licdn.com/dms/image/C4D03AQEqS5U4xDng2g/profile-displayphoto-shrink_400_400/0/1593542905271?e=1703721600&v=beta&t=WlWyw9_cxiZwej4BMVnPKIU25Ym3SGNHuMt6gcsbQMQ'/>
                                <TeamItemDetailContainer>
                                    <TeamItemDetailWrapper>
                                        <TeamAuthor>Romuald Esdras Wandji</TeamAuthor>
                                        <TeamRole>CEO & Software Developer</TeamRole>
                                        <TeamSocialContainer>
                                            <TeamSocial href='https://nl.linkedin.com/in/romuald-wandji-26649a10'>
                                                <i className='mdi mdi-linkedin'/>
                                            </TeamSocial>
                                        </TeamSocialContainer>
                                    </TeamItemDetailWrapper>
                                </TeamItemDetailContainer>
                            </TeamItemWrapper>
                        </TeamItem>
                        <TeamItem>
                            <TeamItemWrapper>
                                <TeamItemImage
                                    src='https://media.licdn.com/dms/image/C4E03AQGSBWF39c-BMA/profile-displayphoto-shrink_400_400/0/1660568178851?e=1703721600&v=beta&t=TaguC43_B_5H7rpXZZaIyZwhtRYz-njUnzoAT4LVEes'/>
                                <TeamItemDetailContainer>
                                    <TeamItemDetailWrapper>
                                        <TeamAuthor>Brice Zele</TeamAuthor>
                                        <TeamRole>Co-Founder & Software Developer</TeamRole>
                                        <TeamSocialContainer>
                                            <TeamSocial href='#'>
                                                <i className='mdi mdi-twitter'/>
                                            </TeamSocial>
                                            <TeamSocial href='#'>
                                                <i className='mdi mdi-linkedin'/>
                                            </TeamSocial>
                                            <TeamSocial href='#'>
                                                <i className='mdi mdi-web'/>
                                            </TeamSocial>
                                        </TeamSocialContainer>
                                    </TeamItemDetailWrapper>
                                </TeamItemDetailContainer>
                            </TeamItemWrapper>
                        </TeamItem>
                        <TeamItem>
                            <TeamItemWrapper>
                                <TeamItemImage
                                    src='https://media.licdn.com/dms/image/C4E03AQH1fYGN6-5sEw/profile-displayphoto-shrink_400_400/0/1657494103741?e=1703721600&v=beta&t=-Dk-qplDnFbPo-iMo_rOzoy2UAnLcWATyex6ryVWcdg'/>
                                <TeamItemDetailContainer>
                                    <TeamItemDetailWrapper>
                                        <TeamAuthor>Emerson N. Wepngong</TeamAuthor>
                                        <TeamRole>Co-founder & Project Manager</TeamRole>
                                        <TeamSocialContainer>
                                            <TeamSocial
                                                href='https://www.linkedin.com/in/emerson-n-wepngong-md-mph-msc-health-econs-b1a4b69b/'>
                                                <i className='mdi mdi-linkedin'/>
                                            </TeamSocial>
                                        </TeamSocialContainer>
                                    </TeamItemDetailWrapper>
                                </TeamItemDetailContainer>
                            </TeamItemWrapper>
                        </TeamItem>
                        <TeamItem>
                            <TeamItemWrapper>
                                <TeamItemImage
                                    src='https://media.licdn.com/dms/image/C4E03AQHF0NTzz2dASA/profile-displayphoto-shrink_200_200/0/1650208696738?e=2147483647&v=beta&t=DQUK1oqlkpBuLnYlRXBI2_XkuttYJuQ7ZBx6NvsOinw'/>
                                <TeamItemDetailContainer>
                                    <TeamItemDetailWrapper>
                                        <TeamAuthor>Christiane Gouaffo</TeamAuthor>
                                        <TeamRole>Marketing Manager</TeamRole>
                                        <TeamSocialContainer>
                                            <TeamSocial
                                                href='https://www.linkedin.com/in/christiane-gouaffo-00b17a164'>
                                                <i className='mdi mdi-linkedin'/>
                                            </TeamSocial>
                                        </TeamSocialContainer>
                                    </TeamItemDetailWrapper>
                                </TeamItemDetailContainer>
                            </TeamItemWrapper>
                        </TeamItem>
                    </TeamRow>
                </TeamContainer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.section`
  padding: 120px 0;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: url(/images/bg6_2.png);
`

const Wrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;
`
const Title = styled(Title3)`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
`

const TeamContainer = styled.div`
  display: flex;
  margin: 20px auto 0;
  flex-direction: column;
  grid-template-rows: repeat(1, auto);
  grid-auto-rows: 100%;

`
const TeamRow = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const TeamItem = styled.div`
  background-image: none;
  display: flex;
  position: relative;
`
const TeamItemWrapper = styled.div`
  padding: 30px;
  position: relative;
  flex: 1;
  max-width: 100%;
  transition-duration: inherit;
`
const TeamItemImage = styled.img`
  height: 357px;
  margin: 0;
  width: 100%;
  object-fit: cover;
  position: relative;
  display: block;
  vertical-align: middle;
`
const TeamItemDetailContainer = styled.div`
  width: 254px;
  min-height: 166px;
  margin: 0 auto;
  text-align: center;
  display: flex;
`
const TeamItemDetailWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  transition-duration: inherit;
`
const TeamAuthor = styled.h5`
  font-size: 30px;
  font-weight: 400;
  margin: 0;
  color: #fff;
  background-color: #333333;
`
const TeamRole = styled.h4`
  font-size: 18px;
  margin: 20px 0;
`
const TeamSocialContainer = styled.div`
  white-space: nowrap;
  height: 20px;
  min-height: 16px;
  width: 79px;
  min-width: 68px;
  margin: 30px auto 0;
  display: flex;
`
const TeamSocial = styled.a`
  outline-width: 0;
  margin: 0;
  flex: 1;
  height: 100%;
  display: inline-block;

`
export default TeamSection
