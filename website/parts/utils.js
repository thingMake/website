const {floor, ceil, abs, round} = Math

function timeDiffString(millis){
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24
  const YEAR = DAY * 365

  if (millis < MINUTE) {
    return "just now"
  }

  let years = floor(millis / YEAR)
  millis -= years * YEAR

  let days = floor(millis / DAY)
  millis -= days * DAY

  let hours = floor(millis / HOUR)
  millis -= hours * HOUR

  let minutes = floor(millis / MINUTE)

  if (years) {
    return `${years} year${years > 1 ? "s" : ""} and ${days} day${days !== 1 ? "s" : ""} ago`
  }
  if (days) {
    return `${days} day${days > 1 ? "s" : ""} and ${hours} hour${hours !== 1 ? "s" : ""} ago`
  }
  if (hours) {
    return `${hours} hour${hours > 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""} ago`
  }
  return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
}
function timeString(time){
  return timeDiffString(Date.now() - time) + " | " + (new Date(time).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }))
}
async function getLocalTime(time){
  return await fetch(`https://server.thingmaker.repl.co/getLocalTime?time=${Date.now()}${time ? "&convert="+time : ""}`).then(r => r.json()).then(r => {
    if(r.success){
      return r.time || r.diff
    }else{
      console.error(r.message)
      alert(r.message)
    }
  })
}
async function getLocalTimeString(time){
  time = await getLocalTime(time)
  return timeString(time)
}