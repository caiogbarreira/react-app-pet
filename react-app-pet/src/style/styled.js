import styled from "styled-components";

export const CardForm = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    /* width: auto; */
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    div{
        min-width: 100%;
        label{
            width: 100%;
            &.imagem{
                font-size: 20px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px 0;
                border-radius: 10px;
                margin: 15px 0;

                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: rgba(0,0,0,0.5);
                    img {
                        width: 200px;
                        height: 200px;
                        margin-bottom: 10px;
                        border-radius: 100%;
                        border: 5px solid rgba(0,0,0,0.1);
                        position: relative;
                        transition-duration: 0.3s;
                        /* left: 50%; */
                        /* transform: translate(-50%, -50%); */

                        &:hover {
                            cursor: pointer;
                            border: 5px solid rgba(0,0,0,.3);
                        }

                        &:active {
                            border: 5px solid rgba(0,0,0,.5);
                            transform: scale(0.95);
                        }
                    }
                }
            }
        }
        input{
            width: 100%;
            margin: 0;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
            &#imagem {
              display: none;
            }
        }
        
        textarea {
          width: 100%;
          margin: 0;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
          box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
          resize: none;
        }
    }

    div.input-grid {
        max-width: 100%;
        display: grid;
        grid-template-columns: 160px 160px 160px;
        gap: 10px;

    }
`

export const Botao = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: hsl(216, 57%, 50%);
    width: 20vw;
    color: #FFF;
    font-size: 16px;
    padding: 13px 8px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0,0,0,.39);
    transition-duration: 0.3s;
    
    &:hover{
        background-color: hsl(216, 57%, 40%);
        cursor: pointer;
    }
    &:active{
        background-color: hsl(216, 57%, 30%);
        transform: scale(0.95);
    }
`

export const BotaoCancelar = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(0, 57%, 50%);
    color: #FFF;
    width: 15vw;
    font-size: 16px;
    padding: 13px 8px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0,0,0,.39);
    transition-duration: 0.3s;
    &:hover{
        background-color: hsl(0, 57%, 40%);
        cursor: pointer;
    }
    &:active{
        background-color: hsl(0, 57%, 30%);
        transform: scale(0.95);
    }
`

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    width: auto;
    min-height: 520px;
    min-width: 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        img {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            border: 5px solid rgba(0,0,0,0.1);
            position: relative;
            transition-duration: 0.3s;
            /* left: 50%; */
            /* transform: translate(-50%, -50%); */
        }
        *{
            margin: 0;

        }
    }
`