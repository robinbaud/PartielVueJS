import axios from "axios";

const APIurl  = "http://vps-a47222b1.vps.ovh.net/TShirt"

export const call = async() => {
    let tshirtlist = [];
    await axios.get(APIurl).then(response => {
        let list = response.data;
        for(let i = 0; i < list.length; i++){
            tshirtlist.push(list[i])
        }
    })
    return tshirtlist
}