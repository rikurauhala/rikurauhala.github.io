export interface InfoItem {
  key: string
  icon: JSX.Element
  title: string
  value: string | JSX.Element
}

export interface Project {
  key: string
  image?: string
  name: string
  duration: string
  description: string
  technologies: string[]
  repository: string
  featured: boolean
}
