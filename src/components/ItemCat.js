import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { getProductByCat } from '../utils/productos'

function ItemCat() {

    const [producto, setItem] = useState()
    const {categoria} = useParams() //useParams se usa para obtener los parametros de la url
    console.log(categoria)

    useEffect(() => {
      getProductByCat(categoria)
      .then(response => {setItem(response)})
    }, [])

    return (
      <div>
        <Item {...producto}/>
      </div>
    )
  }

export default ItemCat