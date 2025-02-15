import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">My name is...</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter to go next"
                className="mt-4 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <p className="mt-4 text-purple-600 text-lg font-medium">
                "Do not wait for someone else to come and speak for you. It’s you who can change the world."
                <br /> — Malala Yousafzai
            </p>
        </div>
    );
};
export default SignUp;