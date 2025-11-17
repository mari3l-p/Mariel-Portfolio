import Navigation from "./Navigation"

export default function Sidebar() {
    return (
        
        <aside className="w-64 bg-(--dark-blue) hidden md:flex flex-col h-screen p-6 sticky top-0 rounded-l-3xl ">
            
            <div className="flex flex-col ">
                <Navigation/>
            </div>
        </aside>
    )
}