//
//
//

import { exm_instance } from "./setup.js";
import { function_id } from "./function-id.js";

console.log(":create-new-state :function_id " + function_id);

const raw_data =
    {
        "counter" : 5 ,
    };
const inputs = JSON.stringify(raw_data);
console.log(":create-new-state.js :inputs " + inputs);

const raw_result = await exm_instance.functions.write(function_id , inputs);
console.log(":create-new-state.js :result " + JSON.stringify(raw_result));
