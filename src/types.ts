export interface InfoItem {
  key: string
  icon: JSX.Element
  title: string
  value: string | JSX.Element
}

export interface Project {
  key: string
  image?: string
  background: string
  name: string
  duration: string
  description: string
  repository: string
  featured: boolean
}
