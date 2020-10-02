class Contact {
  public id: number | string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public code: string;
  public oib: number;
  public phone: string;

  constructor(contact: any) {
    this.id = Number(contact.id) || "";
    this.firstName = contact.firstName || "";
    this.lastName = contact.lastName || "";
    this.username = contact.username || "";
    this.code = contact.code || "";
    this.phone = contact.phone || "";
    this.oib = contact.oib || "";
    this.email = contact.email || "";
  }
}

export default Contact;
