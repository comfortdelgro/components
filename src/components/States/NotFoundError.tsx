import type {Responsive, Scale} from 'baseui/block'
import {Block, BlockProps} from 'baseui/block'
import * as React from 'react'
import NotFoundErrorIcon from '../../assets/images/NotFoundErrorIcon'
import {Button} from '../Button'

export interface Props extends BlockProps {
  title?: number | string
  msg?: number | string
  back?: number | string
  scale?: Responsive<Scale>
  onBack?: React.MouseEventHandler
}

export const NotFoundError: React.FC<Props> = ({
  title = 'Site not found',
  msg = `Well, this is awkward. The site you’re looking \nfor is not here.`,
  scale = 'fullScale',
  back = 'Go back to the App',
  onBack,
  ...delegated
}) => {
  return (
    <Block
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width={scale}
      height={scale}
      {...delegated}
    >
      <NotFoundErrorIcon width='100%' height='100%' />
      <Block
        font='HeadingMedium'
        $style={{
          textAlign: 'center',
          marginTop: '24px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {title}
      </Block>
      <Block
        font='Body3'
        $style={{
          textAlign: 'center',
          marginTop: '24px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {msg}
      </Block>
      <Block
        $style={{
          textAlign: 'center',
          marginTop: '24px',
        }}
      >
        <Button onClick={onBack}>{back}</Button>
      </Block>
    </Block>
  )
}
NotFoundError.displayName = 'NotFoundError'
