import { useEffect, useState } from "react"
type DType = {
  data: {},
}

function App() {
  const [data, setData] = useState<DType>({data: {}})


  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },[data])

  return (
    <>
    </>
  )
}

export default App
