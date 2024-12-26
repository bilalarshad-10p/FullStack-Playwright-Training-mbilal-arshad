const { test, expect } = require('@playwright/test');
const bookingDetails = require('../playwright-constants/booking-details.json');

test('should be able to create new booking', async({request})=> {
    const response = await request.post("https://restful-booker.herokuapp.com/booking",{
        data: bookingDetails
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Playwright");
    expect(responseBody.booking).toHaveProperty("lastname", "QA");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});