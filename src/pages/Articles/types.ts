export interface IArticle {
  thumbnail: string
  title: string
  excerpt: string
  body: string
}

export interface IArticleCardProps {
  article: IArticle
}
