import Link from '@mui/joy/Link'

interface HyperLinkProps {
  href: string
  text: string
}

const HyperLink = ({ href, text }: HyperLinkProps): JSX.Element => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
    {text}
  </Link>
)

export default HyperLink
