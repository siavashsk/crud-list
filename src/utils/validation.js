export const validate = (form) => {
    if (
        form.firstName == "" ||
        form.lastName == "" ||
        form.username == "" ||
        form.phone == ""
    ) {
        return true;
    }
}