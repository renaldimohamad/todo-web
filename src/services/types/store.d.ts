export interface IStoreState {
   user: IUser
   isLogin: boolean
}

export interface IStoreAction {
   setUser: (user: IUser) => void
   clearUser: () => void
   isDarkMode: boolean
   toggleTheme: () => void
}

export interface IUser {
   id: String
   userName: String
   email: String
}

export type TStore = IStoreState & IStoreAction
