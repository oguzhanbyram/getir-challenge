const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../src/app.js');

chai.use(chaiHttp);

describe('/POST records filter', () => {
    it("Returns filtered records", (done) => {
        const body = {
            startDate: '2016-01-01',
            endDate: '2016-01-10',
            minCount: 1,
            maxCount: 70
        }

        chai.request(app)
            .post('/api/records/filter')
            .send(body)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('code');
                res.body.should.have.property('msg');
                res.body.should.have.property('records');
                done();
            });
    });
})