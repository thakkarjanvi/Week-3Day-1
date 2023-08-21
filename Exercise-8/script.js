function simulateAsyncOperationCallback(callback) {
    setTimeout(function() {
        console.log("Callback Simulated asynchronous operation completed.");
        callback();
    }, 2000); 
}

simulateAsyncOperationCallback(function() {
    console.log("Callback function called after simulated async operation.");
});

function simulateAsyncOperationPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Promise Simulated asynchronous operation completed.");
            resolve();
        }, 2000); 
    });
}

simulateAsyncOperationPromise()
    .then(function() {
        console.log("Promise resolved after simulated async operation.");
    })
    .catch(function(error) {
        console.error("Promise rejected:", error);
    });


    async function simulateAsyncOperationAsyncAwait() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log("Async/Await Simulated asynchronous operation completed.");
                resolve();
            }, 2000);
        });
    }
    

    async function doAsyncWork() {
        try {
            await simulateAsyncOperationAsyncAwait();
            console.log("Async/await function completed after simulated async operation.");
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    doAsyncWork();
