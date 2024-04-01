import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const GameContainer = styled.div`
    padding: 25px 30px;
    background-color: #223a5f;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    width: 900px;
`
export const ChoiceButton = styled.div`
    background-color: transparent;
    cursor: pointer;  
`
export const UnorderList = styled.ul`
    list-style-type: none;
    padding:50px;
    color: white;
    font-size: 20px;
    font-family: Roboto;
    gap: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ChoiceImg = styled.img`
    width: 100%;
    max-width: 180px;
    gap: 50px;
    margin-right: 50px
`

export const ButtonContainer = styled.div`
    align-self: flex-end;
`

export const RulesButton = styled.button`
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
`
export const ResultContainer = styled.ul`
    list-style-type: none;
    padding:50px;
    color: white;
    font-size: 20px;
    font-family: Roboto;
    gap: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const PopupImg = styled.img`
    width:100%;
    max-width: 500px;
`
