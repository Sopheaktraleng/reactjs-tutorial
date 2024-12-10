import { CheckboxWithText } from "./components/dashboard/checkbox";
import { MenubarDemo } from "./components/dashboard/menu";
import { PaginationDemo } from "./components/dashboard/pagination";
import { SelectDemo } from "./components/dashboard/select";
import { SwitchDemo } from "./components/dashboard/switch";
import UserList from "./components/UserList";
import "./index.css";

function App() {
    return (
        <div className="p-24">
            <div className="font-bold font-sans text-6xl mb-8 flex flex-row justify-between">
                <h1>User Managment</h1>
                <SwitchDemo />
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <MenubarDemo />
                </div>
                <div>
                    <SelectDemo />
                </div>
            </div>

            <UserList />
            <PaginationDemo></PaginationDemo>
            <CheckboxWithText />
        </div>
    );
}

export default App;
