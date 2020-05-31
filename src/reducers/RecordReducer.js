import { GET_RECORD, DELETE_RECORD,GET_RECORDS } from '../actions/types'
import { } from '../actions/types'

const initialState = {

    records: [],
    record:''

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RECORDS:
            return { ...state, record: action.payload };
        case GET_RECORD:
            return { ...state, records: action.payload };
        case DELETE_RECORD:
            return { ...state, records: state.records.filter(x => x.id !== action.payload) }
        default:
            return state;
    }
}