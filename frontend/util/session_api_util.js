export const ajax_signup = (user) => {
    return $.ajax ({
        method: 'POST',
        url: 'api/users',
        data: { user },
    })
}

export const ajax_login = (user) => {
    return $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user },
    })
}

export const ajax_logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/session',
    })
}