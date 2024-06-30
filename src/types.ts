export interface InfoItem {
  key: string
  title: string
  icon: JSX.Element
  value: string
}

export interface Project {
  key: string
  image?: string
  background: string
  name: string
  duration: string
  description: string
  repository: string
}
