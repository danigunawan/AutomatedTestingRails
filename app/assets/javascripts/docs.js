window.get = function() {
var allData = {
    method: 'GET',
    route: '/',
};
var paramList = document.getElementById('getParamsForm') && document.getElementById('getParamsForm').elements ? document.getElementById('getParamsForm').elements : [];

var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var csrfHeader = { headers: { 'X-CSRF-Token': null } };
csrfHeader.headers['X-CSRF-Token'] = csrfToken;
var jsonWebToken = document.getElementById('getAuthorizationToken');
if (jsonWebToken && jsonWebToken.value) csrfHeader.headers['Authorization'] = jsonWebToken.value;

var paramObject = {};
var tempParamKey = null;
for (var i = 0; i < paramList.length; i++) {
var eleParam = paramList[i].value;
if (i % 2 !== 0) {
    paramObject[':' + tempParamKey] = eleParam;
    tempParamKey = null;
} else {
    tempParamKey = eleParam;
}
}

var routeName = allData.route.split('/').map(e => paramObject[e] ? paramObject[e] : e).join('/');

if (allData.method !== 'GET' || allData.method !== 'DELETE') {
var bodyDataType = document.getElementById('getDataType') && document.getElementById('getDataType').value ? document.getElementById('getDataType').value : false;
var formBoolean = bodyDataType === 'Form Data';

var bodyElements = [];
var bodyRawElements = document.getElementById('getBodyForm') && document.getElementById('getBodyForm').elements ? document.getElementById('getBodyForm').elements : [];
for (var i = 0; i < bodyRawElements.length; i++) {
    var eleParam = bodyRawElements[i].value || null;
    bodyElements.push(eleParam);
}

bodyElements = bodyElements.filter(e => !!e);

var bodyObject = bodyDataType === 'Form Data' ? new FormData() : {};
var tempBodyKey = null;
bodyElements.forEach((e, i) => {
    if (i % 2 !== 0) {
        if (formBoolean) {
            bodyObject.append(tempBodyKey, e);
            tempBodyKey = null;
        } else {
            bodyObject[tempBodyKey] = e;
            tempBodyKey = null;
        }
    } else {
        if (formBoolean) {
            tempBodyKey = e;
        } else {
            bodyObject[e] = null;
            tempBodyKey = e;
        }
    }
});
}

var qsElements = [];
var qsRawElements = document.getElementById('getQSForm') && document.getElementById('getQSForm').elements ? document.getElementById('getQSForm').elements : [];
for (var i = 0; i < qsRawElements.length; i++) {
var eleParam = qsRawElements[i].value || null;
qsElements.push(eleParam);
}

qsElements = qsElements.filter(e => !!e);

var qsObject = {};
var tempQSKey = null;
qsElements.forEach((e, i) => {
if (i % 2 !== 0) {
    qsObject[tempQSKey] = e;
    tempQSKey = null;
} else {
    qsObject[e] = null;
    tempQSKey = e;
}
});

var qsLength = Object.keys(qsObject).length;
var querystring = qsLength > 0 ? '?' : '';
var qsCount = 0;
if (querystring === '?') {
for (var qs in qsObject) {
    if (qsLength - 1 === qsCount) {
        querystring += qs + '=' + qsObject[qs];
    } else {
        querystring += qs + '=' + qsObject[qs] + '&';
    }
}
}

var args = allData.method === 'GET' || allData.method === 'DELETE' ? [routeName + querystring, csrfHeader] : [routeName + querystring, bodyObject, csrfHeader];
var resultElement = document.getElementById('get-results');

axios[allData.method.toLowerCase()](...args)
.then((resp) => {
    if (resp.status <= 300) {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    } else {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    }
})
.catch((err) => {
    resultElement.innerText = JSON.stringify(err.data, null, 4);
});
};
window.getNewBody = function() {
var ele = document.getElementById('getBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};

window.getNewBodyFile = function() {
var ele = document.getElementById('getBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="file" placeholder="Enter value"></div>';
};

window.getNewQS = function() {
var ele = document.getElementById('getQSForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};
window.getDocs = function() {
var allData = {
    method: 'GET',
    route: '/docs',
};
var paramList = document.getElementById('getDocsParamsForm') && document.getElementById('getDocsParamsForm').elements ? document.getElementById('getDocsParamsForm').elements : [];

var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var csrfHeader = { headers: { 'X-CSRF-Token': null } };
csrfHeader.headers['X-CSRF-Token'] = csrfToken;
var jsonWebToken = document.getElementById('getDocsAuthorizationToken');
if (jsonWebToken && jsonWebToken.value) csrfHeader.headers['Authorization'] = jsonWebToken.value;

var paramObject = {};
var tempParamKey = null;
for (var i = 0; i < paramList.length; i++) {
var eleParam = paramList[i].value;
if (i % 2 !== 0) {
    paramObject[':' + tempParamKey] = eleParam;
    tempParamKey = null;
} else {
    tempParamKey = eleParam;
}
}

var routeName = allData.route.split('/').map(e => paramObject[e] ? paramObject[e] : e).join('/');

if (allData.method !== 'GET' || allData.method !== 'DELETE') {
var bodyDataType = document.getElementById('getDocsDataType') && document.getElementById('getDocsDataType').value ? document.getElementById('getDocsDataType').value : false;
var formBoolean = bodyDataType === 'Form Data';

var bodyElements = [];
var bodyRawElements = document.getElementById('getDocsBodyForm') && document.getElementById('getDocsBodyForm').elements ? document.getElementById('getDocsBodyForm').elements : [];
for (var i = 0; i < bodyRawElements.length; i++) {
    var eleParam = bodyRawElements[i].value || null;
    bodyElements.push(eleParam);
}

bodyElements = bodyElements.filter(e => !!e);

var bodyObject = bodyDataType === 'Form Data' ? new FormData() : {};
var tempBodyKey = null;
bodyElements.forEach((e, i) => {
    if (i % 2 !== 0) {
        if (formBoolean) {
            bodyObject.append(tempBodyKey, e);
            tempBodyKey = null;
        } else {
            bodyObject[tempBodyKey] = e;
            tempBodyKey = null;
        }
    } else {
        if (formBoolean) {
            tempBodyKey = e;
        } else {
            bodyObject[e] = null;
            tempBodyKey = e;
        }
    }
});
}

var qsElements = [];
var qsRawElements = document.getElementById('getDocsQSForm') && document.getElementById('getDocsQSForm').elements ? document.getElementById('getDocsQSForm').elements : [];
for (var i = 0; i < qsRawElements.length; i++) {
var eleParam = qsRawElements[i].value || null;
qsElements.push(eleParam);
}

qsElements = qsElements.filter(e => !!e);

var qsObject = {};
var tempQSKey = null;
qsElements.forEach((e, i) => {
if (i % 2 !== 0) {
    qsObject[tempQSKey] = e;
    tempQSKey = null;
} else {
    qsObject[e] = null;
    tempQSKey = e;
}
});

var qsLength = Object.keys(qsObject).length;
var querystring = qsLength > 0 ? '?' : '';
var qsCount = 0;
if (querystring === '?') {
for (var qs in qsObject) {
    if (qsLength - 1 === qsCount) {
        querystring += qs + '=' + qsObject[qs];
    } else {
        querystring += qs + '=' + qsObject[qs] + '&';
    }
}
}

var args = allData.method === 'GET' || allData.method === 'DELETE' ? [routeName + querystring, csrfHeader] : [routeName + querystring, bodyObject, csrfHeader];
var resultElement = document.getElementById('getDocs-results');

axios[allData.method.toLowerCase()](...args)
.then((resp) => {
    if (resp.status <= 300) {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    } else {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    }
})
.catch((err) => {
    resultElement.innerText = JSON.stringify(err.data, null, 4);
});
};
window.getDocsNewBody = function() {
var ele = document.getElementById('getDocsBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};

window.getDocsNewBodyFile = function() {
var ele = document.getElementById('getDocsBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="file" placeholder="Enter value"></div>';
};

window.getDocsNewQS = function() {
var ele = document.getElementById('getDocsQSForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};
window.getApiV1UserIdParam = function() {
var allData = {
    method: 'GET',
    route: '/api/v1/user/:id',
};
var paramList = document.getElementById('getApiV1UserIdParamParamsForm') && document.getElementById('getApiV1UserIdParamParamsForm').elements ? document.getElementById('getApiV1UserIdParamParamsForm').elements : [];

var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var csrfHeader = { headers: { 'X-CSRF-Token': null } };
csrfHeader.headers['X-CSRF-Token'] = csrfToken;
var jsonWebToken = document.getElementById('getApiV1UserIdParamAuthorizationToken');
if (jsonWebToken && jsonWebToken.value) csrfHeader.headers['Authorization'] = jsonWebToken.value;

var paramObject = {};
var tempParamKey = null;
for (var i = 0; i < paramList.length; i++) {
var eleParam = paramList[i].value;
if (i % 2 !== 0) {
    paramObject[':' + tempParamKey] = eleParam;
    tempParamKey = null;
} else {
    tempParamKey = eleParam;
}
}

var routeName = allData.route.split('/').map(e => paramObject[e] ? paramObject[e] : e).join('/');

if (allData.method !== 'GET' || allData.method !== 'DELETE') {
var bodyDataType = document.getElementById('getApiV1UserIdParamDataType') && document.getElementById('getApiV1UserIdParamDataType').value ? document.getElementById('getApiV1UserIdParamDataType').value : false;
var formBoolean = bodyDataType === 'Form Data';

var bodyElements = [];
var bodyRawElements = document.getElementById('getApiV1UserIdParamBodyForm') && document.getElementById('getApiV1UserIdParamBodyForm').elements ? document.getElementById('getApiV1UserIdParamBodyForm').elements : [];
for (var i = 0; i < bodyRawElements.length; i++) {
    var eleParam = bodyRawElements[i].value || null;
    bodyElements.push(eleParam);
}

bodyElements = bodyElements.filter(e => !!e);

var bodyObject = bodyDataType === 'Form Data' ? new FormData() : {};
var tempBodyKey = null;
bodyElements.forEach((e, i) => {
    if (i % 2 !== 0) {
        if (formBoolean) {
            bodyObject.append(tempBodyKey, e);
            tempBodyKey = null;
        } else {
            bodyObject[tempBodyKey] = e;
            tempBodyKey = null;
        }
    } else {
        if (formBoolean) {
            tempBodyKey = e;
        } else {
            bodyObject[e] = null;
            tempBodyKey = e;
        }
    }
});
}

var qsElements = [];
var qsRawElements = document.getElementById('getApiV1UserIdParamQSForm') && document.getElementById('getApiV1UserIdParamQSForm').elements ? document.getElementById('getApiV1UserIdParamQSForm').elements : [];
for (var i = 0; i < qsRawElements.length; i++) {
var eleParam = qsRawElements[i].value || null;
qsElements.push(eleParam);
}

qsElements = qsElements.filter(e => !!e);

var qsObject = {};
var tempQSKey = null;
qsElements.forEach((e, i) => {
if (i % 2 !== 0) {
    qsObject[tempQSKey] = e;
    tempQSKey = null;
} else {
    qsObject[e] = null;
    tempQSKey = e;
}
});

var qsLength = Object.keys(qsObject).length;
var querystring = qsLength > 0 ? '?' : '';
var qsCount = 0;
if (querystring === '?') {
for (var qs in qsObject) {
    if (qsLength - 1 === qsCount) {
        querystring += qs + '=' + qsObject[qs];
    } else {
        querystring += qs + '=' + qsObject[qs] + '&';
    }
}
}

var args = allData.method === 'GET' || allData.method === 'DELETE' ? [routeName + querystring, csrfHeader] : [routeName + querystring, bodyObject, csrfHeader];
var resultElement = document.getElementById('getApiV1UserIdParam-results');

axios[allData.method.toLowerCase()](...args)
.then((resp) => {
    if (resp.status <= 300) {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    } else {
        resultElement.innerText = JSON.stringify(resp.data, null, 4);
    }
})
.catch((err) => {
    resultElement.innerText = JSON.stringify(err.data, null, 4);
});
};
window.getApiV1UserIdParamNewBody = function() {
var ele = document.getElementById('getApiV1UserIdParamBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};

window.getApiV1UserIdParamNewBodyFile = function() {
var ele = document.getElementById('getApiV1UserIdParamBodyForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="file" placeholder="Enter value"></div>';
};

window.getApiV1UserIdParamNewQS = function() {
var ele = document.getElementById('getApiV1UserIdParamQSForm');
ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
};
