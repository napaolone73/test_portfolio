import { Config } from 'src/Constants';

function getHeader(isExcel, userTocken, fileData) {
    let myHeader = {};
  myHeader['Authorization'] = `Bearer ${userTocken}`;
  if (isExcel) {
    myHeader['Accept'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    myHeader["Content-Type"] = 'application/json';
  }
  else
    if (fileData) {
      myHeader['Content-Type'] = 'multipart/form-data; boundary=--------------------------332329087070881609265721';
    }
    else {
      myHeader["Content-Type"] = 'application/json';  
      
    }
  return myHeader;
}
function getParamInQueryString(params, isJsonData, isFormData) {
  let paramApi = '';
  if (params && !isJsonData && !isFormData) {
    let aKey = Object.keys(params);
    let aValue = Object.values(params);
    for (let i = 0; i < aKey.length; i++) {
      let key = aKey[i];
      let value = aValue[i];
      if (aValue.length>i) {
        if (paramApi)
          paramApi += `&${key}=${value}`;
        else
          paramApi += `?${key}=${value}`;
      }
    };
    return paramApi;
  }
}
function getParmFormData(params, isFormData, fileData) {
  var data = null;
  if (params && isFormData) {
    data = new FormData();
    let aKey = Object.keys(params);
    let aValue = Object.values(params);
    for (let i = 0; i < aKey.length; i++) {
      let key = aKey[i];
      let value = aValue[i];
      if (aValue[i]) {
        data.append(key, value);
      }
    };
  }
  if (fileData) {
    data = new FormData();
    data.append("file", fileData);
    data.append("fileName", fileData.name);

  }
  return data;
}
function getParamJsonData(params, isJsonData) {
  var data = null;
  if (params && isJsonData) {
    data = JSON.stringify(params);
  }
  return data;
}

export default function CreateConfigAxios(urlApi, method, token, params, isExcel, isJsonData, isFormData, fileData) {
   
  const url = (isJsonData || isFormData || !params) ? `${Config.api_url}${urlApi}` : `${Config.api_url}${urlApi}${getParamInQueryString(params, isJsonData, isFormData)}`;
  const headers = getHeader(isExcel, token, fileData);
  const parametri = isJsonData ? getParamJsonData(params, isJsonData) : getParmFormData(params, isFormData, fileData);

  let ret = {
    method: method,
    url: url,
    headers: headers,   
  }
  if (isExcel)
  {
    ret["responseType"]='arraybuffer';
  }  
  if (parametri !== null) {
    ret["data"]=parametri;  
  }  
  return ret;
}
