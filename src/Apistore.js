import {  makeObservable, observable } from 'mobx';

class ProjectStore {
    emailOrUsername = [];
    password = [];

    constructor(){
        makeObservable(this,{
            emmailOrUsername : observable,
            password: observable,
        })
    }
}

export default ProjectStore;