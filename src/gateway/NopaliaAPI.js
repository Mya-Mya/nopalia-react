import axios from "axios";

export class NopaliaAPI {
    constructor() {
        this._type = '';
        this._payload = {};
        this._onResponseCallback = data => { };
        this._onErrorCallback = () => { };
        this._finallyCallback = () => { };
    }
    static type(type) {
        let instance = new NopaliaAPI();
        instance._type = type;
        return instance;
    }
    payload(payload) {
        this._payload = payload;
        return this;
    }
    onResponse(onResponseCallback) {
        this._onResponseCallback = onResponseCallback;
        return this;
    }
    onError(onErrorCallback) {
        this._onErrorCallback = onErrorCallback;
        return this;
    }
    finally(finallyCallback) {
        this._finallyCallback = finallyCallback;
        return this;
    }
    send() {
        axios.get('https://script.google.com/macros/s/AKfycbzawKW1pBC_7RQT9mQtWkoITNSvpa5jnTn0FsI6vqNC-8rbzO3MwwykVw/exec',
            {
                params: {
                    type: this._type,
                    payload: JSON.stringify(this._payload)
                }
                , responseType: 'text'
            })
            .then(response => this._onResponseCallback(response.data))
            .catch(error => this._onErrorCallback())
            .finally(() => this._finallyCallback());
    }
}