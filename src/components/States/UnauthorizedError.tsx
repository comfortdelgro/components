import type {Responsive, Scale} from 'baseui/block'
import {Block, BlockProps} from 'baseui/block'
import * as React from 'react'
import UnauthorizedErrorIcon from '../../assets/images/UnauthorizedErrorIcon'
import {Button} from '../Button'

export interface Props extends BlockProps {
  title?: number | string
  msg?: number | string
  back?: number | string
  scale?: Responsive<Scale>
  onReturn?: React.MouseEventHandler
}

export const UnauthorizedError: React.FC<Props> = ({
  title = 'No authorization found.',
  msg = `This page is not publically available. \nTo access it please login first.`,
  scale = 'fullScale',
  back = 'Return Home',
  onReturn,
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
      <UnauthorizedErrorIcon width='100%' height='100%' />
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
        <Button onClick={onReturn}>{back}</Button>
      </Block>
    </Block>
  )
}
UnauthorizedError.displayName = 'UnauthorizedError'
