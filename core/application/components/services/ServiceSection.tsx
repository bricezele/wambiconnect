/**
 * @Project wambi-connect
 * @File ServiceSection.tsx
 * @Path core/application/components/services
 * @Author BRICE ZELE
 * @Date 18/09/2023
 */
import React from "react";
import {Paragraph, Title3} from "@/core/application/components/common/Title";
import {Assets} from "@/core/application/constants/assets";
// @ts-ignore
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import LinkWrapper from "@/core/application/components/common/LinkWrapper";
import {breakpoints} from "@/themes/breakpoints";
import {FormattedMessage} from "react-intl";

interface IServiceProps {
    icon: string
    title: string
    description: string
}

interface IServiceSectionProps {
    title: string
    description: string
    services: IServiceProps[]
}

const ServiceSection: React.FC<IServiceSectionProps> = ({
                                                            title,
                                                            description, services
                                                        }) => {

    return (
        <ServiceContainer className='services'>
            <ServiceBackground/>
            <ServiceWrapper className='custom-container'>
                <ServiceSubContainer>
                    <Row>
                        <div className='col-lg-4' style={{display: 'flex', alignItems: 'center'}}>
                            <ServiceList className='services-list'>
                                {
                                    services.map((service, index) => (
                                        <Fade bottom duration={700} delay={index * 100} key={index}>
                                            <ServiceDetail className='service-details'>
                                        <span>
                                            <i className={service.icon}></i>
                                        </span>
                                                <ServiceInfo className='service-info'>
                                                    <ServiceInfoTitle><FormattedMessage id={service.title}/>
                                                    </ServiceInfoTitle>
                                                    <Paragraph><FormattedMessage id={service.description}/></Paragraph>
                                                </ServiceInfo>
                                            </ServiceDetail>
                                        </Fade>
                                    ))
                                }
                            </ServiceList>
                        </div>
                        <Fade right>
                            <div className='col-lg-8'>
                                <Row>
                                    <ServiceImageContainer>
                                        <ServiceImageWrapper className='service-img'>
                                            <img src={Assets.images.shape2}/>
                                        </ServiceImageWrapper>
                                    </ServiceImageContainer>
                                    <ServiceMainInfoWrapper>
                                        <ServiceInfoTitle3><FormattedMessage id={title}/> </ServiceInfoTitle3>
                                        <ServiceInfoDescription><FormattedMessage
                                            id={description}/></ServiceInfoDescription>
                                    </ServiceMainInfoWrapper>
                                </Row>
                            </div>
                        </Fade>
                    </Row>
                </ServiceSubContainer>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

const ServiceContainer = styled.section`
  position: relative;
  padding: 0;
  margin-top: 0;

  @media ${breakpoints.tabletL} {
    padding: 80px 0 20px 0;
    margin-top: -300px;
  }
`

const ServiceBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: url(/images/bg4_2.png);
`

const ServiceWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const ServiceSubContainer = styled.div`
  width: 100%;
`

const ServiceList = styled.div`
  width: 100%;
  padding-top: 60px;
`
const ServiceDetail = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;

  span {
    font-size: 60px;
    width: 90px;
    height: 90px;
    border-radius: 100px;
    text-align: center;
    display: inline-block;
    line-height: 90px;
    box-shadow: -5px 7px 11px rgba(0, 0, 0, 0.35);
    background-color: #007afd;
  }
`

const ServiceInfo = styled.div`
  width: 85%;
  padding-left: 18px;
`

const ServiceInfoTitle = styled(Title3)`
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 700;
`

const ServiceImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${breakpoints.tabletL} {
    justify-content: space-between;
  }
`

const ServiceImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tabletL} {
    flex-direction: row;
  }

  @media ${breakpoints.tablet} {
    width: 60%;
  }

  img {
    width: 100%;
  }
`

const ServiceMainInfoWrapper = styled.div`
  top: 50%;
  right: 0;
  position: static;
  width: 100%;
  transform: inherit;

  @media ${breakpoints.tabletL} {
    width: 58%;
    position: absolute;
    transform: translateY(-50%);
    padding-top: 70px;
  }
`

const ServiceInfoTitle3 = styled(Title3)`
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 30px;
  color: #fff;
`

const ServiceInfoDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
`

const Link = styled(LinkWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tabletL} {
    flex-direction: row;
  }
`
export default ServiceSection
