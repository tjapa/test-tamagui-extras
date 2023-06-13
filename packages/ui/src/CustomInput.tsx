import { GetProps, styled, Input as TamaguiInput } from 'tamagui'

export const CustomInput = styled(TamaguiInput, {
  backgroundColor: 'violet',
  borderColor: 'blue',
  color: 'red',
  focusStyle: {
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    color: 'yellow',
  },
})

export type CustomInputProps = GetProps<typeof TamaguiInput>
