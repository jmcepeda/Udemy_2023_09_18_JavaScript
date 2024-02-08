const EventEmitter=require("events")

const custonEmitter= new EventEmitter()

custonEmitter.on("response",(data,secodData)=>{
    console.log("Received")
    console.log(`data: ${data} y secondData: ${secodData}`);
})

custonEmitter.emit("response","Hello World",[1,4,7,23,"Rabo de Toro"] )
custonEmitter.emit("response",{"name": "Arturo", "age": 34},["Carlos", "Roberto", "Alicia"])
custonEmitter.emit("response",45, ["Diplomacia",3, 56])

