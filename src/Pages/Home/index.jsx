import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import PorductDetail from "../../Components/ProductDetail"
import ShoppingCartContext from "../../Context"


function Home() {
    const context = useContext(ShoppingCartContext)

   

    return (
        <Layout>
            <div className="flex items-center justify-center relative m-50 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input className="rounded-lg border border-black w-80 p-4 mb-4" type="text" placeholder="Search a product" onChange={(event) => context.setSearch(event.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-md">
            {
               context.items?.map(item => {
                    return  <Card key={item.id} data={item} />
                })
            }
            </div>
            <PorductDetail />
        </Layout>
    )
}

export default Home