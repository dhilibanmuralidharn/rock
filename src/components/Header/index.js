import {
  HeaderContainer,
  UnorderList,
  ScoreContainer,
} from './HeaderStyleComponent'

const Header = props => {
  const {count} = props
  const {score} = count

  return (
    <HeaderContainer>
      <UnorderList>
        <h1>Rock Paper Scissors</h1>
      </UnorderList>
      <ScoreContainer>
        <p>Score</p>
        <p>{score}</p>
      </ScoreContainer>
    </HeaderContainer>
  )
}
export default Header
