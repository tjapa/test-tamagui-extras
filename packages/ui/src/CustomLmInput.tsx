import { GetProps, styled } from 'tamagui'
import { LmInput as TamaguiInput } from '@tamagui-extras/form'

export const CustomLmInput = styled(TamaguiInput, {
  backgroundColor: 'violet',
  borderColor: 'blue',
  color: 'red',
  focusStyle: {
    backgroundColor: 'green',
    borderColor: 'purple',
    color: 'yellow',
  },
})

export type CustomLmInputProps = GetProps<typeof TamaguiInput>
