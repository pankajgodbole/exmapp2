//
//
//

import { Exm , ContractType } from "@execution-machine/sdk";
import { readFileSync , writeFileSync } from "fs";

import { exm_instance } from "./setup.js";
import { state } from "./state.js";

const contract_source = readFileSync("./handler.js");

const initial_state = JSON.stringify(state);
console.log(":deployer.js :initial_state " + initial_state);

const result =
    await exm_instance.functions.deploy(contract_source , initial_state , ContractType.JS);
console.log(":deployer.js :result " + JSON.stringify(result));

// Save the id of the freshly deployed function contract
const fn_id = result.id;
console.log(":deployer.js :fn_id " + fn_id);
writeFileSync("./function-id.js" , `export const function_id = "${fn_id}"`);

