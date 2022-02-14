import { styled } from '@mui/material/styles'

interface PROPS {
  height: number
  backgroundColor?: string
}

const SpaceBox = (props: PROPS) => {
  // スペース確保
  const Space = styled('div')({
    height: props.height,
    backgroundColor: props.backgroundColor,
  })

  return (
    <div>
      <Space></Space>
    </div>
  )
}

export default SpaceBox
