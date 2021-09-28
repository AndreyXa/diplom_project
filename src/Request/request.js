
export const addUser = async ({name, login, password}) => {
    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, login, password }),
    });
}