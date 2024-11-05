import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import PorductDetail from "../../Components/ProductDetail"
import ShoppingCartContext from "../../Context"


function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item => ( 
                        <Card key={item.id} data={item} />
                    ))
                )
            } else {
                return (
                    <div className="flex justify-center items-center w-full absolute left-1/2 transform -translate-x-1/2"><img src="https://media.giphy.com/media/7TWecD5OaqpKE/giphy.gif?cid=ecf05e47bjxleitc0wmtz7948pdbig4ncs3triy7at8iv3fr&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="We have nothing" /></div>
                )
            }
        } 

    return (
        <Layout>
            <div className="flex items-center justify-center relative m-50 mb-4">
                <h1 className="font-medium text-xl md:text-2xl">Exclusive Products</h1>
            </div>
            <input className="rounded-lg border border-black w-full sm:w-80 p-4 mb-4" type="text" placeholder="Search a product" onChange={(event) => context.setSearch(event.target.value)} />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-md mx-auto">
                {renderView()}
            </div>
            <PorductDetail />
        </Layout>
    )
}

export default Home