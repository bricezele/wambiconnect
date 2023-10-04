/**
 * @Project wambi-connect
 * @File Modal.tsx
 * @Path core/application/components/common
 * @Author BRICE ZELE
 * @Date 30/09/2023
 */
import React, {EventHandler, KeyboardEventHandler, PropsWithChildren, useEffect, useState} from "react";
import styled from "styled-components";
import {disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll} from 'body-scroll-lock';
import {breakpoints} from "@/themes/breakpoints";

interface IModalProps {
    toggleModal: () => void
}

const Modal: React.FC<PropsWithChildren<IModalProps>> = ({
                                                             toggleModal,
                                                             children
                                                         }) => {
    const [show, setShow] = useState<boolean>(false)
    const closeModal = () => {
        setShow(!show)
        toggleModal()
    }


    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.keyCode === 27)
                closeModal()
        }
        disableBodyScroll(document.body)
        document.addEventListener('keydown', close)

        return () => {
            document.removeEventListener('keydown', close)
            enableBodyScroll(document.body)
        }
    }, [])

    return (
        <>
            <ModalBackground onClick={closeModal}/>
            <ModalAlign>
                <ModalContent>
                    <CloseButton onClick={closeModal}>
                        <i className='mdi mdi-close'/>
                    </CloseButton>
                    <ModalContentVideo>
                        {children}
                    </ModalContentVideo>
                </ModalContent>
            </ModalAlign>
        </>
    )
}

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(28, 28, 28, 0.19);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: opacity 0.3s ease-out;
`
const ModalAlign = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  max-width: 100%;
`
const ModalContent = styled.div`
  width: 800px;
  height: 100%;
  box-shadow: 0px 100px 80px rgba(184, 184, 184, 0.07),
  0px 25.8162px 19px 4px rgba(178, 178, 178, 0.0456112),
  0px 7.779px 7.30492px rgba(0, 0, 0, 0.035),
  0px 1.48838px 2.0843px rgba(0, 0, 0, 0.0243888);
  border-radius: 20px;
  background: transparent;
  color: #000;
  margin: 0rem 4rem;
`
const ModalContentVideo = styled.div`
  border-radius: 20px;
  z-index: 100;
`
const CloseButton = styled.button`
  cursor: pointer;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
  margin-bottom: 5px;


  i {
    font-size: 30px;
  }
`
export default Modal
