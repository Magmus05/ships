import ApolloClient from "apollo-boost";
// import { ApolloQueryResult } from '@apollo/client';
import gql from "graphql-tag";
// export const baseUrl: string = "https://vortex.korabli.su/api/graphql/glossary/";

// interface IQueryResponse {
//   readonly userName: string;
// }

const client = new ApolloClient({
  uri: "https://vortex.korabli.su/api/graphql/glossary/",
});


export function getShips (){
return  client
  .query({
    query: gql`
      query {
        vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
      }
    `,
  })
}

// export const a: any = [
  
//   {
//     "title": "Numancia",
//     "description": "One of the variants of the \"Washington\" cruiser project, proposed to the Spanish Navy by the Vickers-Armstrongs company, was based on the Emerald-class hull but equipped with seven 203 mm guns in one (bow) three-gun and two twin-gun turrets. To ensure space saving for the propulsion unit, a linear arrangement of the boiler and engine rooms was adopted. The ship was supposed to be faster than her original and have a catapult; however, preference was given to the project variant that became the basis for the Baleares class of ships.",
//     "icons": {
//         "large": "//glossary.korabli.su/icons/vehicle/large/PSSC508_2f6af75c4c0e1d0c5102f72b14228db809d9c811c450e9d4a605df800bf8e454.png",
//         "medium": "//glossary.korabli.su/icons/vehicle/medium/PSSC508_1353300ca88cfe3ab48c2fdabe507b522b8eed83106d2e152888b0c110030b63.png",
//         "__typename": "IconsVehicle"
//     },
//     "level": 8,
//     "type": {
//         "name": "cruiser",
//         "title": "Cruiser",
//         "icons": {
//             "default": "//glossary.korabli.su/icons/vehicle/types/Cruiser/standard_44b68c918edc534e1367cb6512e9e8cc4d28aa54d237db820f1bbba867266742.png",
//             "__typename": "IconsVehicleClass"
//         },
//         "__typename": "VehicleType"
//     },
//     "nation": {
//         "name": "spain",
//         "title": "Spain",
//         "color": "#9158cb",
//         "icons": {
//             "small": "//glossary.korabli.su/icons/nation_flags/small/flag_Spain_956316c955d6d1ac7b623852fe4a3ba35d401d81ecf4296c3f927d8a1ef23059.png",
//             "medium": null,
//             "large": "//glossary.korabli.su/icons/nation_flags/large/flag_Spain_e7b90b91cbcbd6ea2191c134e9713dbcb0aaebf0c670911f8a527610fcdf293a.png",
//             "__typename": "NationIcons"
//         },
//         "__typename": "Nation"
//     },
//     "__typename": "Vehicle"
// },
// {
//     "title": "Cataluña",
//     "description": "After the Nationalists proclaimed victory in the Civil War, ties between Spain and the Fascist regime in Italy built up momentum. Suffering from a scarcity of modern ships of all types in its service, Spain planned to study the latest advancements in global shipbuilding, including those made by Italy. The Ansaldo company came up with three heavy cruiser projects for Spain, each with its own armament composition. One of the projects provided for armament to be made up of three 203 mm triple-gun mounts.",
//     "icons": {
//         "large": "//glossary.korabli.su/icons/vehicle/large/PSSC108_805e654c52398856db2bf5dffc7862b52f9dc14890e19264b9fb0a8b859eabc4.png",
//         "medium": "//glossary.korabli.su/icons/vehicle/medium/PSSC108_a8944f51be8bc0b18633e289d978ee1e82da046a8576c00d998e589e0107c7d5.png",
//         "__typename": "IconsVehicle"
//     },
//     "level": 8,
//     "type": {
//         "name": "cruiser",
//         "title": "Cruiser",
//         "icons": {
//             "default": "//glossary.korabli.su/icons/vehicle/types/Cruiser/standard_44b68c918edc534e1367cb6512e9e8cc4d28aa54d237db820f1bbba867266742.png",
//             "__typename": "IconsVehicleClass"
//         },
//         "__typename": "VehicleType"
//     },
//     "nation": {
//         "name": "spain",
//         "title": "Spain",
//         "color": "#9158cb",
//         "icons": {
//             "small": "//glossary.korabli.su/icons/nation_flags/small/flag_Spain_956316c955d6d1ac7b623852fe4a3ba35d401d81ecf4296c3f927d8a1ef23059.png",
//             "medium": null,
//             "large": "//glossary.korabli.su/icons/nation_flags/large/flag_Spain_e7b90b91cbcbd6ea2191c134e9713dbcb0aaebf0c670911f8a527610fcdf293a.png",
//             "__typename": "NationIcons"
//         },
//         "__typename": "Nation"
//     },
//     "__typename": "Vehicle"
// },
//   {
//   "title": "Andalucía",
//   "description": "In parallel with the work on the construction and repair of ships for its navy, Francoist Spain was busy designing new ones. In 1938, five destroyer projects and several cruiser projects with displacements ranging from 7,920 to 19,000 tons were worked through. The largest was Project 138 for \"a cruiser with a speed of 36 knots, \" providing several main battery options. One of the options involved the construction of a cruiser equipped with turrets from battleship España. But the most common option envisaged three triple-gun turrets with gun calibers ranging from 203 to 254 mm.",
//   "icons": {
//       "large": "//glossary.korabli.su/icons/vehicle/large/PSSC109_fbb1a457b658f80853ee8168ffb57031a06984318cd484b838a60c2f05105b49.png",
//       "medium": "//glossary.korabli.su/icons/vehicle/medium/PSSC109_46901470fba05ef690964135de0c4428ec707ad7916dacd59b44f8045cb8ae9b.png",
//       "__typename": "IconsVehicle"
//   },
//   "level": 9,
//   "type": {
//       "name": "cruiser",
//       "title": "Cruiser",
//       "icons": {
//           "default": "//glossary.korabli.su/icons/vehicle/types/Cruiser/standard_44b68c918edc534e1367cb6512e9e8cc4d28aa54d237db820f1bbba867266742.png",
//           "__typename": "IconsVehicleClass"
//       },
//       "__typename": "VehicleType"
//   },
//   "nation": {
//       "name": "spain",
//       "title": "Spain",
//       "color": "#9158cb",
//       "icons": {
//           "small": "//glossary.korabli.su/icons/nation_flags/small/flag_Spain_956316c955d6d1ac7b623852fe4a3ba35d401d81ecf4296c3f927d8a1ef23059.png",
//           "medium": null,
//           "large": "//glossary.korabli.su/icons/nation_flags/large/flag_Spain_e7b90b91cbcbd6ea2191c134e9713dbcb0aaebf0c670911f8a527610fcdf293a.png",
//           "__typename": "NationIcons"
//       },
//       "__typename": "Nation"
//   },
//   "__typename": "Vehicle"
// },
// {
//   "title": "Castilla",
//   "description": "While developing their own heavy cruisers, Spanish engineers actively adopted Italian experience and the latest achievements of Italian engineering in the field of ship armor protection and armaments. The knowledge gained could have culminated in a project based on a fusion of Italian and Spanish naval design thinking—projects of the Ansaldo cruisers and a project for a \"Super Washington\" cruiser from the Ferrol shipyard.",
//   "icons": {
//       "large": "//glossary.korabli.su/icons/vehicle/large/PSSC110_c52d9b8c72f111778d4bffda0afb0ba7120a6354938681db424d6b82cea5c3e7.png",
//       "medium": "//glossary.korabli.su/icons/vehicle/medium/PSSC110_5f7994304ba3eff7eab02054493a491b45f951fdf5b14f3a7aba735bc483b0eb.png",
//       "__typename": "IconsVehicle"
//   },
//   "level": 10,
//   "type": {
//       "name": "cruiser",
//       "title": "Cruiser",
//       "icons": {
//           "default": "//glossary.korabli.su/icons/vehicle/types/Cruiser/standard_44b68c918edc534e1367cb6512e9e8cc4d28aa54d237db820f1bbba867266742.png",
//           "__typename": "IconsVehicleClass"
//       },
//       "__typename": "VehicleType"
//   },
//   "nation": {
//       "name": "spain",
//       "title": "Spain",
//       "color": "#9158cb",
//       "icons": {
//           "small": "//glossary.korabli.su/icons/nation_flags/small/flag_Spain_956316c955d6d1ac7b623852fe4a3ba35d401d81ecf4296c3f927d8a1ef23059.png",
//           "medium": null,
//           "large": "//glossary.korabli.su/icons/nation_flags/large/flag_Spain_e7b90b91cbcbd6ea2191c134e9713dbcb0aaebf0c670911f8a527610fcdf293a.png",
//           "__typename": "NationIcons"
//       },
//       "__typename": "Nation"
//   },
//   "__typename": "Vehicle"
// }
// ]
