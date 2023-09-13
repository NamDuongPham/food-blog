export interface Post{
  title: string
  body: string
  userId: number
  id: string
  comments: [
      {
          id: number,
          userId: number,
          text: string,
          createAt: number
        }
  ]
  likes: number
  shares: number
  photos: [{
  id: string,
  url: string
 
}]
videoURL: string
timer: []
timerDesc: []

}