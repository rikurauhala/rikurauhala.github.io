import Avatar from '@mui/joy/Avatar'

const ProfilePicture = (): JSX.Element => {
  const size = '150px'

  return (
    <Avatar
      alt="Profile picture"
      src="/img/profile.png"
      sx={{ height: size, width: size }}
      title="Profile picture"
      variant="outlined"
    />
  )
}

export default ProfilePicture
