import { Btn } from './styles'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  title: string
  children: string
  onClick: () => void
  style?: React.CSSProperties
}
const Button = ({ children, onClick, title, style, type }: Props) => {
  return (
    <Btn type={type} title={title} onClick={onClick} style={style}>
      {children}
    </Btn>
  )
}

export default Button
