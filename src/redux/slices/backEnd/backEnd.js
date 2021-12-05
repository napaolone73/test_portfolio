import { createSlice } from '@reduxjs/toolkit';
import MapperResponse_General from './Response/mapper_response_general.js'
import BackEnd_General from './backEnd_general'
import MapperRequest_General from './Request/mapper_request.general';
// ----------------------------------------------------------------------

const initialState = {
    isLoadingBackEnd: false,
    error: "",
    okSalvataggio: false,
    listaUtenti:[],
    utente:null
};

const mapperResponse_General = new MapperResponse_General();
const mapperRequest_General = new MapperRequest_General();
const backEnd_General = new BackEnd_General();


const slice = createSlice({
    name: 'backEnd',
    initialState,
    reducers: {

        // START LOADING
        startLoading(state) {
            state.isLoadingBackEnd = true;
        },

        endLoading(state) {
            state.isLoadingBackEnd = false;
        },
        endError(state) {
            state.error = "";
            state.errorInPopUp = "";
        },
        // HAS ERROR
        hasError(state, action) {
            state.isLoadingBackEnd = false;
            state.error = action.payload.message;
        }
        , loadData_Success(state, action) {
            state.isLoadingBackEnd = false;
            state.listaUtenti = mapperResponse_General.ListaUtenti(action.payload);
            state.utente = state.listaUtenti.length>0 ? state.listaUtenti[0]:null;
        },
        // ****************************************************************
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function endError() {
    return async (dispatch) => {
        dispatch(slice.actions.endError());
    };
}
export function loadData() {
    return backEnd_General.loadData(slice, mapperRequest_General.param_loadData());
}
// ----------------------------------------------------------------------
