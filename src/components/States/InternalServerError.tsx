import type {Responsive, Scale} from 'baseui/block'
import {Block, BlockProps} from 'baseui/block'
import * as React from 'react'
import InternalServerErrorIcon from '../../assets/images/InternalServerErrorIcon'
import {Button} from '../Button'

export interface Props extends BlockProps {
  msg?: number | string
  scale?: Responsive<Scale>
  onReload?: React.MouseEventHandler
}

export const InternalServerError: React.FC<Props> = ({
  msg,
  scale,
  onReload,
  ...delegated
}) => {
  const _scale = scale || 'fullScale'
  const _msg =
    msg ||
    `The server encountered an internal error or \nmisconfiguration and was unable to \ncomplete your request.`
  return (
    <Block
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width={_scale}
      height={_scale}
      {...delegated}
    >
      <InternalServerErrorIcon width='100%' height='100%' />
      <Block
        font='Body3'
        $style={{
          textAlign: 'center',
          marginTop: '24px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {_msg}
      </Block>
      <Block
        $style={{
          textAlign: 'center',
          marginTop: '24px',
        }}
      >
        <Button onClick={onReload}>Reload Page</Button>
      </Block>
    </Block>
  )
}
InternalServerError.displayName = 'InternalServerError'
