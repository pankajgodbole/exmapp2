//
//
//

import { exm_instance } from "./setup.js";
import { function_id } from "./function-id.js";

console.log(":read-state :function_id " + function_id);

const raw_result = await exm_instance.functions.read(function_id);
console.log(":read-state :result " + JSON.stringify(raw_result));
