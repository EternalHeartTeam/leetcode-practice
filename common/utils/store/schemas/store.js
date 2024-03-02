import Realm from "realm";

export class Store extends Realm.Object {
    static schema = {
        name: "Store",
        properties: {
            key: "string",
            value: "string",
            timestamp: {type:"date",default:()=>new Date()}
        },
        primaryKey: "key"
    };
}
