// 1) создать интерфейс на основе этого объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }

export  interface ISpaceX{
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunch_site;
    links: ILinks;
    rocket: IRocked;
}



interface ILaunch_site {
    site_name_long: string
}

interface ILinks {
    article_link: null|string;
    video_link: string;
}

interface IRocked  {
    rocket_name: string;
    first_stage: IFirst_stage;
    second_stage:ISecond_stage;
}

interface ISecond_stage  {
    payloads: [
        {
            payload_type: string;
            payload_mass_kg: string;
            payload_mass_lbs: string;
        }
    ]
}
interface IFirst_stage {
    cores: [
        {
            flight: number;
            core: {
                reuse_count: number;
                status: unknown|boolean;
            }
        }
    ]
}