import { useRecordValuesStore } from '@/stores/recordValues';

export function update(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

    let targetNode = recordInStore;

    path.forEach(node => {
        targetNode = targetNode[node];
    })  
    
    if (!targetNode) targetNode = {};

    for(const targetNodeProperty in args) {
        const targetNodePropertyValue = targetNode[targetNodeProperty];

        if(!targetNodePropertyValue) {
            targetNode[targetNodeProperty] = args[targetNodeProperty];
        }

        for (const key in targetNodePropertyValue) {
            if (args[targetNodeProperty][key]) {
                targetNodePropertyValue[key] = args[targetNodeProperty][key];
            }
        }
    }
}

/**
 * 
 * property type update
 */
// {
//     "pointer": {
//       "id": "2db466a0-b0d9-4dec-809b-a90e3fbaf120",
//       "table": "collection",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "path": [
//       "schema"
//     ],
//     "command": "update",
//     "args": {
//       "i^J[": {
//         "name": "Date",
//         "type": "number",
//       }
//     }
//}

/**
 * property delete
*/
// {
//     "pointer": {
//       "id": "2db466a0-b0d9-4dec-809b-a90e3fbaf120",
//       "table": "collection",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "path": [],
//     "command": "update",
//     "args": {
//       "schema": {
//         "Lvw;": {
//           "name": "Number",
//           "type": "number"
//         },
//         "a=~e": {
//           "name": "Status",
//           "type": "status",
//           "groups": [
//             {
//               "id": "25e5fcf2-fb24-4e5c-88aa-c0d7a1acaf43",
//               "name": "To-do",
//               "color": "gray",
//               "optionIds": [
//                 "0ca3665d-d708-430f-a024-95f0d7f907e8"
//               ]
//             },
//             {
//               "id": "360a2d24-f37a-43e2-a4ae-f1f19e5ba5ef",
//               "name": "In progress",
//               "color": "blue",
//               "optionIds": [
//                 "25621df1-d131-4b63-bd98-7cea84b4fb06"
//               ]
//             },
//             {
//               "id": "8abf40d9-7c7e-4502-bd3d-f3995a4f3e0d",
//               "name": "Complete",
//               "color": "green",
//               "optionIds": [
//                 "99126e59-59f5-40d4-b703-1271b73ab663"
//               ]
//             }
//           ],
//           "options": [
//             {
//               "id": "0ca3665d-d708-430f-a024-95f0d7f907e8",
//               "value": "Not started",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "25621df1-d131-4b63-bd98-7cea84b4fb06",
//               "color": "blue",
//               "value": "In progress",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "99126e59-59f5-40d4-b703-1271b73ab663",
//               "color": "green",
//               "value": "Done",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             }
//           ],
//           "defaultOption": "Not started"
//         },
//         "e_rz": {
//           "name": "Tags new",
//           "type": "multi_select",
//           "options": [
//             {
//               "id": "o:Nl",
//               "value": "two",
//               "color": "gray",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "oU~O",
//               "value": "one",
//               "color": "blue",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "n=^n",
//               "color": "green",
//               "value": "random",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             }
//           ]
//         },
//         "qnO^": {
//           "name": "Select",
//           "type": "select",
//           "options": [
//             {
//               "id": "}Y^Q",
//               "color": "default",
//               "value": "2",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "pSOZ",
//               "color": "pink",
//               "value": "1",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             }
//           ],
//           "auto_sort_options": "manual"
//         },
//         "title": {
//           "name": "Name",
//           "type": "title"
//         }
//       },
//       "deleted_schema": {
//         ":|qO": {
//           "name": "Date 5",
//           "type": "date"
//         },
//         "CUH@": {
//           "name": "Date 1",
//           "type": "date"
//         },
//         "EOPD": {
//           "name": "Number 1",
//           "type": "number",
//           "number_format": "rupee"
//         },
//         "EpBu": {
//           "name": "Text 1",
//           "type": "text"
//         },
//         "HsVQ": {
//           "name": "Date 4",
//           "type": "date"
//         },
//         "QF\\s": {
//           "name": "Date 2",
//           "type": "date"
//         },
//         "\\Vw}": {
//           "name": "Date 3",
//           "type": "date"
//         },
//         "\\h_E": {
//           "name": "Text",
//           "type": "text"
//         },
//         "\\v;>": {
//           "name": "Multi-select",
//           "type": "multi_select",
//           "options": [
//             {
//               "id": "\\KUr",
//               "color": "orange",
//               "value": "some"
//             }
//           ]
//         },
//         "q[js": {
//           "name": "Text 1 1",
//           "type": "text"
//         },
//         "ucM{": {
//           "name": "Date 2",
//           "type": "date"
//         },
//         "{Bpb": {
//           "name": "Date 1 1",
//           "type": "text",
//           "description": ""
//         },
//         "RLaJ": {
//           "name": "Checkbox",
//           "type": "checkbox"
//         },
//         "i^J[": {
//           "name": "Date",
//           "type": "number",
//           "options": [
//             {
//               "id": "w}Rb",
//               "color": "red",
//               "value": "tag",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "NdG^",
//               "color": "purple",
//               "value": "random",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             },
//             {
//               "id": "MtkE",
//               "color": "gray",
//               "value": "some",
//               "collectionIds": [
//                 "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//               ]
//             }
//           ],
//           "date_format": "DD/MM/YYYY",
//           "time_format": "LT"
//         }
//       }
//     }
//   }

/**
 * property create
 */ 
// {
//     "pointer": {
//       "table": "collection_view",
//       "id": "f3498306-3d20-489d-9fa4-1c1693528939",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "path": [
//       "format"
//     ],
//     "command": "update",
//     "args": {
//       "table_properties": [
//         {
//           "wrap": true,
//           "width": 276,
//           "visible": true,
//           "property": "title"
//         },
//         {
//           "wrap": true,
//           "width": 250,
//           "visible": true,
//           "property": "i^J["
//         },
//         {
//           "wrap": true,
//           "width": 200,
//           "visible": true,
//           "property": "e_rz"
//         },
//         {
//           "wrap": true,
//           "width": 200,
//           "visible": false,
//           "property": "Lvw;"
//         },
//         {
//           "wrap": true,
//           "width": 200,
//           "visible": true,
//           "property": "\\h_E"
//         },
//         {
//           "visible": true,
//           "property": "EpBu"
//         },
//         {
//           "visible": true,
//           "property": "q[js"
//         },
//         {
//           "visible": true,
//           "property": "EOPD"
//         },
//         {
//           "visible": true,
//           "property": "qnO^"
//         },
//         {
//           "visible": true,
//           "property": "RLaJ"
//         },
//         {
//           "visible": true,
//           "property": "a=~e",
//           "statusShowAs": "select"
//         },
//         {
//           "property": "Nwvy",
//           "visible": true
//         }
//       ]
//     }
//   }
// {
//     "pointer": {
//       "id": "2db466a0-b0d9-4dec-809b-a90e3fbaf120",
//       "table": "collection",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "path": [
//       "schema"
//     ],
//     "command": "update",
//     "args": {
//       "Nwvy": {
//         "name": "test",
//         "type": "text"
//       }
//     }
//   }