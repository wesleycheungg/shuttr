//users#create
export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: {user}
    })
)

//session#create
export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: {user}
    })
)

//session#destroy
export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)