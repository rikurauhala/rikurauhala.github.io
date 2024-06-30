import Avatar from '@mui/joy/Avatar'

const ProfilePicture = (): JSX.Element => {
  const size = '175px'

  return (
    <Avatar
      sx={{
        height: size,
        width: size,
      }}
    />
  )
}

export default ProfilePicture
