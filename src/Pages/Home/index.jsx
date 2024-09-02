import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import PorductDetail from "../../Components/ProductDetail"


function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') /*https://api.escuelajs.co/api/v1/products*/
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map(item => {
                    return  <Card key={item.id} data={item} />
                })
            }
            </div>
            <PorductDetail />
        </Layout>
    )
}

export default Home