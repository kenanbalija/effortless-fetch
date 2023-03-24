class AJAX {
    static request(method, url, data = null, headers = {}) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(`Request failed with status ${xhr.status}: ${xhr.statusText}`));
                    }
                }
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            for (const header in headers) {
                if (Object.prototype.hasOwnProperty.call(headers, header)) {
                    xhr.setRequestHeader(header, headers[header]);
                }
            }

            if (data && typeof data === 'object') {
                data = JSON.stringify(data);
                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            }

            xhr.send(data);
        });
    }

    static get(url, headers = {}) {
        return AJAX.request('GET', url, null, headers);
    }

    static post(url, data = null, headers = {}) {
        return AJAX.request('POST', url, data, headers);
    }

    static put(url, data = null, headers = {}) {
        return AJAX.request('PUT', url, data, headers);
    }

    static delete(url, headers = {}) {
        return AJAX.request('DELETE', url, null, headers);
    }
}
