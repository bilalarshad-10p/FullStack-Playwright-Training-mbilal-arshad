const { test, expect } = require('@playwright/test');

test('should be able to create new booking', async({request})=> {
    const response = await request.post("https://restful-booker.herokuapp.com/booking",{
        data: {
            "firstname": "Playwright",
            "lastname": "QA",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates":{
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
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