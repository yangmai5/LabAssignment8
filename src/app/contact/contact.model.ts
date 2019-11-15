interface IContact {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    editing?: boolean;
}
export class Contact {
    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public phone?: string;
    public editing?: boolean;

    constructor(contact: IContact) {
        contact.editing = this.setState(contact);
        Object.assign(this, contact);
    }

    setState(contact: IContact) {
        if (contact == null || Object.keys(contact).length == 0) {
            return true;
        }
        let editing = false;
        Object.keys(contact).forEach((Key) => {
            console.log('from setState...', contact[Key]);
            if (contact[Key] == null) {
                editing = true;
            }
        });
        return editing;
    }
}