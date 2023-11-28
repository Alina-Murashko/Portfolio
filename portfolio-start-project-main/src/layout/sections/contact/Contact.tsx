
import { SectionTitle } from "../../../components/SectionTitle";
import { ButtonStyled } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import React, { ElementRef } from "react";
import { S } from "./Contact_Styles";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




export const Contact : React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) {
        return
    }
    emailjs.sendForm('service_lvo12ik', 'template_crjoff8', form.current, '-W0nMYJiYa0kuITOh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
        <S.Contact id="contacts">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Label htmlFor="UserName">Name
                    <S.Field required={true} id="UserName" type="text" name="user_subject" placeholder="Name"/></S.Label>
                    
                    <S.Label htmlFor="UserEmail">Email
                    <S.Field required={true} id="UserEmail" type="email" placeholder="Email" name="user_email"/>
                    </S.Label>
                    
                    <S.Label htmlFor="UserMessage">Message
                    <S.Field required={true} id="UserMessage" as={"textarea"} placeholder="Message" name="user_message"/>
                    </S.Label>
                    <ButtonStyled>Send</ButtonStyled>
                </S.Form>
            </Container>
        </S.Contact>
    )
}

