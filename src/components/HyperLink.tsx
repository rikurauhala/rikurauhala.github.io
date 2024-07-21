import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Link from '@mui/joy/Link'

interface HyperLinkProps {
  href: string
  text: string
}

const HyperLink = ({ href, text }: HyperLinkProps): JSX.Element => (
  <Link
    endDecorator={<OpenInNewIcon sx={{ fontSize: 13 }} />}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {text}
  </Link>
)

export default HyperLink
