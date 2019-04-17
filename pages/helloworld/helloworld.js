Page({
data:{
  messgae:"hello hjd",
  theName:"text1",
  flag:false,
  items:[ {name:"hjd"}, {name:"xj"}, {name:"hmy"} ],
  condition:Math.floor(Math.random()*3+1),
  item:{
    name:"hjd",
    address:"安徽合肥",
    phone:"1731486830"
  },
  colorValue:'red',

  clickMe(e) {
      console.log(e);
  }
  
}


})