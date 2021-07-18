export class User{
    id: string;
    fullname: string;
    username: string;
    email: string;
    admin: boolean = false;
    password: string;
    createAt: Date;
    updatedAt: Date;

    login(){

    }

    singUp(){

    }

    createList(){

    }

    createTask(){

    }

    constructor(id: string, fullname: string, username: string, email: string, admin: boolean, password: string, createAt: Date, updatedAt: Date)
    {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.admin = admin;
        this.password = password;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }

}