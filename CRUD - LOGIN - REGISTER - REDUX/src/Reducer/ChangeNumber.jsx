const initialValue = 0
const ChangeNumber = (state = initialValue, action) => {
    switch(action.type){
        case 'INCRIMENT' : return state + 1;
        case 'DERCIMENT' : return state - 1;
        default : return state;
    }
}

export default ChangeNumber;