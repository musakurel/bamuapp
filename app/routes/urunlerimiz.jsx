
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { getProducts } from '~/models/product.server'

export const loader= async({})=>{
  const products= await getProducts()
  return json({products})
}
export default function Urunlerimiz() {
  const {products}=useLoaderData()
  return (
    <div> 
         <div className="mx-auto flex max-w-sm items-center p-6">
        <h1 className="text-4xl font-medium text-black ">Ürünlerimiz</h1>
      </div>
        <div className="mx-auto max-w-2xl items-center p-6">
      <div className="grid grid-cols-2 gap-4">

      {products.map((product)=>(

<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={"/"+product?.imageSlug} alt=""/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
        </a>
       
    </div>
</div>

))}
    </div>
    </div>
    </div>
  )
}
