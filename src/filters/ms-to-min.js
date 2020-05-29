const msToMin = {}
function convertMsToMin(ms){
  const min = Math.floor(ms/60000)
  const sec = (((ms % 60000)/1000).toFixed(0))

  return `${min}:${sec}`
}
msToMin.install = function (Vue){
  Vue.filter('ms-to-min', (val)=>{
      return convertMsToMin(val)
  })
}

export default msToMin
