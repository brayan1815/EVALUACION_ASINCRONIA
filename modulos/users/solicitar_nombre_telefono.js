import { solicitud } from "../helpers/solicitud.js";

export const get_name_phone=async(URL)=>{
    const users=await solicitud(`${URL}/users`);
    return Promise.all(users.map(async(user)=>{
        return {"name":user.name,
                "Phone":user.phone
        }
    }))
}