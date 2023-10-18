// An abstract class is a blueprint in creating a class, an instance can't be created of an abstract class.

abstract class TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia ():void
}

class Instagram extends TakePhoto {

    constructor(
        public cameraMethod: string,
        public filter: string,
        public burst: string
    ){
        super(cameraMethod, filter)
    }
    getSepia(): void {
        console.log('hey')
        console.log(this.filter)
    }
}
const solomon = new Instagram('hey', 'filter', 'many-photo')