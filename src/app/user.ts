export interface User{
name:string,
password:string,
email:string
}
export interface Chats{
    firstName:string,
    secondName:string,
    message:[
        {
        date:string,
        sent:string,
        message:string
    }
]
}