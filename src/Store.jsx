import { useEffect, useState } from 'react'
const products = [
  "touys",
  "guns",
  "estrogen"
]
function Store(props) {
  const [productsState, setProductsState] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product
        })
      setProductsState(newProductsState)
      })
  }, [])

  return (
    <>
      <SearchBar products={productsState}/>
    </>
  )
}

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredProducts = props.products.filter((product) => {
    return product.title.toUpperCase().includes(searchValue.toUpperCase())
  })

  return (
    <>
        <div>
          <input type="text" value={searchValue} onChange={handleInputChange}></input>
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product.title}><img src={product.image} /><h2>{product.title}</h2><h3>${product.price}</h3></li>
            })}
          </ul>
        </div>
    </>
  )
}

export default Store; SearchBar
