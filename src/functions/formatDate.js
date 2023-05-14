export default function formatDate(date) {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  var inputtedDate = new Date(date)

  return inputtedDate.toLocaleDateString("en-US", options)
}
