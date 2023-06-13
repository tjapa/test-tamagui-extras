import { GetProps, styled, Input as TamaguiInput } from 'tamagui'

export const CustomInput = styled(TamaguiInput, {
  backgroundColor: 'violet',
  borderColor: 'blue',
  color: 'red',
  focusStyle: {
    backgroundColor: 'green',
    borderColor: 'purple',
    color: 'yellow',
  },
})

export type CustomInputProps = GetProps<typeof TamaguiInput>
