'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);


describe('express server', () => {


    it('shoud check the Working... works successfully', async () => {
        //arange
        let param = '/';
        let status = 200;
        let text = 'Working...';

        //act 
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('should check 500 errors', async () => {
        //arange
        let param = '/bad';
        let status = 500;

        //act 
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    });

    it('shoud check 404 errors', async () => {
        //arange

        let param = '/notfound';
        let status = 404;

        //act
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
    });

});