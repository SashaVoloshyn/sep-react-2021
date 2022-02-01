import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

 export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    delegateById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id,car)=>axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
};