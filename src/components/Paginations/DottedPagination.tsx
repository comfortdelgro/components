import type {Theme as BuiTheme} from 'baseui'
import {styled} from 'baseui'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'
import * as React from 'react'
import {defaultTheme} from '../../utils'
import {border, borderRadius} from '../../utils/helpers/style'

type Theme = BuiTheme & typeof defaultTheme['overrides']

interface StyledDotProp {
  $theme: Theme
  $isActive: boolean
}

const StyledDot: React.FC<StyledDotProp> = styled(
  'a',
  ({$theme, $isActive}) => {
    console.debug('StyledDot', $theme, $isActive)
    return {
      cursor: 'pointer',
      minWidth: $isActive ? '16px' : '8px',
      height: '8px',
      background: $isActive ? $theme.colors.primaryB : 'transparent', //dottedPaginationFill,
      marginRight: $isActive ? '8px' : 0,
      ...border(`1px solid ${$theme.colors.primaryB}`),
      ...borderRadius('32px'),
    }
  },
)
StyledDot.displayName = 'StyledDot'

export interface DottedPaginationProp {
  index: number
  length: number
  onChange: (index: number) => void
}

export const DottedPagination: React.FC<DottedPaginationProp> = ({
  index,
  length,
  onChange,
}) => {
  const dots = []
  let i = 0
  // eslint-disable-next-line prettier/prettier
  for (i; i < length; i++) {
    const key = i
    const isActive = index === key
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onChange(key)
    }
    dots.push(
      <FlexGridItem display='flex' key={key}>
        <StyledDot $isActive={isActive} onClick={handleClick} />
      </FlexGridItem>,
    )
  }
  return (
    <FlexGrid
      display='inline-flex'
      flexGridColumnCount={length}
      flexGridColumnGap='scale300'
      flexGridRowGap='scale300'
    >
      {dots}
    </FlexGrid>
  )
}
DottedPagination.displayName = 'DottedPagination'
