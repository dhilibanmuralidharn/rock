import {Component} from 'react'
import Popup from 'reactjs-popup'

import Header from '../Header'

import {
  MainContainer,
  GameContainer,
  ChoiceButton,
  ChoiceImg,
  UnorderList,
  ButtonContainer,
  RulesButton,
  ResultContainer,
  PopupImg,
} from './GameStyledComponents'

class Game extends Component {
  state = {
    showPopups: false,
    playerChoice: null,
    opponentChoice: null,
    resultMessage: '',
    score: 0,
  }

  handleShowPopups = () => {
    this.setState(prevState => ({showPopups: !prevState.showPopups}))
  }

  determineWinner = (playerChoice, opponentChoice) => {
    let scoreChange = 0
    if (playerChoice.id === opponentChoice.id) {
      this.setState({resultMessage: 'IT IS DRAW'})
    } else if (
      (playerChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (playerChoice.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (playerChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      scoreChange = 1
      this.setState({resultMessage: 'YOU WON'})
    } else {
      scoreChange = -1
      this.setState({resultMessage: 'YOU LOSE'})
    }
    this.setState(prevState => ({scoreL: prevState.score + scoreChange}))
  }

  playAgain = () => {
    this.setState({
      playerChoice: null,
      opponentChoice: null,
      resultMessage: '',
    })
  }

  handleChoiceClick = choice => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[randomIndex]

    this.setState({
      playerChoice: choice,
      opponentChoice: randomChoice,
    })

    this.determineWinner(choice, randomChoice)
  }

  render() {
    const {choicesList} = this.props
    const {playerChoice, opponentChoice, resultMessage, score} = this.state

    return (
      <MainContainer>
        <GameContainer>
          <Header count={score} />
          <UnorderList>
            {choicesList.map(choice => (
              <ChoiceButton
                type="button"
                key={choice.id}
                onClick={() => this.handleChoiceClick(choice)}
                data-testid={
                  choice.id === 'ROCK'
                    ? 'rockButton'
                    : choice.id === 'SCISSORS'
                    ? 'scissorsButton'
                    : 'paperButton'
                }
              >
                <ChoiceImg src={choice.imageUrl} alt={choice.id} />
              </ChoiceButton>
            ))}
          </UnorderList>
          {playerChoice && opponentChoice && (
            <ResultContainer>
              <div>
                <ChoiceImg src={playerChoice.imageUrl} alt="your choice" />
                <ChoiceImg
                  src={opponentChoice.imageUrl}
                  alt="opponent choice"
                />
              </div>
              <p>{resultMessage}</p>
              <RulesButton onClick={this.playAgain}>Play Again</RulesButton>
            </ResultContainer>
          )}
          <div>
            <Popup
              modal
              trigger={
                <ButtonContainer onClick={this.handleShowPopups}>
                  <RulesButton>RULES</RulesButton>
                </ButtonContainer>
              }
              position="top right"
            >
              {close => (
                <>
                  <div>
                    <PopupImg
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
          </div>
        </GameContainer>
      </MainContainer>
    )
  }
}
export default Game
