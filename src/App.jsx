import UserList from "./components/UserList";
import "./index.css";

function App() {
    return (
        <div className="p-24">
            <h1 className="font-bold font-sans text-6xl mb-8">
                User Managment
            </h1>
            <UserList />
        </div>
    );
}

export default App;
