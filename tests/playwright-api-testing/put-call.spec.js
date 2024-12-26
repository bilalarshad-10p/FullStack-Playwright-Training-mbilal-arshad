const { test, expect } = require('@playwright/test');
import {URL, USERNAME, PASSWORD,apiBaseUrl } from '../../test-constants/constants.js';

var token

test('should be able to update the booking', async({request})=> {
    const response = await request.post(apiBaseUrl+'/auth',{
        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    token = responseBody.token;
    console.log("New Token is: " + token);

    //Get before updating data
    const beforeUpdateResponse = await request.get(apiBaseUrl+'/booking/1');
    console.log(await beforeUpdateResponse.json());
    expect(beforeUpdateResponse.ok()).toBeTruthy();
    expect(beforeUpdateResponse.status()).toBe(200);

    //Put > update records

    const updateRequest = await request.put(apiBaseUrl+'/booking/1',{
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Cookie' : `token=${token}`,
        },
        data: {
            "firstname": "Bilal",
            "lastname" : "Arshad",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout" : "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);
    const updatedResponseBody = await updateRequest.json()
    expect(updatedResponseBody).toHaveProperty("firstname", "Bilal");
    expect(updatedResponseBody).toHaveProperty("lastname", "Arshad");
    expect(updatedResponseBody).toHaveProperty("totalprice", 111);
    expect(updatedResponseBody).toHaveProperty("depositpaid", true);


    //Get call after update in data
    const afterUpdateResponse = await request.get(apiBaseUrl+'/booking/1');
    console.log(await afterUpdateResponse.json());
    expect(afterUpdateResponse.ok()).toBeTruthy();
    expect(afterUpdateResponse.status()).toBe(200);

});