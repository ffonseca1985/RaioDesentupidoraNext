import axios from "axios";

const url: string = "https://s463wy47f4.execute-api.us-east-1.amazonaws.com/default/sendemail/";

export const sendMessage = (request: any): Promise<string> => {

    return new Promise((resolve, reject) => {

        axios.post(url, JSON.stringify(request), {
            headers: {
                Accept: 'application/json',
            },
        })
            .then(() => { resolve('ok') })
            .catch((x: any) => resolve(x));
    })
}