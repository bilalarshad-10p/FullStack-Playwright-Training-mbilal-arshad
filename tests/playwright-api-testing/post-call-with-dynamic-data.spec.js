const { test, expect } = require('@playwright/test');
import {faker} from '@faker-js/faker';
const { DateTime } = require("luxon");

const randomFirstName = faker.person.firstName()
const randomLastName = faker.person.lastName()
const randomNumber= faker.number.int(4)
const currentDate = DateTime.now().toFormat('yyyy-MM-dd')
const currentDatePlusFive = DateTime.now().plus({days: 5}).toFormat('yyyy-MM-dd')


test('should be able to create new booking', async({request})=> {
    const response = await request.post("https://restful-booker.herokuapp.com/booking",{
        data: {
            "firstname": randomFirstName,
            "lastname": randomLastName,
            "totalprice":randomNumber,
            "depositpaid": true,
            "bookingdates":{
                "checkin": currentDate,
                "checkout": currentDatePlusFive
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", randomFirstName);
    expect(responseBody.booking).toHaveProperty("lastname", randomLastName);
    expect(responseBody.booking).toHaveProperty("totalprice", randomNumber);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});