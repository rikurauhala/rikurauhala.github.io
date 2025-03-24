import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Link from '@mui/joy/Link'

const HyperLink = ({ href, text }: { href: string; text: string }) => (
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
