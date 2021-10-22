import { func } from 'prop-types';
import React, {useState} from 'react';

export default function useFetch(baseURL) {
    const [isLoading, setIsLoading] = useState(true)

    function get(url) {
        return new Promise((resolve, reject) => {
            fetch(baseURL + url )
            .then(response = response.json())
            .then(data => {
                if(!data) {
                    setIsLoading(false)
                    return reject(data)
                }
                setIsLoading(false)
                resolve(data)
            })
            .catch(error => {
                setIsLoading(false)
                reject(error)
            })
        })
    }


    function post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(baseURL + url, {
                method : 'post',
                headers : {
                    "Content-Type" : "Application/json",
                },
                body : JSON.stringify(body)
            })
            .then(response = response.json())
            .then(data => {
                if (!data) {
                    setIsLoading(false)
                    return reject(data)
                }
                setIsLoading(false)
                resolve(data)
            })
            .catch(error => {
                setIsLoading(false)
                reject(error)
            })
        })
    }

    return {get: get, post : post , isLoading}
}
