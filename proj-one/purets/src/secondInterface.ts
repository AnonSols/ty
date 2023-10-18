// a protocol or guideline that state a definition on the creation of different instances

interface NewPhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story {
    createStory(): string | void 
}
class Facebook implements NewPhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements NewPhoto, Story {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string,
    ){}

    createStory(): string | void {
        console.log('Story was created');
    }
    
}