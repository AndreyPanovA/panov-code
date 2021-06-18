import React from 'react'
import t from "../../assets"
import styled, { css } from 'styled-components'
import cls from "./style.module.css";
const Container = styled.div`
    padding: 10px 20px;
    max-width: 1170px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    ${({center, cloumn}) =>
    css`
      justify-content: ${center ? "center":"flex-start"};
    `};
`
const Div = styled.div`
    padding: 10px;
`
const CardItemContainer = styled.div` 
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:  5px 5px 39px #5a5a5a,
                -5px -5px 39px #ffffff;
                overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    position: relative;
    width: 360px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);
    overflow: hidden;
    margin-bottom: 25px;
    &::before {
        content: '';
        position: absolute;
        height: 400px;
        width: 250px;
        border-radius: 50px;
        transform: rotate(45deg);
        background: linear-gradient(-90deg, #785ad6, #4aabce);
        top: -55%;
        left: 45%;
        z-index: -10;
        opacity: 0.5;
    }
    /* max-width: 50vw; */
    /* min-width: ; */
`
const Img = styled.img` 
    width: 100%;
    height: 100%;
    object-fit: cover;	
    opacity: 1;
        position: absolute;
        height: 400px;
        width: 250px;
        border-radius: 50px;
        transform: rotate(45deg);
        background: linear-gradient(-90deg, #785ad6, #4aabce);
        top: -55%;
        left: 45%;
        z-index: -11;
`
const P = styled.p` 
    ${({color="white"}) =>
    css`
      color:${color};
    `};
    
`

function Card(props) {
    return (
        //         <CardItemContainer>
        //             <div style={{height:"200px", width:"100%"}}>
        //                  <Img src={t.blow1} alt="Logo" />
        //             </div>
        //             <Div>
        //                 <P>Соси писю нежненько и лежа сверху</P>
        //             </Div>
        //         </CardItemContainer>
           
        <Container center cloumn>
           
                <CardItemContainer>
                        <Img src={t.blow1} alt="Logo" />
                        <p className={cls["textInform"]}>Открыть карточку</p>
                        <div href="#" className={cls["btn"]}>Перейти</div>
                </CardItemContainer>
                {/* <CardItemContainer>
                    <p className={cls["textInform"]}>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Сбить необходимыми, бросил города щеке.</p>
                    <a href="#" className={cls["btn"]}>Перейти</a>
                </CardItemContainer>
                <CardItemContainer>
                    <p className={cls["textInform"]}>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Сбить необходимыми, бросил города щеке.</p>
                    <a href="#" className={cls["btn"]}>Перейти</a>
                </CardItemContainer> */}
    
          
        </Container>	
    )
}
export default Card