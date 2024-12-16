export interface IPostForm {
   id: number
   content: string
}

export interface IPostModel {
   id: number
   author: IAuthor
   content: string
   createdAt: string
}

export interface IAuthor {
   id: number
   userName: string
}
