import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const addUser = async (newUser) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    });
    return response.json();
};

function AddUser() {
    const queryClient = useQueryClient();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries(["users"]);
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ name, email });
        setName("");
        setEmail("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Adding..." : "Add User"}
            </button>
        </form>
    );
}
export default AddUser;
