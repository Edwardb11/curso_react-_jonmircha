import{PETICION_EN_MARCHA,PETICION_EXITOSA,PETICION_ERRONEA} from '../Actions/UserActions'


const initialState={
    users:[],
    enMarcha:false, 
    error:null
}

function users(state=initialState,action){
    switch(action.type){
        case PETICION_EN_MARCHA: 
            return{
                ...state,
                enMarcha:true
            }

        case PETICION_EXITOSA: 
           return{
               ...state,
               enMarcha:false, 
               users:action.payload.users
           }
        case PETICION_ERRONEA: 
           return{
               ...state,
               enMarcha:false, 
               error:action.payload.error
           }
        default:
            return state
    }
}
export default users