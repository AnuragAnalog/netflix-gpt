function checkValidData(name, email, password) {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

    if (!emailRegex.test(email)) {
        return "Email is invalid"
    }

    if (!passwordRegex.test(password)) {
        return "Password is invalid"
    }

    if (name !== null && !nameRegex.test(name)) {
        return "Name is invalid"
    }

    return null;
}

export { checkValidData }