import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + Number(props.inc));
    if(count>=10-Number(props.inc)) {
        setCount(0);
    }
  }
  const coolStyle = {
    backgroundColor: props.color,
    color: "#000000"
  }

  return (
    <>
        <div className="card">
            <button onClick={updateCount} style={coolStyle}>
                count is {count}
            </button>
        </div>
    </>
  )
}

export default Counter
