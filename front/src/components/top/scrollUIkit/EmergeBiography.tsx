import React from 'react'
import { styled } from '@mui/material/styles'
import { useInView } from 'react-intersection-observer'

const TriggerBlock = styled('div')({
  height: 10,
})

const H2Block = styled('h2')({
  display: 'inline-block',
  fontSize: '1.5rem',
  padding: '4rem 4.875rem 0 6rem',
  letterSpacing: '-0.02em',
  color: '#666',
  fontWeight: 'lighter',
  animation: 'slideText 2s linear forwards',
  '@keyframes slideText': {
    '0%': {
      marginLeft: 30,
      marginTop: 20,
    },
    '100%': {
      marginLeft: 0,
      marginTop: 0,
    },
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: '2rem',
  },
})

const TextBlock = styled('span')({})

interface TEXT {
  test: string
}

const EmergeBiography = (props: TEXT) => {
  const { ref, inView } = useInView({
    rootMargin: '10px',
    triggerOnce: true,
  })

  return (
    <TriggerBlock ref={ref}>
      {inView && (
        <H2Block>
          <TextBlock>
            埼玉と東京のハーフによって構成される4人組ロックバンド<br></br>
          </TextBlock>
          <TextBlock>
            メンバーチェンジを経て2013年から現体制に。<br></br>
          </TextBlock>
          <TextBlock>
            <br></br>
          </TextBlock>
          <TextBlock>
            端正なルックスから放たれるキャッチーなメロディーの楽曲、<br></br>
          </TextBlock>
          <TextBlock>
            音源だけ味わえない観る人をHAPPYにするステージングや<br></br>
          </TextBlock>
          <TextBlock>
            全力で熱くメッセージを伝えるMCも必見。<br></br>
          </TextBlock>
          <TextBlock>
            <br></br>
          </TextBlock>
          <TextBlock>
            2017年6月から「200本ストリート」と題して都内各地で路上ライブを敢行。<br></br>
          </TextBlock>
          <TextBlock>
            2018年8月に200本達成。そして<br></br>
          </TextBlock>
          <TextBlock>
            2018年8月17日 渋谷WWWでのワンマンライブを成功に収める。<br></br>
          </TextBlock>
          <TextBlock>
            <br></br>
          </TextBlock>
          <TextBlock>
            2018年11月22日 Ba.宮崎の脱退に伴い、それ以降のライブ活動を休止している。<br></br>
          </TextBlock>
        </H2Block>
      )}
    </TriggerBlock>
  )
}

export default EmergeBiography
