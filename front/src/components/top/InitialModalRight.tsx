import { styled } from '@mui/material/styles'
import ReactTextTransition, { presets } from 'react-text-transition'

// 文字を下段に設置するための親ブロック
const RightBlock = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
})

// 実際に下段に配置するブロック
const ButtomTextBlock = styled('div')({
  position: 'absolute',
  bottom: 50,
  width: '100%',
})

const TextBlock = styled('div')({
  position: 'absolute',
  right: 50,
})

// pタグ共通css
const CommonText = styled(ReactTextTransition)({})

// 表示させる文字
const TopText = `I'm Making`
const Text = 'It Mysalf'

// // 1行目の文字
const BottomTopText = styled(CommonText)({
  bottom: 70,
})

// 2行目の文字
const BottomText = styled(CommonText)({
  bottom: 50,
})

const InitialModalRight = () => {
  return (
    <RightBlock>
      <ButtomTextBlock>
        <TextBlock>
          {TopText.split('').map((n, i) => (
            <BottomTopText key={i} text={n} delay={i * 250} noOverflow inline></BottomTopText>
          ))}
        </TextBlock>
        <TextBlock>
          {Text.split('').map((n, i) => (
            <BottomText key={i} text={n} delay={i * 280} noOverflow inline></BottomText>
          ))}
        </TextBlock>
      </ButtomTextBlock>
      {/* <BottomTopText>I'm Making</BottomTopText>
      <BottomText>It Mysalf</BottomText> */}
    </RightBlock>
  )
}

export default InitialModalRight
