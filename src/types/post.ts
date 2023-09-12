export interface Post{
  title: string
  body: string
  userId: number
  id: string
  comments: [
      {
          id: string,
          userId: string,
          text: string,
          createAt: string
        }
  ]
  like: number
  shares: number
  photos: [{
  id: string,
  url: string
 
}]
videoURL: string
timer: []
timerDesc: []

}