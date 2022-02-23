import { Postagem } from "./Postagem"

export class User{
    public id :number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipos: string
    public postagem: Postagem[]
}