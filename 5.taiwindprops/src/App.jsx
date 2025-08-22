import CardComponents from '../components/card.components.jsx'
import './App.css'

function App() {
  
  return (
    <>
    <div className="bg-black ">

       <div className="flex flex-wrap justify-center gap-16 m-4 p-6 bg-gray-900 min-h-screen">
      <CardComponents
        title="Project Management System"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit doloremque nemo consequuntur ducimus reprehenderit cumque nobis id alias. Id sequi suscipit deleniti quidem magnam, cum repellendus nesciunt unde rerum vero a? Harum eaque enim eligendi quidem! Libero exercitationem praesentium, consequatur voluptates facere voluptatum adipisci, tempora quae labore vero atque!"
        imgsrc="https://placehold.co/400x300/1e293b/cbd5e1?text=Project+1"
      />
      <CardComponents
        title="E-commerce Platform"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit doloremque nemo consequuntur ducimus reprehenderit cumque nobis id alias."
        imgsrc="https://placehold.co/400x300/1e293b/cbd5e1?text=Project+2"
      />
      <CardComponents
        title="Social Media Dashboard"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit doloremque nemo consequuntur ducimus reprehenderit cumque nobis id alias. Id sequi suscipit deleniti quidem magnam, cum repellendus nesciunt unde rerum vero a? Harum eaque enim eligendi quidem!"
        imgsrc="https://placehold.co/400x300/1e293b/cbd5e1?text=Project+3"
      />
    </div>
      
    
    </div>
    
    </>
  )
}

export default App
