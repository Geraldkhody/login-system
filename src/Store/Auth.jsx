export const Membership = async (email) => {
    const response = await fetch(`http://localhost:5000/users?email=${email}`);
    const data = await response.json();
    return data;
}


export const isValidEmail = (email) => {
    return email.includes('@');
};


export const userValidation = (resquestData, email, password) => {
    if (resquestData[0].email === email || resquestData.password === password){
        return true;
    }
    else {
        return false;
    }
}