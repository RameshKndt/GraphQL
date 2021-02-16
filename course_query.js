query getSingleCourse($id:Int!){
  course(id:$id){
    title,
    description,
    topic,
    author,
    url
  }
}

{"id":1}