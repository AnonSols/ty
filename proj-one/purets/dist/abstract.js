"use strict";
// An abstract class is a blueprint in creating a class, an instance can't be created of an abstract class.
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMethod, filter, burst) {
        super(cameraMethod, filter);
        this.cameraMethod = cameraMethod;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('hey');
        console.log(this.filter);
    }
}
const solomon = new Instagram('hey', 'filter', 'many-photo');
