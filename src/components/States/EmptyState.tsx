import type {Responsive, Scale} from 'baseui/block'
import {Block, BlockProps} from 'baseui/block'
import * as React from 'react'
import EmptyStateIcon from '../../assets/images/EmptyStateIcon'

export interface Props extends BlockProps {
  msg?: number | string
  scale?: Responsive<Scale>
}

export const EmptyState: React.FC<Props> = ({
  msg = 'Nothing here/No Image',
  scale = 'fullScale',
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
      <EmptyStateIcon width='100%' height='100%' />
      <Block
        font='Body2'
        color='contentTertiary'
        $style={{
          textAlign: 'center',
          marginTop: '10px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {msg}
      </Block>
    </Block>
  )
}
EmptyState.displayName = 'EmptyState'
