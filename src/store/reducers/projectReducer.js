
const initState={
    projects:[
        {id:'1', title:'Help me find peach', content:'Am on the way to find the peach!'},
        {id:'2', title:'collect all the stars', content:'How could i do this!'},
        {id:'3', title:'egg hunt with Any man', content:'Wow that could be nice!'}
    ]
}
const projectReducer=(state=initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project!', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error!', action.err);
            return state;
        default:
            return state;
    }
    
}
export default projectReducer;