console.log("Start")

setTimeout(() => {
    console.log("Callback executed")
}, 0)

console.log("End")

/*Although the timeout is 0,"Callback executed" is logged after "End" due to
the event loop. */