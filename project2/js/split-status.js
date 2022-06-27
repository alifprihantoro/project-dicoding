export default function splitStatus(data) {
  const data_false = []
  const data_true = []
  data.forEach((e) => {
    if (e.status == false) {
      data_false.push(e)
    } else {
      data_true.push(e)
    }
  })
  return {
    data_false,
    data_true,
  }
}
