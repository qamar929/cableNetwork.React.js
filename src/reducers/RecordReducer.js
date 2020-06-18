import { GET_RECORD, DELETE_RECORD,GET_TRANSACTION, GET_RECORDS,GET_TRANSACTIONS,DELETE_TRANSACTION } from '../actions/types'
import { } from '../actions/types'

const initialState = {

    records: [],
    transactions: [],
    record: '',
    transaction: ''

}

export default function (state = initialState, action) {
    switch (action.type) {

        case DELETE_TRANSACTION:
            return { ...state, transactions: state.transactions.filter(x => x.id !== action.payload) }

        case GET_TRANSACTIONS:
            return { ...state, transactions: action.payload }
        case GET_TRANSACTION:
            return { ...state, transaction: action.payload }
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