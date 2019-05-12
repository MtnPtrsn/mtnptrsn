export interface IProject {
  name: string
  description: string
  links: IPortfolioLink[]
}

interface IPortfolioLink {
  img: string
  link: string
}

export interface IPortfolioLinksProps {
  links: IPortfolioLink[]
}

export interface IPortfolioPageProps {
  project: IProject
}
