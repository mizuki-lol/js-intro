export default function Title({ text }: TitleProps) {
  return <h2>{text}</h2>
}

interface TitleProps {
  text: string
}
