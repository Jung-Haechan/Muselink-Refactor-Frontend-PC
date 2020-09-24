import Axios from 'axios'
import responseHandler from './responseHandler'

function request (data) {
  const url = `${data.resourceUri}${(data.resourceId ? `/${data.resourceId}` : '')}${(data.action ? `:${data.action}` : '')}${(data.isBatch ? ':batch' : '')}`
  let requestData = null
  if (data.requestData) {
    if (Array.isArray(data.requestData)) {
      requestData = { data: data.requestData }
    } else {
      requestData = data.requestData
    }
  }
  return Axios({
    url: url.trim(),
    method: data.method,
    data: requestData,
    params: data.requestParams ? data.requestParams : null,
    responseType: data.responseType
  })
    .then(data.handleResponse)
    .catch(data.handleError)
    .finally(data.finalAction)
}

function getResourceByUri (uri) {
  const uriArray = uri.split('/')
  return uriArray[uriArray.length - 1]
}

export default {
  store: (resourceUri, requestData, finalAction, isBatch) => {
    const data = {
      resourceUri,
      method: 'post',
      isBatch: Array.isArray(requestData) || isBatch,
      requestData,
      handleResponse: responseHandler.notifyResponse,
      handleError: responseHandler.notifyError,
      finalAction
    }
    return request(data)
  },

  index: (resourceUri, requestParams, handleResponse, finalAction) => {
    const data = {
      resourceUri,
      method: 'get',
      requestParams,
      handleResponse,
      handleError: responseHandler.notifyError,
      finalAction
    }
    return request(data)
  },

  show: (resourceUri, resourceId, handleResponse) => {
    const data = {
      resourceUri,
      method: 'get',
      resourceId,
      handleResponse,
      handleError: responseHandler.notifyError
    }
    return request(data)
  },

  update: (resourceUri, resourceId, requestData, finalAction) => {
    const data = {
      resourceUri,
      resourceId,
      method: 'put',
      isBatch: Array.isArray(requestData) && !resourceId,
      requestData,
      handleResponse: responseHandler.notifyResponse,
      handleError: responseHandler.notifyError,
      finalAction
    }
    return request(data)
  },

  delete: (resourceUri, resourceId, requestData, finalAction) => {
    const data = {
      resourceUri,
      resourceId,
      method: 'delete',
      isBatch: requestData && !resourceId,
      requestData,
      handleResponse: responseHandler.notifyResponse,
      handleError: responseHandler.notifyError,
      finalAction
    }
    return request(data)
  },

  patchAction: (resourceUri, action, requestData, handleResponse, finalAction) => {
    const data = {
      resourceUri,
      method: 'patch',
      isBatch: true,
      action,
      requestData,
      handleResponse,
      handleError: responseHandler.notifyError,
      finalAction
    }
    return request(data)
  },

  getResourceByUri
}
