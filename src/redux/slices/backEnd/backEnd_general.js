import axiosApi from 'axios';
import axiosConfigCall from 'src/utils/axios_init';
export default class BackEnd_General {

    loadData(slice, parametri) {
        return async (dispatch) => {
            dispatch(slice.actions.startLoading());
            try {
                axiosApi(axiosConfigCall('api', 'get', null, parametri, false, false, false))
                    .then(function (response) {
                        dispatch(slice.actions.loadData_Success(response.data));
                    })
                    .catch(function (error) {
                        dispatch(slice.actions.hasError({ error: error, message: "Errore lettura dati" }));
                    })
            } catch (error) {
                dispatch(slice.actions.hasError(error));
            }
        };
    }    
}//fine classe