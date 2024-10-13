import Layout from "../../Components/Layout"

function NotFound() {
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center overflow-hidden">
        <img className="max-h-screen object-cover" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXI2ZGhhOGg5ejdubDRzdDU5czV3bnFrMnJjbDdnM2s5MWl1cGQyYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9J7tdYltWyXIY/giphy.gif" alt="Error 404" />
      </div>
    </Layout>
  )
}

export default NotFound