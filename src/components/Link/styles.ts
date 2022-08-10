import {useStyletron} from 'baseui'

export default function useStyler({isActive}: {isActive: boolean}) {
  const [css, theme] = useStyletron()

  // TODO: must remove !important
  return css({
    ...(isActive && {
      color: `${theme.colors.linkActive} !important`,
    }),
    textDecoration: 'none !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '20px !important',
  })
}
