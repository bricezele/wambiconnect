/**
 * @Project wambi-connect
 * @File ServiceSection.tsx
 * @Path core/application/components/services
 * @Author BRICE ZELE
 * @Date 18/09/2023
 */
import React from "react";
import styled from "styled-components";
import {Row} from "@/core/application/components/common";
import {Paragraph, Title3} from "@/core/application/components/common/Title";

const ServiceSection: React.FC = ({}) => {

    return (
        <ServiceContainer className='services'>
            <ServiceBackground/>
            <ServiceWrapper>
                <ServiceSubContainer>
                    <Row>
                        <div className='col-lg-4'>
                            <ServiceList className='services-list'>
                                <ServiceDetail className='service-details'>
                                    <span>
                                        <i className="mdi mdi-checkbox-marked-circle-outline"></i>
                                    </span>
                                    <ServiceInfo className='service-info'>
                                        <Title3>Morbi purus diam</Title3>
                                        <Paragraph>
                                            In ipsum nisl, congue et diam eu, suscipit pulvinar nisl. Suspendisse
                                            accumsan ultricies mi gravida hendrerit.
                                        </Paragraph>
                                    </ServiceInfo>
                                </ServiceDetail>
                            </ServiceList>
                        </div>
                        <div className='col-lg-8'>

                        </div>
                    </Row>
                </ServiceSubContainer>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

const ServiceContainer = styled.section`

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

  span {
    font-size: 60px;
  }
`

const ServiceInfo = styled.div`
  width: 85%;
  padding-left: 18px;
`
export default ServiceSection
