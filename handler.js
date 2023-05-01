//
//
//

export async function handle (state , action) {
    const counter = state.counter;
    const input = action.input;
    console.log(
        ":handler.js :handle :state.counter " + counter +
        " :action.input " + JSON.stringify(input)
    );
    state.counter++;
    console.log(
        ":handler.js :handle :state.counter " + JSON.stringify(state.counter) +
        " :action.input " + JSON.stringify(action.input)
    );
    return { state };
}
