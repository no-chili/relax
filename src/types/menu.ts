export type MenuChildrenItem={
  path:string,
  title:string
}

export type MenuItem={
  icon?:'',
  path:string,
  title:string,
  children?:Array<MenuChildrenItem>
}

export type Menu=Array<MenuItem>
