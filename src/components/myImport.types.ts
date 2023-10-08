export type MyInputProps = {
  modelValue: string
}

export type MyInputEmits = {
  (e: 'update:modelValue', text: string): void
}