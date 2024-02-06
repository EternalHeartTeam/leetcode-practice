import Realm from "realm";
export class Question extends Realm.Object {
    static schema = {
        name: "Question",
        properties: {
            _id: {type: "objectId", default: () => new Realm.BSON.ObjectId()},
            id: "string",
            mode: "string",
            slug: "string",
            title: "string",
            detail: "string",
            jsCode: "string",
            url: "string?",
            date: "string?",
            timestamp: {type:"date",default:()=>new Date()}
        },
        primaryKey: "_id",
    };
}
