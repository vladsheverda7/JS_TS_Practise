export function printAge(age) {
    return age;
}

class CustomerDetails {
    printFirstName(name) {
        console.log(name);
    }

    /**
     * this methon will print lastname
     * @param {string} lastname
     */
    printLastName(lastname) {
        console.log(lastname);
    }
}

export const customerDetails = new CustomerDetails();
